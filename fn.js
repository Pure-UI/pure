import Regular from 'regularjs';

const Pure = {};

Pure.note = ( content, type, timeout ) => {
	const Note2 = Regular.extend({
		template: `
			{#if showNote}
			<div
				class="r-note-will-transition"
				r-animation="
					on: enter;
					class: r-note-in, 3;
					wait: ${timeout || 2000};
					class: r-note-out, 3;
					emit: remove;
				">
				<Note type="${type}">${content}</Note>
			</div>
			{/if}
		`,
		config() {
			this.data.showNote = true;
			this.$on('remove', () => {
				this.data.showNote = false;
				this.$update();
			});
		},
		init() {

		}
	});
	new Note2({

	}).$inject( document.body );
};

export default Pure;
