import install from '@pure/install';
import Message from '@pure/message';

export default function ( Regular ) {
	const AnimMessage = Regular.extend( {
		template: `
			<div
				class="pure-message__container is-will-transition is-fixed"
				r-animation="on: enter;wait: 10;class: is-in, 3;wait: { duration };class: is-out, 3;emit: remove;"
			>
				<Message type="{ type }">{ content }</Message>
			</div>
		`,
		config() {
			this.data.duration = this.data.duration || 2000;
			this.$on( 'remove', () => {
				this.destroy();
			} );
		},
	} );

	AnimMessage.use( install( 'Message', Message ) );

	return function ( { content, type, duration } ) {
		new AnimMessage( {
			data: { content, type, duration },
		} ).$inject( document.body );
	};
};
