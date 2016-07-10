---
order: 1
---

Basic Usage

```html
<Pagination
	min="{ 1 }"
	max="{ 10 }"
	current="{ current || 5 }"
	prev-text="<"
	next-text=">"
	on-change="{ current = $event }"
></Pagination>
Current: { current || 5 }
```
