---
order: 2
---

Type

```html
<Button on-click="{ this.onNotify( 'info' ) }">info</Button>
<Button on-click="{ this.onNotify( 'success' ) }">success</Button>
<Button on-click="{ this.onNotify( 'warning' ) }">warning</Button>
<Button on-click="{ this.onNotify( 'error' ) }">error</Button>
```

```js
{
	onNotify: function ( type ) {
		Pure.notify( {
			type: type,
			title: 'title',
			description: 'description',
			closable: true,
		} )
	},
}
```
