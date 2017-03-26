import install from 'pure-install';
import functions from 'pure-functions';

import Box from 'pure-box';
import Breadcrumb from 'pure-breadcrumb';
import BreadcrumbItem from 'pure-breadcrumb-item';
import Button from 'pure-button';
import Checkbox from 'pure-checkbox';
import CheckboxGroup from 'pure-checkbox-group';
import Countdown from 'pure-countdown';
import ElementTree from 'pure-element-tree';
import Form from 'pure-form';
import FormControl from 'pure-form-control';
import FormItem from 'pure-form-item';
import FormLabel from 'pure-form-label';
import Icon from 'pure-icon';
import Input from 'pure-input';
import Modal from 'pure-modal';
import Message from 'pure-message';
import Option from 'pure-option';
import Pagination from 'pure-pagination';
import Radio from 'pure-radio';
import RadioButton from 'pure-radio-button';
import RadioGroup from 'pure-radio-group';
import Select from 'pure-select';
import Spinner from 'pure-spinner';
import Switch from 'pure-switch';
import TabPane from 'pure-tab-pane';
import Table from 'pure-table';
import Tabs from 'pure-tabs';
import TD from 'pure-td';
import Textarea from 'pure-textarea';
import TR from 'pure-tr';
import Rate from 'pure-rate';
import Notification from 'pure-notification';
import Badge from 'pure-badge';
import NumberInput from 'pure-number-input';
import Tooltip from 'pure-tooltip';
import ProgressBar from 'pure-progress-bar';
import ProgressCircle from 'pure-progress-circle';
import Tag from 'pure-tag';
import Loading from 'pure-loading';

// default theme
import 'pure-theme';

export default function Pure( Component ) {
	functions( Component, Pure );

	Component.use( install( 'Box', Box ) );
	Component.use( install( 'Breadcrumb', Breadcrumb ) );
	Component.use( install( 'BreadcrumbItem', BreadcrumbItem ) );
	Component.use( install( 'Button', Button ) );
	Component.use( install( 'Checkbox', Checkbox ) );
	Component.use( install( 'CheckboxGroup', CheckboxGroup ) );
	Component.use( install( 'Countdown', Countdown ) );
	Component.use( install( 'ElementTree', ElementTree ) );
	Component.use( install( 'Form', Form ) );
	Component.use( install( 'FormControl', FormControl ) );
	Component.use( install( 'FormItem', FormItem ) );
	Component.use( install( 'FormLabel', FormLabel ) );
	Component.use( install( 'Icon', Icon ) );
	Component.use( install( 'Input', Input ) );
	Component.use( install( 'Modal', Modal ) );
	Component.use( install( 'Message', Message ) );
	Component.use( install( 'Option', Option ) );
	Component.use( install( 'Pagination', Pagination ) );
	Component.use( install( 'Radio', Radio ) );
	Component.use( install( 'RadioButton', RadioButton ) );
	Component.use( install( 'RadioGroup', RadioGroup ) );
	Component.use( install( 'Select', Select ) );
	Component.use( install( 'Spinner', Spinner ) );
	Component.use( install( 'Switch', Switch ) );
	Component.use( install( 'TabPane', TabPane ) );
	Component.use( install( 'Table', Table ) );
	Component.use( install( 'Tabs', Tabs ) );
	Component.use( install( 'TD', TD ) );
	Component.use( install( 'Textarea', Textarea ) );
	Component.use( install( 'TR', TR ) );
	Component.use( install( 'Rate', Rate ) );
	Component.use( install( 'Notification', Notification ) );
	Component.use( install( 'Badge', Badge ) );
	Component.use( install( 'NumberInput', NumberInput ) );
	Component.use( install( 'Tooltip', Tooltip ) );
	Component.use( install( 'ProgressBar', ProgressBar ) );
	Component.use( install( 'ProgressCircle', ProgressCircle ) );
	Component.use( install( 'Tag', Tag ) );
	Component.use( install( 'Loading', Loading ) );
};

Object.assign( Pure, {
	install,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Checkbox,
	CheckboxGroup,
	Countdown,
	ElementTree,
	Form,
	FormControl,
	FormItem,
	FormLabel,
	Icon,
	Input,
	Modal,
	Message,
	Option,
	Pagination,
	Radio,
	RadioButton,
	RadioGroup,
	Select,
	Spinner,
	Switch,
	TabPane,
	Table,
	Tabs,
	TD,
	Textarea,
	TR,
	Rate,
	Notification,
	Badge,
	NumberInput,
	Tooltip,
	ProgressBar,
	ProgressCircle,
	Loading,
} );
