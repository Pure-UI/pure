---
order: 1
---

Basic Usage

**Pro Tip:** Pure doesn't set z-index for Modal, you should set it on your own

```html
<Button primary on-click="{ showModal = true }">Open Modal</Button>
{#if showModal}
<Modal
	title="Modal Title"
	ok-text="Confirm"
	cancel-text="Cancel"
	on-cancel="{ showModal = false }"
	on-ok="{ showModal = false }"
>
	<div class="modal-example-center">
		<img src="http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif">
	</div>
</Modal>
{/if}
```
