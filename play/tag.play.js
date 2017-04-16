import Tag from '@pure/tag';

play( Tag, module )
	.name( 'Tag' )
	.add( 'basic', {
		template: `
			<Tag
				on-click="{ this.onClick() }"
				on-close="{ this.onClose($event) }"
				closable
			>
				closable
			</Tag>
			<Tag checkable on-check="{ this.onCheck($event) }">
				checkable
			</Tag>
			<Tag checkable checked>
				checked
			</Tag>
		`,
		onClose() {
			this.$log( 'closed' );
		},
		onClick() {
			this.$log( 'clicked' );
		},
		onCheck( status ) {
			this.$log( 'check:' + status );
		},
	} )
	.add(
		'color',
		`
			<Tag color="red">text</Tag>
		`,
	);
