---
order: 3
---

Event

```html
<Tag on-click="{ this.onClick() }">click</Tag>

{#if showTag}
<Tag closable on-close="{ this.onClose() }">close</Tag>
{/if}

<Tag checkable on-check="{ this.onCheck($event) }">check</Tag>
```

```js
{
	config: function () {
		this.data.showTag = true;
	},
	onClick: function() {
		Pure.message( {
			content: 'clicked'
		} );
	},
	onClose: function () {
		this.data.showTag = false;
	},
	onCheck: function ( isChecked ) {
		Pure.message( {
			content: isChecked ? 'checked' : 'unchecked'
		} );
	},
}
```
