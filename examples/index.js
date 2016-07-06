var App = Regular.extend({
	template: `
		<Button on-emit="{ this.onEmit() }">刷新</Button>
		<Button primary>发布</Button>
		<Input value="" placeholder="提示暗文" on-emit="{ this.onEmit() }"></Input>
		<Textarea></Textarea>
		{#if !loading}
		<Table fields="{ fields }" data-source="{ dataSource }" pagination="" on-emit=""></Table>
		{#else}
		<Spinner></Spinner>
		{/if}
		{#if false}
		<Modal title="标题" ok-text="保存" cancel-text="取消">
			<div class="content">
				<Table fields="{ fields }" data-source="{ dataSource }" pagination="" on-emit=""></Table>
			</div>
		</Modal>
		{/if}
		<Checkbox checked="{ false }"></Checkbox>
		<Radio checked="{ false }"></Radio>
	`,
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
				key: 'op',
				label: '操作',
				render( v, row ) {
					let rowData = JSON.stringify( row );
					return `
						<Button on-emit="{ this.onEmit( 'see' ) }">查看</Button>
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
