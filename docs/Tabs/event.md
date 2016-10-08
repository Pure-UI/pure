---
order: 3
---

Event

```html
<Tabs selected="first" on-change="{ this.onChange( $event ) }">
	<TabPane key="first" title="first">
		Content in first tab
	</TabPane>
	<TabPane key="second" title="second">
		Content in second tab
	</TabPane>
</Tabs>

selected: { currentTabKey || 'first' }
```

```js
{
	onChange( key ) {
		this.data.currentTabKey = key;
		this.$update();
	}
}
```
