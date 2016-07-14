---
order: 1
---

Basic Usage

```html
<Pagination
	min="{ 50 }"
	max="{ 100 }"
	current="{ current || 50 }"
	prev-text="<"
	next-text=">"
	on-change="{ current = $event }"
></Pagination>
Current: { current || 50 }
```
