import docs from './docs.json';
import dispatcher from './dispatcher';

console.log( docs );

export default {
	'/Button': () => {
		dispatcher.emit( 'update', docs.Button );
	},
	'/Input': () => {
		dispatcher.emit( 'update', docs.Input );
	},
	'/Textarea': () => {
		dispatcher.emit( 'update', docs.Textarea );
	},
	'/Radio': () => {
		dispatcher.emit( 'update', docs.Radio );
	},
	'/Checkbox': () => {
		dispatcher.emit( 'update', docs.Checkbox );
	},
};
