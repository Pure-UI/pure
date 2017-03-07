import Notification from 'pure-notification';
import install from 'pure-install';

export default function ( Regular ) {
	const AnimNotification = Regular.extend( {
		template: `
			{#if showNotification}
				<div class="pure-notification--will-transition" r-animation="on: enter;wait: 10;class: pure-notification--in, 3;emit: in;" r-animation="on: c;class: pure-notification--out, 3;emit: remove;">
					<Notification
						type="{ type }"
						title="{ title }"
						description="{ description }"
						closable="{ closable }"
						icon="{ icon }"
						iconColor="{ iconColor }"
						on-close="{ this.onClose() }"
					></Notification>
				</div>
			{/if}
		`,
		config() {
			if ( typeof this.data.duration === 'undefined' ) {
				this.data.duration = 4000;
			}

			this.$on( 'in', () => {
				if ( this.data.duration > 0 ) {
					setTimeout( () => {
						this.$emit( 'c' );
					}, this.data.duration );
				}
			} );

			this.$on( 'remove', () => {
				this.data.showNotification = false;
				this.$update();
			} );
		},
		init() {
			this.data.showNotification = true;
			this.$update();
		},
		onClose() {
			this.$emit( 'c' );
		},
	} );

	AnimNotification.use( install( 'Notification', Notification ) );

	let $container;
	return function ( {
		type,
		title,
		description,
		duration,
		closable,
		icon,
		iconColor
	} ) {
		if ( !$container ) {
			$container = document.createElement( 'div' );
			$container.className = 'pure-notification-container';
			document.body.appendChild( $container );
		}
		return new AnimNotification( {
			data: {
				type,
				title,
				description,
				duration,
				closable,
				icon,
				iconColor
			}
		} ).$inject( $container );
	};
};
