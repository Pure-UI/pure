var App = Regular.extend({
	template: `
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

		<Button on-emit="{ this.onEmit() }">刷新</Button>
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
