---
order: 1
---

Also use `Note` in programtic way

```html
<Button on-click="{ this.onShowNote() }">Show Note</Button>
```

```js
{
	onShowNote: function() {
		var i = Math.floor( Math.random() * 10 % 4 );
		var types = 'info success warning danger'.split(' ');
		var type = types[ i ];

		Pure.note( "Hey there ;)", type );
	}
}
```
