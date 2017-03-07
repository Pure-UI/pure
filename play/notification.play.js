import Notification from 'pure-notification';
import Button from 'pure-button';
import functions from 'pure-functions';

const $ = {};

Notification.use( function ( _, Regular ) {
	functions( Regular, $ );
} );

console.log( $ );

play( Notification, module )
	.name( 'Notification' )
	.component( 'Button', Button )
	.add( 'basic', `
		<Notification></Notification>
		<Notification closable></Notification>
		<Notification type="success" closable></Notification>
		<Notification type="info" closable></Notification>
		<Notification type="warning" closable></Notification>
		<Notification type="error" closable></Notification>
	` )
	.add( 'function', {
		template: `
			<Button on-click="{ this.onClick() }">notify</Button>
		`,
		onClick() {
			$.notify( {
				type: 'success',
				title: `title`,
				description: `description`,
				closable: true,
			} )
		},
	} )
