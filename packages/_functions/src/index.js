import install from 'pure-install';
import Message from 'pure-message';

export default function ( Component, target = {} ) {
	Component.use( function ( Component, Regular ) {
		const AnimMessage = Regular.extend( {
			template: `
				{#if showMessage}
					<div class="pure-message--fixed pure-message--will-transition" r-animation="on: enter;wait: 10;class: pure-message--in, 3;wait: { timeout };class: pure-message--out, 3;emit: remove;">
						<Message type="{ type }">{ content }</Message>
					</div>
				{/if}
			`,
			config() {
				this.data.timeout = this.data.timeout || 2000;
				this.data.showMessage = true;
				this.$on( 'remove', () => {
					this.data.showMessage = false;
					this.$update();
				} );
			},
		} );

		AnimMessage.use( install( 'Message', Message ) );

		Object.assign( target, {
			message( content, type, timeout ) {
				new AnimMessage( {
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
