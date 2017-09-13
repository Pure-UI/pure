---
order: 1
---

Basic

ProTip: Modal has no z-index by default

```html
<Button on-click="{ showModal = true }">Open Modal</Button>
{#if showModal}
<Modal
	title="Modal Title"
	confirmText="Confirm"
	cancelText="Cancel"
	on-cancel="{ showModal = false }"
	on-confirm="{ showModal = false }"
>
	<div class="modal-example-center">
		<img src="https://i.loli.net/2017/09/13/59b8c6af9a0c1.gif">
	</div>
</Modal>
{/if}
```
