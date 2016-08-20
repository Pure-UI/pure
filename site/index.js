import { Router } from 'director';
import App from './components/app';
import routes from './routes';
import Regular from 'regularjs';
import Pure from '../dist/pure';
import './site.css';

Regular.use( Pure );
window.Pure = Pure;

new App().$inject( document.getElementById( 'app' ) );

const router = Router( routes );
router.init();
