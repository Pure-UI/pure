---
order: 3
---

事件

```html
<CheckboxGroup checked="2" on-change="{ v = $event }">
	<Checkbox value="1">Option1</Checkbox>
	<Checkbox value="2">Option2</Checkbox>
	<Checkbox value="3">Option3</Checkbox>
</CheckboxGroup>
<br />
<br />
Checked：{ ( v && v.length > 0 ) ? v : '未选中' }
```
