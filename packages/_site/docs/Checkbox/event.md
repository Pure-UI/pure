---
order: 3
---

Event

```html
<CheckboxGroup on-change="{ v = $event }">
	<Checkbox value="{ 1 }">Option 1</Checkbox>
	<Checkbox value="{ 2 }">Option 2</Checkbox>
	<Checkbox value="{ 3 }">Option 3</Checkbox>
</CheckboxGroup>
<br><br>
Checked：{ ( v && v.length > 0 ) ? v : 'none' }
```
