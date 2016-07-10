---
order: 1
---

Basic Usage

```html
<Pagination
	min="{ 1 }"
	max="{ 10 }"
	current="{ current || 5 }"
	on-change="{ current = $event }"
></Pagination>
<div class="pagination-example-center">Current: { current || 5 }</div>
```
