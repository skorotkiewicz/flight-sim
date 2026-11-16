import { BufferGeometry, Color, DepthTexture, Float32BufferAttribute, FloatType, Mesh, OrthographicCamera, ShaderMaterial, UniformsUtils, UnsignedByteType, UnsignedIntType, Vector2, WebGLRenderTarget } from "./three.js";

var Xf = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
var fxaaMesh = new class extends BufferGeometry {
  constructor() {
    super();
    this.setAttribute(`position`, new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
    this.setAttribute(`uv`, new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
  }
}();
var PostFX = class {
  constructor(e) {
    this._mesh = new Mesh(fxaaMesh, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Xf);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
};
var $f = {
  name: `FXAAShader`,
  uniforms: {
    tDiffuse: {
      value: null
    },
    resolution: {
      value: new Vector2(1 / 1024, 1 / 512)
    }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`
};
var ep = `
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec3 inkColor;
  uniform float strength;
  uniform float threshLo;
  uniform float threshHi;
  uniform float fadeStart;
  uniform float fadeEnd;
  uniform float saturation;
  varying vec2 vUv;

  float invZ(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return 1.0 / max(-perspectiveDepthToViewZ(d, cameraNear, cameraFar), 0.001);
  }

  vec3 toSRGB(vec3 c) {
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float ic = invZ(vUv);
    float s = 0.0;
    s += invZ(vUv + texel * vec2(-1.0, -1.0));
    s += invZ(vUv + texel * vec2( 0.0, -1.0));
    s += invZ(vUv + texel * vec2( 1.0, -1.0));
    s += invZ(vUv + texel * vec2(-1.0,  0.0));
    s += invZ(vUv + texel * vec2( 1.0,  0.0));
    s += invZ(vUv + texel * vec2(-1.0,  1.0));
    s += invZ(vUv + texel * vec2( 0.0,  1.0));
    s += invZ(vUv + texel * vec2( 1.0,  1.0));
    float lap = abs(s - 8.0 * ic) / ic;
    float e = smoothstep(threshLo, threshHi, lap);
    float z = 1.0 / ic;
    e *= 1.0 - smoothstep(fadeStart, fadeEnd, z);
    vec3 col = mix(c, inkColor, e * strength);
    // light colour grade: saturation boost
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = max(mix(vec3(l), col, saturation), 0.0);
    gl_FragColor = vec4(toSRGB(col), 1.0);
  }
`;
var tp = class {
  rt;
  rt2;
  edge;
  fxaa;
  edgeMat;
  fxaaMat;
  constructor() {
    this.rt = new WebGLRenderTarget(1, 1, {
      type: FloatType
    });
    this.rt.depthTexture = new DepthTexture(1, 1);
    this.rt.depthTexture.type = UnsignedIntType;
    this.rt2 = new WebGLRenderTarget(1, 1, {
      type: UnsignedByteType
    });
    this.edgeMat = new ShaderMaterial({
      uniforms: {
        tColor: {
          value: this.rt.texture
        },
        tDepth: {
          value: this.rt.depthTexture
        },
        texel: {
          value: new Vector2()
        },
        cameraNear: {
          value: 0.5
        },
        cameraFar: {
          value: 5000
        },
        inkColor: {
          value: new Color(2825498)
        },
        strength: {
          value: 0.85
        },
        threshLo: {
          value: 0.035
        },
        threshHi: {
          value: 0.12
        },
        fadeStart: {
          value: 900
        },
        fadeEnd: {
          value: 3200
        },
        saturation: {
          value: 1
        }
      },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: ep,
      depthTest: false,
      depthWrite: false
    });
    this.edge = new PostFX(this.edgeMat);
    this.fxaaMat = new ShaderMaterial({
      uniforms: UniformsUtils.clone($f.uniforms),
      vertexShader: $f.vertexShader,
      fragmentShader: $f.fragmentShader,
      depthTest: false,
      depthWrite: false
    });
    this.fxaaMat.uniforms.tDiffuse.value = this.rt2.texture;
    this.fxaa = new PostFX(this.fxaaMat);
  }
  setInk(e) {
    this.edgeMat.uniforms.inkColor.value.setHex(e);
  }
  setFade(e, t) {
    this.edgeMat.uniforms.fadeStart.value = e;
    this.edgeMat.uniforms.fadeEnd.value = t;
  }
  setSize(e, t) {
    e = Math.max(1, Math.floor(e));
    t = Math.max(1, Math.floor(t));
    this.rt.setSize(e, t);
    this.rt2.setSize(e, t);
    this.edgeMat.uniforms.texel.value.set(1 / e, 1 / t);
    this.fxaaMat.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  render(e, t, n) {
    this.edgeMat.uniforms.cameraNear.value = n.near;
    this.edgeMat.uniforms.cameraFar.value = n.far;
    e.setRenderTarget(this.rt);
    e.clear();
    e.render(t, n);
    e.setRenderTarget(this.rt2);
    this.edge.render(e);
    e.setRenderTarget(null);
    this.fxaa.render(e);
  }
  dispose() {
    this.rt.dispose();
    this.rt2.dispose();
    this.edge.dispose();
    this.fxaa.dispose();
  }
};

export { $f, PostFX, Xf, ep, fxaaMesh, tp };
