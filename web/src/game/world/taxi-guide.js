import {
	BoxGeometry,
	CircleGeometry,
	Group,
	Mesh,
	MeshBasicMaterial,
} from "../core/three.js";

// Flat, shared geometry keeps this small even for a long runway backtrack.
export class TaxiGuide {
	group = new Group();
	box = new BoxGeometry(1, 1, 1);
	disc = new CircleGeometry(2.2, 24);
	pathMaterial = new MeshBasicMaterial({ color: 0xf2b134 });
	targetMaterial = new MeshBasicMaterial({ color: 0x2a9d8f });
	key = "";

	constructor() {
		this.group.name = "ATC taxi guidance";
	}

	segment(start, end, width, material, groundHeight) {
		const length = Math.hypot(end.x - start.x, end.z - start.z);
		if (length < 0.01) return;
		const mesh = new Mesh(this.box, material);
		const x = (start.x + end.x) / 2;
		const z = (start.z + end.z) / 2;
		mesh.position.set(x, groundHeight(x, z) + 0.46, z);
		mesh.scale.set(length, 0.035, width);
		mesh.rotation.y = -Math.atan2(end.z - start.z, end.x - start.x);
		this.group.add(mesh);
	}

	update(guide, groundHeight) {
		if (!guide) {
			this.clear();
			return;
		}
		const points = guide.points ?? [];
		const target = guide.target;
		const key = JSON.stringify([guide.kind, points, target]);
		if (key === this.key) return;
		this.clear();
		this.key = key;
		for (let index = 1; index < points.length; index++) {
			const start = points[index - 1];
			const end = points[index];
			const distance = Math.hypot(end.x - start.x, end.z - start.z);
			for (let offset = 0; offset < distance; offset += 7) {
				const point = (along) => ({
					x: start.x + ((end.x - start.x) * along) / distance,
					z: start.z + ((end.z - start.z) * along) / distance,
				});
				this.segment(
					point(offset),
					point(Math.min(distance, offset + 3.5)),
					0.55,
					this.pathMaterial,
					groundHeight,
				);
			}
		}
		const { holding, parking } = guide.layout;
		for (const point of [holding, parking]) {
			if (!point) continue;
			for (const offset of [-0.75, 0.75]) {
				const center = {
					x: point.x - guide.airport.dirZ * offset,
					z: point.z + guide.airport.dirX * offset,
				};
				this.segment(
					{
						x: center.x - guide.airport.dirX * 6,
						z: center.z - guide.airport.dirZ * 6,
					},
					{
						x: center.x + guide.airport.dirX * 6,
						z: center.z + guide.airport.dirZ * 6,
					},
					0.35,
					this.pathMaterial,
					groundHeight,
				);
			}
		}
		if (target) {
			const marker = new Mesh(this.disc, this.targetMaterial);
			marker.rotation.x = -Math.PI / 2;
			marker.position.set(
				target.x,
				groundHeight(target.x, target.z) + 0.5,
				target.z,
			);
			this.group.add(marker);
		}
	}

	clear() {
		this.group.clear();
		this.key = "";
	}

	dispose() {
		this.clear();
		this.box.dispose();
		this.disc.dispose();
		this.pathMaterial.dispose();
		this.targetMaterial.dispose();
	}
}
