export default ( Component, v ) => {
	v.note = ( content, type, timeout ) => {
		const Note = Component.extend({
			template: `
				{#if showNote}
				<div
					class="r-note-will-transition"
					r-animation="
						on: enter;
						wait: 10;
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
				this.$emit( 'notein' )
			}
		});
		new Note().$inject( document.body );
	};
};
