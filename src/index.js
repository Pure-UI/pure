// Basic
import Button from './components/button/button';
import Icon from './components/icon/icon';
import Spinner from './components/spinner/spinner';

// Navigation
import Pagination from './components/pagination/pagination';
import Breadcrumb from './components/breadcrumb/breadcrumb';
import BreadcrumbItem from './components/breadcrumb/breadcrumb-item';

// Form
import Input from './components/input/input';
import Textarea from './components/textarea/textarea';
import Radio from './components/radio/radio';
import RadioGroup from './components/radio/radio-group';
import Checkbox from './components/checkbox/checkbox';
import CheckboxGroup from './components/checkbox/checkbox-group';
import Select from './components/select/select';
import Switch from './components/switch/switch';
import Form from './components/form/form';
import FormItem from './components/form/form-item';
import FormLabel from './components/form/form-label';
import FormControl from './components/form/form-control';
import Table from './components/table/table';
import TableRow from './components/table/table-row';
import TR from './components/table/tr';
import TD from './components/table/td';

// Container and Layout
import Modal from './components/modal/modal';
import Box from './components/box/box';

// Message
import Note from './components/note/note';

// Locate
import Track from './components/track/track';

// Time
import Countdown from './components/countdown/countdown';

// Tree
import ElementTree from './components/element-tree/element-tree';
import ElementTreeNode from './components/element-tree/element-tree-node';
import ElementTreeNodeOpen from './components/element-tree/element-tree-node-open';
import ElementTreeNodeClose from './components/element-tree/element-tree-node-close';
import JSONTree from './components/json-tree/json-tree';
import JSONTreeProp from './components/json-tree/json-tree-prop';

// fns
import registerFns from './fn';

function batchAddId( configs ) {
	for( let i = 0, len = configs.length; i < len; i++ ) {
		configs[ i ][ ID_KEY ] = i;
	}
	return configs;
}

function isStable( c ) {
	const components = c.components || {};

	if( Object.keys( components ).length === 0 ) {
		return true;
	}

	let stable = true;
	for( let i in components ) {
		if( !~sorted.indexOf( components[ i ] ) ) {
			stable = false;
			break;
		}
	}
	return stable;
}

function sort( configs ) {
	let configsLen = configs.length;
	let counter = 0;

	while( sorted.length < configsLen && counter < SORT_MAX_TIMES ) {
		for( let i = 0; i < configsLen; i++ ) {
			if(
				isStable( configs[ i ] ) &&
				!~sorted.indexOf( configs[ i ] )
			) {
				sorted.push( configs[ i ] );
			}
		}
		counter++;
	}
}

function register( Namespace, config, registerMap ) {
	const components = config.components || config.component || {};
	const name = config.name;
	const id = config[ ID_KEY ];

	delete config.components;
	delete config.name;
	delete config[ ID_KEY ];

	const C = Namespace.extend( config );
	Namespace.component( name, C );

	for( let i in components ) {
		let id = components[ i ][ ID_KEY ];
		if( !( id in registerMap ) ) {
			registerMap[ id ] = Namespace.extend( components[ i ] );
		}
		C.component( i, registerMap[ id ] );
	}

	config.components = components;
	config.name = name;
	config[ ID_KEY ] = id;
}

const ID_KEY = '_pure_id';
const SORT_MAX_TIMES = 100;

let configs = [
	Button,
	Icon,
	Spinner,
	Pagination,
	Breadcrumb,
	BreadcrumbItem,
	Input,
	Textarea,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	Select,
	Switch,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	Table,
	TableRow,
	TR,
	TD,
	Modal,
	Box,
	Note,
	Track,
	Countdown,
	ElementTree,
	ElementTreeNode,
	ElementTreeNodeOpen,
	ElementTreeNodeClose,
	JSONTree,
	JSONTreeProp
];
configs = batchAddId( configs );

// 注册顺序
// 0依赖的优先进入sorted
let sorted = [];
sort( configs );

const plugin = Component => {
	let registerMap = {};
	sorted.forEach(config => {
		register( Component, config, registerMap );
	});
	registerFns( Component, plugin );
};

module.exports = plugin;
