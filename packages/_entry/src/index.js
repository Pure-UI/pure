import install from 'pure-install';
import functions from 'pure-functions';

import Box from 'pure-box/src';
import Breadcrumb from 'pure-breadcrumb/src';
import BreadcrumbItem from 'pure-breadcrumb-item/src';
import Button from 'pure-button/src';
import Checkbox from 'pure-checkbox/src';
import CheckboxGroup from 'pure-checkbox-group/src';
import Countdown from 'pure-countdown/src';
import ElementTree from 'pure-element-tree/src';
import Form from 'pure-form/src';
import FormControl from 'pure-form-control/src';
import FormItem from 'pure-form-item/src';
import FormLabel from 'pure-form-label/src';
import Icon from 'pure-icon/src';
import Input from 'pure-input/src';
import Modal from 'pure-modal/src';
import Message from 'pure-message/src';
import Option from 'pure-option/src';
import Pagination from 'pure-pagination/src';
import Radio from 'pure-radio/src';
import RadioButton from 'pure-radio-button/src';
import RadioGroup from 'pure-radio-group/src';
import Select from 'pure-select/src';
import Spinner from 'pure-spinner/src';
import Switch from 'pure-switch/src';
import TabPane from 'pure-tab-pane/src';
import Table from 'pure-table/src';
import Tabs from 'pure-tabs/src';
import TD from 'pure-td/src';
import Textarea from 'pure-textarea/src';
import TR from 'pure-tr/src';
import Rate from 'pure-rate/src';
import Notification from 'pure-notification/src';

// default theme
import 'pure-theme';

export {
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
};

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
};
