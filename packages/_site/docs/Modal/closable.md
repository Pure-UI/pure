---
order: 1
---

Closable

```html
<Button on-click="{ showModal = true }">Open Modal</Button>
{#if showModal}
<Modal
	title="Modal Title"
	confirmText="Confirm"
	cancelText="Cancel"
	on-cancel="{ showModal = false }"
	on-confirm="{ showModal = false }"
	on-close="{ showModal = false }"
	closable
>
	<div class="modal-example-center">
		<img src="http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif">
	</div>
</Modal>
{/if}
```
