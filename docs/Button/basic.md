---
order: 1
title: 基本使用
---

```js
var Regular = require( 'regularjs' );

new Regular.extend({
	template: `
		<Button primary>按钮</Button>
		<Button>按钮</Button>
	`,
}).$inject( mountNode );
```
