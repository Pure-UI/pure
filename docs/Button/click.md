---
order: 2
title: 点击事件
---


```js
var Regular = require( 'regularjs' );

new Regular.extend({
	template: `
		<Button on-click="{ this.onClick() }">按钮</Button>
	`,
	onClick() {
		alert( 'clicked' );
	}
}).$inject( mountNode );
```
