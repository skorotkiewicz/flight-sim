const MAX_MESSAGES = 30;

function element(tag, className, text = ``) {
	const node = document.createElement(tag);
	node.className = className;
	node.textContent = text;
	return node;
}

class RadioPanel {
	expanded = true;
	lastRevision = null;
	seenMessages = new Set();
	actionButtons = new Map();
	visible = false;

	constructor({ onAction = () => {}, onToggle = () => {} } = {}) {
		this.onAction = onAction;
		// Called with the new expanded state for button, keyboard and API toggles.
		this.onToggle = onToggle;
		this.root = element(`section`, `radio-panel`);
		this.root.dataset.flightUi = ``;
		this.root.setAttribute(`aria-label`, `Guided ATC radio`);
		this.root.hidden = true;
		this.header = element(`div`, `radio-header`);
		this.status = element(`p`, `radio-status`);
		this.toggleButton = element(`button`, `radio-toggle`, `Radio`);
		this.toggleButton.type = `button`;
		this.toggleButton.setAttribute(`aria-controls`, `atc-radio-details`);
		this.toggleButton.setAttribute(`aria-expanded`, `true`);
		this.toggleButton.title = `Toggle radio (T)`;
		this.toggleButton.addEventListener(`click`, () => this.toggle());
		this.header.append(this.status, this.toggleButton);
		this.instruction = element(`p`, `radio-instruction`);
		this.details = element(`div`, `radio-details`);
		this.details.id = `atc-radio-details`;
		this.objective = element(`p`, `radio-objective`);
		this.actions = element(`div`, `radio-actions`);
		this.actions.setAttribute(`role`, `group`);
		this.actions.setAttribute(`aria-label`, `Radio requests and readbacks`);
		this.transcript = element(`ol`, `radio-transcript`);
		this.transcript.setAttribute(`aria-label`, `Radio message history`);
		this.details.append(this.objective, this.actions, this.transcript);
		this.live = element(`div`, `radio-live`);
		this.live.setAttribute(`role`, `status`);
		this.live.setAttribute(`aria-live`, `polite`);
		this.live.setAttribute(`aria-atomic`, `true`);
		this.root.append(this.header, this.instruction, this.details, this.live);
		this.root.addEventListener(`keydown`, (event) => {
			event.stopPropagation();
			if (event.code === `KeyT` && !event.repeat) {
				event.preventDefault();
				this.toggle();
			} else if (event.code === `Escape` && this.expanded) {
				event.preventDefault();
				this.toggle();
			}
		});
		for (const name of [
			`keyup`,
			`keypress`,
			`pointerdown`,
			`pointerup`,
			`pointermove`,
			`pointercancel`,
			`mousedown`,
			`mouseup`,
			`mousemove`,
			`touchstart`,
			`touchmove`,
			`touchend`,
			`click`,
			`dblclick`,
			`wheel`,
		]) {
			this.root.addEventListener(name, (event) => event.stopPropagation());
		}
		document.body.append(this.root);
	}

	render(snapshot, { visible = true, paused = false } = {}) {
		if (!snapshot) {
			this.lastRevision = null;
			this.seenMessages.clear();
			this.live.textContent = ``;
			this.hide();
			return;
		}
		this.visible = visible && !paused;
		this.root.hidden = !this.visible;
		if (!this.visible || snapshot.revision === this.lastRevision) return;
		if (this.lastRevision !== null && snapshot.revision < this.lastRevision) {
			this.seenMessages.clear();
		}
		this.lastRevision = snapshot.revision;
		const runway =
			typeof snapshot.runway === `object`
				? snapshot.runway?.number
				: snapshot.runway;
		this.status.textContent = [
			snapshot.controller,
			snapshot.airfieldName,
			runway ? `Runway ${runway}` : null,
		]
			.filter(Boolean)
			.join(` · `);
		this.instruction.textContent =
			snapshot.latestInstruction || `Baron One, radio ready.`;
		this.objective.textContent = snapshot.objective || ``;
		this.objective.hidden = !snapshot.objective;
		this.renderActions(snapshot.actions || []);
		this.renderMessages(snapshot.messages || []);
	}

	renderActions(actions) {
		const focused = document.activeElement;
		const activeIds = new Set(actions.map((action) => action.id));
		for (const [id, button] of this.actionButtons) {
			if (activeIds.has(id)) continue;
			if (focused === button) this.toggleButton.focus({ preventScroll: true });
			button.remove();
			this.actionButtons.delete(id);
		}
		for (const action of actions) {
			let button = this.actionButtons.get(action.id);
			if (!button) {
				button = element(`button`, `radio-action`);
				button.type = `button`;
				button.dataset.actionId = action.id;
				button.addEventListener(`click`, () => this.onAction(action.id));
				this.actionButtons.set(action.id, button);
				this.actions.append(button);
			}
			if (button.textContent !== action.label)
				button.textContent = action.label;
		}
	}

	renderMessages(messages) {
		const history = messages.slice(-MAX_MESSAGES);
		const scroll = this.transcript.scrollTop;
		const atBottom =
			this.transcript.scrollHeight - this.transcript.clientHeight - scroll < 24;
		const fresh = [];
		const nextIds = new Set();
		const entries = history.map((message) => {
			const key = `${message.id}:${message.text}`;
			nextIds.add(key);
			if (!this.seenMessages.has(key) && !/^pilot$/i.test(message.speaker)) {
				fresh.push(`${message.speaker}: ${message.text}`);
			}
			const row = element(`li`, `radio-message`);
			const speaker = element(
				`strong`,
				`radio-speaker`,
				`${message.speaker}: `,
			);
			row.append(speaker, document.createTextNode(message.text));
			return row;
		});
		this.transcript.replaceChildren(...entries);
		this.transcript.scrollTop = atBottom
			? this.transcript.scrollHeight
			: scroll;
		this.seenMessages = nextIds;
		if (fresh.length) this.live.textContent = fresh.join(` `);
	}

	toggle() {
		this.expanded = !this.expanded;
		if (!this.expanded && this.details.contains(document.activeElement)) {
			this.toggleButton.focus({ preventScroll: true });
		}
		this.details.hidden = !this.expanded;
		this.toggleButton.setAttribute(`aria-expanded`, String(this.expanded));
		this.root.classList.toggle(`collapsed`, !this.expanded);
		this.onToggle(this.expanded);
		return this.expanded;
	}

	hide() {
		this.visible = false;
		if (this.root.contains(document.activeElement))
			document.activeElement.blur();
		this.root.hidden = true;
	}

	dispose() {
		this.root.remove();
		this.actionButtons.clear();
		this.seenMessages.clear();
	}
}

export { RadioPanel };
