import { Router } from 'director';
import docs from './docs.json';
import dispatcher from './dispatcher';
import App from './components/app';
import Regular from 'regularjs';
import Pure from 'pure-ui';

import 'pure-theme';
import './site.css';
import './highlight.css';

Regular.use( Pure );
window.Pure = Pure;

new App().$inject( document.getElementById( 'app' ) );

const router = new Router();
router.on( '/:component', component => {
	dispatcher.emit( 'update', docs[ component ], component );
} );
router.init();
