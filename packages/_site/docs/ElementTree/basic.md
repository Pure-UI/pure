---
order: 1
---

```html
<ElementTree source="{ source }" on-select="{ this.onSelect( $event ) }"></ElementTree>
<br />
Selected: { JSON.stringify( selected ) }
```

```js
{
	config: function() {
		this.data.source = [
			{
				name: 'head',
				children: [
					{
						name: 'meta',
						attrs: {
							charset: 'utf-8'
						}
					}
				]
			},
			{
				name: 'body',
				children: [
					{
						name: 'div',
						attrs: {
							id: 'app',
							class: 'app'
						},
						children: [
							{
								name: 'h1',
								attrs: {
									class: 'title'
								}
							},
							{
								name: 'div',
								attrs: {
									class: 'content'
								}
							}
						]
					},
					{
						name: 'script',
						attrs: {
							type: 'text/javascript',
							src: "../app.js"
						}
					}
				]
			}
		];
	},
	onSelect: function( node ) {
		this.data.selected = node;
		this.$update();
	}
}
```
