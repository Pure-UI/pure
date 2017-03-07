---
order: 1
---

in programtic way

```html
<Button on-click="{ this.onMessage( 'info' ) }">info</Button>
<Button on-click="{ this.onMessage( 'success' ) }">success</Button>
<Button on-click="{ this.onMessage( 'warning' ) }">warning</Button>
<Button on-click="{ this.onMessage( 'error' ) }">error</Button>
```

```js
{
	onMessage: function( type ) {
		Pure.message( {
			type: type,
			content: 'Hey there ;)',
		} );
	}
}
```
