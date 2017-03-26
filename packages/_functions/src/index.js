import message from './message';
import notification from './notification';
import loading from './loading';

export default function ( Component, target = {} ) {
	Component.use( function ( Component, Regular ) {
		Object.assign( target, {
			message: message( Regular ),
			notify: notification( Regular ),
			notification: notification( Regular ),
			loading: loading( Regular ),
		} );
	} );
};
