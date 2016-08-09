import './site.css';
import { Router } from 'director';
import App from './components/app';
import routes from './routes';

new App().$inject( document.getElementById( 'app' ) );

const router = Router( routes );
router.init();
