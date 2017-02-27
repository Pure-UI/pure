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
	'/Message': () => dispatcher.emit( 'update', docs.Message, 'Message' ),
	'/Countdown': () => dispatcher.emit( 'update', docs.Countdown, 'Countdown' ),
	'/Table': () => dispatcher.emit( 'update', docs.Table, 'Table' ),
	'/Breadcrumb': () => dispatcher.emit( 'update', docs.Breadcrumb, 'Breadcrumb' ),
	'/Box': () => dispatcher.emit( 'update', docs.Box, 'Box' ),
	'/ElementTree': () => dispatcher.emit( 'update', docs.ElementTree, 'ElementTree' ),
	'/Tabs': () => dispatcher.emit( 'update', docs.Tabs, 'Tabs' ),
	'/Select': () => dispatcher.emit( 'update', docs.Select, 'Select' ),
};
