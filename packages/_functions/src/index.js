import install from 'pure-install';
import Note from 'pure-note';

export default function ( Component, target = {} ) {
	Component.use( function ( Component, Regular ) {
		const AnimNote = Regular.extend( {
			template: `
				{#if showNote}
					<div class="pure-note--fixed pure-note--will-transition" r-animation="on: enter;wait: 10;class: pure-note--in, 3;wait: { timeout };class: pure-note--out, 3;emit: remove;">
						<Note type="{ type }">{ content }</Note>
					</div>
				{/if}
			`,
			config() {
				this.data.timeout = this.data.timeout || 2000;
				this.data.showNote = true;
				this.$on( 'remove', () => {
					this.data.showNote = false;
					this.$update();
				} );
			},
		} );

		AnimNote.use( install( 'Note', Note ) );

		Object.assign( target, {
			note( content, type, timeout ) {
				new AnimNote( {
					data: {
						content,
						type,
						timeout,
					},
				} ).$inject( document.body );
			},
		} );
	} );
};
