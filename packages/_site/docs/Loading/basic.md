---
order: 1
---

Basic

```html
<Button on-click="{ this.onStart() }">start</Button>
<Button on-click="{ this.onInc() }">inc</Button>
<Button on-click="{ this.onUpdate() }">update</Button>
<Button on-click="{ this.onFinish() }">finish</Button>
```

```js
{
	onStart() {
		Pure.loading.start();
	},
	onInc() {
		Pure.loading.inc();
	},
	onUpdate() {
		Pure.loading.update( 90 );
	},
	onFinish() {
		Pure.loading.finish();
	}
}
```
