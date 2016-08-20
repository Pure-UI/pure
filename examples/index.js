Regular.use( Pure );

var App = Regular.extend({
	template: `
		<Textarea value="sss" auto></Textarea>
		<Spinner block></Spinner>
		<JSONTree source="{ jsonSource }" on-change="{ this.onJsonTreeChange($event) }"></JSONTree>

		<br />
		<br />

		<Spinner></Spinner>

		<div ref="trackTarget" style="width: 100px;height: 100px;background-color: #DDD;margin-top: 50px;margin-left: 40px;">
		</div>

		<Track target="{ trackTarget }">
			<Button primary sm>button</Button>
		</Track>

		<br />
		<br />

		<ElementTree source="{ elementSource }" on-select="{ this.onSelect( $event ) }"></ElementTree>

		<Select options="{ options }"></Select>
		<Input disabled="{ true }"></Input>
		<Box margin="" padding="20px">
			<Countdown end="{ v ? v : v = ( Date.now() + 1000 * 65 ) }" on-end="{ isTimeEnd = true }"></Countdown>
		</Box>

		<br />
		<br />
		isTimeEnd: { isTimeEnd ? 'true' : 'false' }
		<br />
		<br />
		<Button sm primary on-click="{ v = Date.now() + 1000 * 5 && ( isTimeEnd = false ) }">Reset</Button>

		<Table fields="{ fields }">
			{#list dataSource as ds}
			<TR>
				<TD>{ ds.name.first + ds.name.last }</TD>
				<TD>{ ds.gender }</TD>
				<TD>{ ds.email }</TD>
				<TD nowrap>
					<Button sm primary>查看</Button>
				</TD>
				<TD nowrap>
					<Button sm primary>编辑</Button>
				</TD>
			</TR>
			{/list}
		</Table>

		<br />
		<br />
		<br />

		<Pagination min="{ 50 }" max="{ 100 }" current="{ current || 60 }" on-change="{ current = $event }" prev-text="<" next-text=">"></Pagination>
		<br />
		Current: { current || 5 }

		<br />
		<br />
		<br />

		<Form v full>
			<FormItem>
				<FormLabel>姓名</FormLabel>
				<FormControl>
					<Input placeholder=""></Input>
				</FormControl>
			</FormItem>
			<FormItem>
				<FormLabel>年龄</FormLabel>
				<FormControl>
					<Input></Input>
				</FormControl>
			</FormItem>
			<FormItem>
				<FormLabel>萝莉保护协会</FormLabel>
				<FormControl>
					<Select></Select>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Checkbox>同意xxx协议</Checkbox>
				</FormControl>
			</FormItem>

			<FormItem>
				<FormLabel></FormLabel>
				<FormControl>
					<Button primary>注册</Button>
				</FormControl>
			</FormItem>
		</Form>

		<br />
		<br />
		<br />

		<Select>
			<Option>选项1</Option>
			<Option>选项2</Option>
			<Option>选项3</Option>
			<Option>选项4</Option>
			<Option>选项5</Option>
		</Select>

		<br />
		<br />
		<br />

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Switch checked="{ false }" on-change="{ this.onSwitchChanged( $event ) }"></Switch>

		<br />
		<br />
		<br />
		<br />
		<br />

		<RadioGroup checked="3" on-change="{ this.onRadioChanged( $event ) }">
			<Radio value="1">测试1</Radio>
			<Radio value="2">测试2</Radio>
			<Radio value="3">测试3</Radio>
		</RadioGroup>

		<br />
		<br />

		<CheckboxGroup checked="3" on-change="{ this.onCheckboxChanged( $event ) }">
			<Checkbox value="1">测试1</Checkbox>
			<Checkbox value="2">测试2</Checkbox>
			<Checkbox value="3">测试3</Checkbox>
		</CheckboxGroup>

		<br />
		<br />

		<Button on-click="{ v = Math.random() }">Follow</Button>
		<Input value="{ v }"></Input>
		<Button primary on-click="{ this.onOpenModal() }">打开模态框</Button>

		<br />
		<br />

		<Input value="" placeholder="提示暗文" on-emit="{ this.onEmit() }"></Input>

		<br />
		<br />

		<Textarea></Textarea>

		<br />
		<br />

		{#if !loading}
		<Table fields="{ fields }" data-source="{ dataSource }" pagination="" on-emit=""></Table>
		{#else}
		<Spinner></Spinner>
		{/if}
		{#if showModal}
		<Modal title="标题" ok-text="保存" cancel-text="取消" on-ok="{ this.onModalOk() }" on-cancel="{ this.onModalCancel() }">
			<div class="content">
				<Table fields="{ fields }" data-source="{ dataSource }" pagination="" on-emit=""></Table>
			</div>
		</Modal>
		{/if}
	`,
	onJsonTreeChange( e ) {
		console.log( e.path, 'changed from', e.oldValue, 'to', e.value );
	},
	onSelect( v ) {
		console.log( 'onSelect', v );
	},
	onPaginationChange( v ) {
		console.log( 'onPaginationChange', v );
		this.data.current = v;
		this.$update();
	},
	onSwitchChanged( v ) {
		console.log( 'switch changed', v );
	},
	onCheckboxChanged( v ) {
		console.log( 'changed', v );
	},
	onRadioChanged( v ) {
		console.log( 'changed', v );
	},
	onOpenModal() {
		this.data.showModal = true;
		this.$update();
	},
	onModalOk() {
		alert( 'you clicked ok' );
		this.data.showModal = false;
		this.$update();
	},
	onModalCancel() {
		this.data.showModal = false;
		this.$update();
	},
	init() {
		console.log( 'outer init' );
		this.$update( 'trackTarget', this.$refs.trackTarget );
	},
	config( data ) {
		data.jsonSource = [{"gender":"male","name":{"title":"mr","first":"raymond","last":"ryan"},"location":{"street":"8927 the crescent","city":"wicklow","state":"longford","postcode":58460},"email":"raymond.ryan@example.com","login":{"username":"bigpanda480","password":"skinny","salt":"7qYJ3lkG","md5":"f62770e7c729942162379a3ac0c404cd","sha1":"0174615aa213464a38d5e5fa61a17c5fd2a8a7ab","sha256":"1076077bfba2644b0e9f13054677b636b202c9bddae0ab9ad28a2557e8bad5ff"},"registered":1059039509,"dob":998322805,"phone":"051-101-5357","cell":"081-245-2376","id":{"name":"PPS","value":"8211577T"},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"IE"}, 1];
		data.elementSource = [
			{
				text: 'div',
				attrs: {
					class: '111',
					'on-click': 'this.onClick()'
				},
				children: [
					{
						text: 'a',
						attrs: {},
						children: []
					},
				]
			},
			{
				text: 'div',
				attrs: {},
				children: [
					{
						text: 'span',
						attrs: {},
						children: [
							{
								text: 'div',
								attrs: {},
								children: [
									{
										text: 'span',
										attrs: {},
										children: [

										]
									},
								]
							}
						]
					},
				]
			}
		];
		data.end = new Date().getTime() + 1000 * 60 * 60 * 24;
		data.current = 60;
		data.dataSource = [];
		data.options = [
			{
				text: 'Option 1',
				value: 1
			},
			{
				text: 'Option 2',
				value: 2
			},
			{
				text: 'Option 3',
				value: 3
			},
		]
		data.fields = [
			{
				key: 'name',
				label: '用户名',
				render( v ) {
					return v.first + ' ' + v.last;
				}
			},
			{
				key: 'gender',
				label: '性别',
				render() {

				}
			},
			{
				key: 'email',
				label: '邮箱',
				render() {

				}
			},
			{
				key: 'op1',
				label: '操作1',
				render( v, row ) {
					let rowData = JSON.stringify( row );
					return `
						<Switch></Switch>
					`;
				}
			},
			{
				key: 'op2',
				label: '操作2',
				render( v, row ) {
					let rowData = JSON.stringify( row );
					return `
						<Button on-emit="{ this.onEmit( 'edit' ) }" primary>编辑</Button>
					`;
				}
			}
		];

		data.loading = true;

		fetch(
			`http://api.randomuser.me/?results=10&page=1&sortField=&sortOrder=`
			)
			.then(response => response.json())
			.then(json => json.results)
			.then(dataSource => {
				console.log( 'dataSource', dataSource );
				data.dataSource = dataSource;
				data.loading = false;
				this.$update();
			})
			.catch(e => {
				console.log( 'e', e );
				data.loading = false;
				this.$update();
			});
	},
	onEmit() {
		console.log( 'emit triggered' );
	}
});

new App().$inject( document.body );
