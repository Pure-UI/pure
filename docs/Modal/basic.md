---
order: 1
---

Basic Usage

```html
<Button primary on-click="{ show = true }">Open Modal</Button>
{#if show}
<Modal
	title="Modal Title"
	ok-text="Confirm"
	cancel-text="Cancel"
	on-cancel="{ show = false }"
	on-ok="{ show = false }"
>
	<div class="modal-example-center">
		<img src="http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif">
	</div>
</Modal>
{/if}
```
