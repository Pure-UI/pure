---
order: 2
---

PrevText and NextText

```html
<Pagination
	min="{ 50 }"
	max="{ 100 }"
	current="{ current || 50 }"
	on-change="{ current = $event }"
	prevText="<"
	nextText=">"
></Pagination>
<br>
Current: { current || 50 }
```
