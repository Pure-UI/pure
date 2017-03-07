---
order: 2
---

Having some event to handle? use raw TR and TD instead

```html
<Table fields="{ fields }">
	{#list dataSource as ds}
	<TR>
		<TD>{ ds.name }</TD>
		<TD>{ ds.email }</TD>
		<TD>
			<Button sm on-click="{ this.onClick( ds ) }">Modify</Button>
		</TD>
	</TR>
	{/list}
</Table>
```

```js
{
	config: function() {
		this.data.fields = [
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

		this.data.dataSource = [
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
		]
	},
	onClick: function( v ) {
		Pure.message( {
			type: 'info',
			content: 'you clicked ' + v.name,
			duration: 1000,
		} );
	}
}
```
