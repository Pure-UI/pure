---
order: 2
---

Loading

```html
<Button
	type="primary"
	loading="{ loading }"
	on-click="{ this.onLoading() }"
>
	{ loading ? 'Loading...' : 'Start' }
</Button>
```


```js
{
	config() {
		this.data.loading = false
	},
	onLoading() {
		this.data.loading = true
		setTimeout( () => {
			this.data.loading = false
			this.$update()
		}, 5000 )
	}
}
```
