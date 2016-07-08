import '../dist/pure.js';
import '../dist/pure.css';
import { Router } from 'director';
import App from './app';
import routes from './routes';

new App().$inject( document.getElementById( 'app' ) );

const router = Router( routes );
router.configure({
	// html5history: true
});
router.init();
