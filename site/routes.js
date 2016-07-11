import docs from './docs.json';
import dispatcher from './dispatcher';

export default {
	'/': () => dispatcher.emit( 'update', docs.Button, 'Button' ),
	'/Button': () => dispatcher.emit( 'update', docs.Button, 'Button' ),
	'/Pagination': () => dispatcher.emit( 'update', docs.Pagination, 'Pagination' ),
	'/Input': () => dispatcher.emit( 'update', docs.Input, 'Input' ),
	'/Textarea': () => dispatcher.emit( 'update', docs.Textarea, 'Textarea' ),
	'/Radio': () => dispatcher.emit( 'update', docs.Radio, 'Radio' ),
	'/Checkbox': () => dispatcher.emit( 'update', docs.Checkbox, 'Checkbox' ),
	'/Switch': () => dispatcher.emit( 'update', docs.Switch, 'Switch' ),
	'/Modal': () => dispatcher.emit( 'update', docs.Modal, 'Modal' ),
	'/Form': () => dispatcher.emit( 'update', docs.Form, 'Form' ),
	'/Spinner': () => dispatcher.emit( 'update', docs.Spinner, 'Spinner' ),
	'/Icon': () => dispatcher.emit( 'update', docs.Icon, 'Icon' ),
	'/Note': () => dispatcher.emit( 'update', docs.Note, 'Note' ),
};
