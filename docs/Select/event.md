---
order: 3
---

Event

```html
<Select on-change="{ this.onChange( $event ) }">
	<Option value="0">Option 0</Option>
	<Option value="1">Option 1</Option>
	<Option value="2">Option 2</Option>
</Select>

<br /><br />
Selected: { selected || 'none' }
```

```js
{
	onChange: function( value ) {
		this.data.selected = value;
	}
}
```
