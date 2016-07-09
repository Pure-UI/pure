import docs from './docs.json';
import dispatcher from './dispatcher';

export default {
	'/': () => dispatcher.emit( 'update', docs.Button, 'Button' ),
	'/Button': () => dispatcher.emit( 'update', docs.Button, 'Button' ),
	'/Input': () => dispatcher.emit( 'update', docs.Input, 'Input' ),
	'/Textarea': () => dispatcher.emit( 'update', docs.Textarea, 'Textarea' ),
	'/Radio': () => dispatcher.emit( 'update', docs.Radio, 'Radio' ),
	'/Checkbox': () => dispatcher.emit( 'update', docs.Checkbox, 'Checkbox' ),
	'/Switch': () => dispatcher.emit( 'update', docs.Switch, 'Switch' ),
	'/Modal': () => dispatcher.emit( 'update', docs.Modal, 'Modal' ),
	'/Form': () => dispatcher.emit( 'update', docs.Form, 'Form' ),
};
