import install from 'pure-install';
import functions from 'pure-functions'

import Icon from 'pure-icon';
import Button from 'pure-button';
import Input from 'pure-input';
import Spinner from 'pure-spinner';
import Breadcrumb from 'pure-breadcrumb';
import BreadcrumbItem from 'pure-breadcrumb-item';
import Textarea from 'pure-textarea';
import CheckboxGroup from 'pure-checkbox-group';
import Checkbox from 'pure-checkbox';
import RadioGroup from 'pure-radio-group';
import Radio from 'pure-radio';
import RadioButton from 'pure-radio-button';
import Switch from 'pure-switch';
import Box from 'pure-box';
import Countdown from 'pure-countdown';
import Tabs from 'pure-tabs';
import TabPane from 'pure-tab-pane';
import Form from 'pure-form';
import FormItem from 'pure-form-item';
import FormLabel from 'pure-form-label';
import FormControl from 'pure-form-control';
import Select from 'pure-select';
import Option from 'pure-option';
import Pagination from 'pure-pagination';
import Message from 'pure-message';
import Modal from 'pure-modal';
import Table from 'pure-table';
import TR from 'pure-tr';
import TD from 'pure-td';
import ElementTree from 'pure-element-tree';
import Rate from 'pure-rate';

import 'pure-theme';

Regular.use( install( 'Icon', Icon ) );
Regular.use( install( 'Button', Button ) );
Regular.use( install( 'Input', Input ) );
Regular.use( install( 'Spinner', Spinner ) );
Regular.use( install( 'Breadcrumb', Breadcrumb ) );
Regular.use( install( 'BreadcrumbItem', BreadcrumbItem ) );
Regular.use( install( 'Textarea', Textarea ) );
Regular.use( install( 'CheckboxGroup', CheckboxGroup ) );
Regular.use( install( 'Checkbox', Checkbox ) );
Regular.use( install( 'RadioGroup', RadioGroup ) );
Regular.use( install( 'Radio', Radio ) );
Regular.use( install( 'RadioButton', RadioButton ) );
Regular.use( install( 'Switch', Switch ) );
Regular.use( install( 'Box', Box ) );
Regular.use( install( 'Countdown', Countdown ) );
Regular.use( install( 'Tabs', Tabs ) );
Regular.use( install( 'TabPane', TabPane ) );
Regular.use( install( 'Form', Form ) );
Regular.use( install( 'FormItem', FormItem ) );
Regular.use( install( 'FormLabel', FormLabel ) );
Regular.use( install( 'FormControl', FormControl ) );
Regular.use( install( 'Select', Select ) );
Regular.use( install( 'Option', Option ) );
Regular.use( install( 'Pagination', Pagination ) );
Regular.use( install( 'Message', Message ) );
Regular.use( install( 'Modal', Modal ) );
Regular.use( install( 'Table', Table ) );
Regular.use( install( 'TR', TR ) );
Regular.use( install( 'TD', TD ) );
Regular.use( install( 'ElementTree', ElementTree ) );
Regular.use( install( 'Rate', Rate ) );

const $ = {};

functions( Regular, $ );

