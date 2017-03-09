---
order: 3
---

Event

```html
<RadioGroup on-change="{ v = $event }">
	<Radio value="{ 1 }">Option 1</Radio>
	<Radio value="{ 2 }">Option 2</Radio>
	<Radio value="{ 3 }">Option 3</Radio>
</RadioGroup>
<br><br>
Checked：{ v || 'none' }
```
