---
order: 3
---

事件

```html
<RadioGroup on-change="{ v = $event }">
	<Radio value="1">选项1</Radio>
	<Radio value="2">选项2</Radio>
	<Radio value="3">选项3</Radio>
</RadioGroup>
<br />
<br />
选中项：{ v || '未选中' }
```
