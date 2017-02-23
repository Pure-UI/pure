---
order: 4
---

Event

```html
{#if !isTimeEnd}
<Countdown end="{ v ? v : v = ( Date.now() + 1000 * 5 ) }" on-end="{ isTimeEnd = true }"></Countdown>
{#else}
<img src="http://i1.hdslb.com/icon/f8c84297779fb8f8d24f2476c78bbefc.gif" />
{/if}
<br />
<br />
isTimeEnd: { isTimeEnd ? 'true' : 'false' }
<br />
<br />
<Button sm primary on-click="{ v = Date.now() + 1000 * 5 && ( isTimeEnd = false ) }">Reset</Button>
```
