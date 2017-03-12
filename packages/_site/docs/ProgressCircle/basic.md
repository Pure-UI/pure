---
order: 1
---

Basic

```html
<ProgressCircle percentage="{ percentage }"></ProgressCircle>
<br>
<NumberInput value="{ percentage }" step="10" on-change="{ this.onChange($event) }"></NumberInput>
```

```js
{
	config: function() {
		this.data.percentage = 0;
	},
	onChange: function( newValue ) {
		this.data.percentage = newValue;
	}
}
```
