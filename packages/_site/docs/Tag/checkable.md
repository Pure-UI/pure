---
order: 3
---

Checkable

```html
<Tag checkable on-check={this.check($event)}>checkable</Tag>
<Tag checkable checked>checked</Tag>
```

```js
{
    check( status ){
        alert(status)
    }
}
```