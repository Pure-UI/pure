---
order: 1
---

Basic

```html
<Pagination
	min="{ 50 }"
	max="{ 100 }"
	current="{ current || 50 }"
	prevText="<"
	nextText=">"
	on-change="{ current = $event }"
></Pagination>
Current: { current || 50 }
```
