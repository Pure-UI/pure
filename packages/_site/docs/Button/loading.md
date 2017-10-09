---
order: 2
---

Loading

```html
<Button
	type="primary"
	loading="{ loading }"
	on-click="{ loading = !loading }"
>
	{ loading ? 'Loading...' : 'Start' }
</Button>
```
