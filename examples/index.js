Pure.note( `发布成功`, 'success' );

var App = Regular.extend({
	// <Note type="success">Success</Note>
	template: `
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

		<Pagination min="{ 1 }" max="{ 10 }" current="{ current || 5 }" on-change="{ current = $event }"></Pagination>
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
	config( data ) {
		data.current = 5;
		data.dataSource = [];
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
