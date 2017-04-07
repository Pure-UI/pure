import install from '@pure/install';
import Loading from '@pure/loading';

export default function ( Regular ) {
	let $container;
	let instance;
	let tid;

	const LoadingCtor = Regular.extend( Loading );

	function ensureLoadingEnv() {
		if ( !$container ) {
			$container = document.createElement( 'div' );
			$container.className = 'pure-loading__container';
			document.body.appendChild( $container );
		}
		if ( !instance ) {
			instance = new LoadingCtor();
			instance.$inject( $container );
		}
	}

	return {
		start() {
			ensureLoadingEnv();

			if ( instance.current() > 0 ) {
				instance.finish();
			}

			if ( tid ) {
				clearInterval( tid );
			}

			tid = setInterval( () => instance.incLittle(), 500 );
		},
		inc() {
			ensureLoadingEnv();
			instance.inc();
		},
		update( percentage ) {
			ensureLoadingEnv();
			instance.update( percentage );
		},
		finish() {
			ensureLoadingEnv();
			if ( tid ) {
				clearInterval( tid );
			}
			instance.finish();
		}
	};
}
