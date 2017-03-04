---
order: 1
---

in programtic way

```html
<Button on-click="{ this.onShowMessage() }">Show Message</Button>
```

```js
{
	onShowMessage: function() {
		var i = Math.floor( Math.random() * 10 % 4 );
		var types = 'info success warning error'.split( ' ' );
		var type = types[ i ];

		Pure.message( 'Hey there ;)', type );
	}
}
```