const Demo = Regular.extend( {
	template: `
		<Rate total="10" value="6" on-change="{ this.onRateChange( $event ) }"></Rate>
		<Rate total="10" value="6" readonly></Rate>
		<br />
		<Icon spin>&#xe625;</Icon>
		<Button primary sm>press me</Button>
		<Button sm>press me</Button>
		<Button primary disabled sm>press me</Button>
		<Button disabled sm>press me</Button>
		<Button>press me</Button>
		<Button loading primary sm>press me</Button>
		<Button loading sm>press me</Button>

		<Input value="content"></Input>
		<Input sm value="content"></Input>
		<Input disabled sm value="content"></Input>
		<Input error disabled sm value="content"></Input>
		<Input error sm value="content"></Input>
		<Input error sm errorMessage="This field is required" value="content"></Input>

		<Spinner></Spinner>
		<Spinner block></Spinner>

		<Breadcrumb>
			<BreadcrumbItem href="#!Home">
				<Icon>&#xe629;</Icon>
				Home
			</BreadcrumbItem>
			<BreadcrumbItem href="#!Category">
				<Icon>&#xe601;</Icon>
				Category
			</BreadcrumbItem>
			<BreadcrumbItem>
				Page
			</BreadcrumbItem>
		</Breadcrumb>

		<Textarea value="content" auto></Textarea>
		<Textarea value="content" auto block></Textarea>

		<CheckboxGroup checked="{ [ 1, 2 ] }">
			<Checkbox value="{ 1 }">Option 1</Checkbox>
			<Checkbox value="{ 2 }">Option 2</Checkbox>
			<Checkbox value="{ 3 }">Option 3</Checkbox>
		</CheckboxGroup>

		<RadioGroup checked="2">
			<Radio value="1">Option 1</Radio>
			<Radio value="2">Option 2</Radio>
			<Radio value="3">Option 3</Radio>
		</RadioGroup>

		<RadioGroup checked="1">
			<RadioButton value="1">Option 1</RadioButton>
			<RadioButton value="2">Option 2</RadioButton>
			<RadioButton value="3">Option 3</RadioButton>
		</RadioGroup>

		<Switch checked="{ true }"></Switch>

		<Box margin="10px 0 15px" padding="0 40px">
			<Button primary>Button in Box</Button>
		</Box>

		<Countdown end="{ Date.now() + 1000 * 60 * 60 * 24 * 7 }"></Countdown>

		<Tabs selected="1">
			<TabPane title="first">
				Content in first tab
			</TabPane>
			<TabPane title="second">
				Content in second tab
			</TabPane>
		</Tabs>

		<Form>
			<FormItem>
				<FormLabel>Nickname</FormLabel>
				<FormControl>
					<Input placeholder="Your Nickname"></Input>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input placeholder="Your Email"></Input>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Checkbox>Agree something</Checkbox>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Button primary>Register</Button>
				</FormControl>
			</FormItem>
		</Form>

		<Form stacked>
			<FormItem>
				<FormLabel>Nickname</FormLabel>
				<FormControl>
					<Input placeholder="Your Nickname"></Input>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input placeholder="Your Email"></Input>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Checkbox>Agree something</Checkbox>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Button primary>Register</Button>
				</FormControl>
			</FormItem>
		</Form>

		<Select value="1">
			<Option value="0">Option 0</Option>
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>

		<Select value="1" transparent>
			<Option value="0">Option 0</Option>
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>

		<Pagination
			min="{ 50 }"
			max="{ 100 }"
			current="{ current || 50 }"
			prevText="<"
			nextText=">"
			on-change="{ current = $event }"
		></Pagination>
		Current: { current || 50 }

		<Message type="info">info</Message>
		<Message type="success">success</Message>
		<Message type="warning">warning</Message>
		<Message type="error">error</Message>

		<Button primary on-click="{ showModal = true }">Open Modal</Button>
		{#if showModal}
		<Modal
			title="Modal Title"
			confirmText="Confirm"
			cancelText="Cancel"
			on-cancel="{ showModal = false }"
			on-confirm="{ showModal = false }"
			on-close="{ showModal = false }"
			closable
		>
			<div class="modal-example-center">
				<img src="http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif">
			</div>
		</Modal>
		{/if}

		{#if !loading1}
			<Table fields="{ fields1 }" dataSource="{ dataSource1 }"></Table>
		{#else}
			<Box padding="2em 0">
			<Spinner block></Spinner>
			</Box>
		{/if}

		<Table fields="{ fields2 }">
			{#list dataSource2 as ds}
				<TR>
					<TD>{ ds.name }</TD>
					<TD>{ ds.email }</TD>
					<TD>
						<Button primary sm on-click="{ this.onClick( ds ) }">Modify</Button>
					</TD>
				</TR>
			{/list}
		</Table>

		<ElementTree source="{ elementSource }"></ElementTree>
	`,
	config() {
		this.data.loading1 = true;
		this.data.fields1 = [
			{
				key: 'picture',
				label: 'Avatar',
				render: function( v, row ) {
					return `<img src="${ v.medium }" style="width: 50px;height: 50px;" />`;
				}
			},
			{
				key: 'name',
				label: 'Name',
				render: function( v, row ) {
					return v.first + ' ' + v.last;
				}
			},
			{
				key: 'gender',
				label: 'Gender',
				render: function( v, row ) {
				}
			},
			{
				key: 'email',
				label: 'Email'
			},
			{
				key: 'other',
				label: 'Other',
				render: function( v, row ) {
					return `<Message type="info">Hi</Message>`;
				}
			}
		];

		this.data.dataSource1 = [];

		fetch( `https://randomuser.me/api?results=10&page=1&sortField=&sortOrder=` )
			.then( response => response.json() )
			.then( json => json.results )
			.then( dataSource => {
				this.data.dataSource1 = dataSource;
				this.data.loading1 = false;
				this.$update();
			} )
			.catch( e => {
				this.data.loading1 = false;
				this.$update();
			} );

		/***** 8< *****/

		this.data.fields2 = [
			{
				label: 'Name'
			},
			{
				label: 'Email'
			},
			{
				label: 'Operation'
			}
		];

		this.data.dataSource2 = [
			{
				name: 'Jim',
				email: 'jim@example.com'
			},
			{
				name: 'Mike',
				email: 'mike@example.com'
			},
			{
				name: 'Sam',
				email: 'sam@example.com'
			}
		];

		this.data.elementSource = [
			{
				name: 'head',
				children: [
					{
						name: 'meta',
						attrs: {
							charset: 'utf-8'
						}
					}
				]
			},
			{
				name: 'body',
				children: [
					{
						name: 'div',
						attrs: {
							id: 'app',
							class: 'app'
						},
						children: [
							{
								name: 'h1',
								attrs: {
									class: 'title'
								}
							},
							{
								name: 'div',
								attrs: {
									class: 'content'
								}
							}
						]
					},
					{
						name: 'script',
						attrs: {
							type: 'text/javascript',
							src: "../app.js"
						}
					}
				]
			}
		];
	},
	onClick( v ) {
		console.log( 'you clicked ', v.name );
		$.message( v.name, 'success' );
	},
	onRateChange( v ) {
		console.log( v );
	},
} );

new Demo().$inject( '#app' );
