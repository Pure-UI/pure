---
order: 1
---

Basic

```html
<Tag>tag</Tag>
<Tag closable
     on-click={this.clickTag()} 
     on-close={this.tagClose($event)}
>closable</Tag>
```

```js
{
    clickTag() {
        alert( 'tag clicked' )
    },
    tagClose() {
        alert('close clicked')
    }
}
```
