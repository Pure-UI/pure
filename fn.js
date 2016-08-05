import Regular from 'regularjs';

// 直接在此处继承Regular，如果外界已有Regular，使用Pure.extend可以避免Regular被覆盖的问题
const Pure = Regular.extend({});

Pure.note = ( content, type, timeout ) => {
	const Note2 = Pure.extend({
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
	new Note2().$inject( document.body );
};

export default Pure;
