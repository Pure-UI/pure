---
order: 1
---

Basic Usage

```html
{#if !loading}
<Table fields="{ fields }" data-source="{ dataSource }"></Table>
{#else}
<Spinner></Spinner>
{/if}
```

```js
{
	config: function() {
		this.data.loading = true;
		this.data.fields = [
			{
				key: 'name',
				label: 'Name',
				render( v, row ) {
					return v.first + ' ' + v.last + ' <span style="color: #5fa4f9;">:)</span>';
				}
			},
			{
				key: 'gender',
				label: 'Gender',
				render( v, row ) {
					// if return nothing, this won't override default render function
				}
			},
			{
				key: 'email',
				label: 'Email'
			},
			{
				key: 'other',
				label: 'Other',
				render( v, row ) {
					return `
						<Note type="info">Hi</Note>
					`;
				}
			}
		];

		this.data.dataSource = [];

		fetch(
			`http://api.randomuser.me/?results=10&page=1&sortField=&sortOrder=`
			)
			.then(response => response.json())
			.then(json => json.results)
			.then(dataSource => {
				this.data.dataSource = dataSource;
				this.data.loading = false;
				this.$update();
			})
			.catch(e => {
				this.data.loading = false;
				this.$update();
			});
	}
}
```
