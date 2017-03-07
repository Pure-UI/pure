---
order: 1
---

Basic

```html
<Button on-click="{ this.onNotify() }">Open Notification</Button>
```

```js
{
	onNotify: function () {
		Pure.notify( {
			title: 'title',
			description: 'description',
			closable: true,
		} )
	},
}
```
