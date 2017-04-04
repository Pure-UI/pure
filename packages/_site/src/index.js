import { Router } from 'director';
import docs from './docs.json';
import dispatcher from './dispatcher';
import App from './components/app';
import Regular from 'regularjs';
import Pure from 'pure-ui';

import './site.css';
import './highlight.css';

Regular.use( Pure );
window.Pure = Pure;

new App().$inject( document.getElementById( 'app' ) );

const router = new Router();
router.on( '/:component', component => {
	component = component || '';
	document.title = ( component ? component + ' - ' : '' ) + 'Pure Docs';
	dispatcher.emit( 'update', docs[ component ], component );
} );
router.init();
