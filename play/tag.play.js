import Tag from '../packages/tag/src';

play( Tag, module )
	.name( 'Tag' )
	.add( 'basic', {
		template: `
            <Tag on-click={this.clickTag()} 
                 on-close={this.tagClose($event)} 
                 closable>closable</Tag>
            <Tag checkable on-check={this.check($event)}>checkable</Tag>
            <Tag checkable checked>checked</Tag>
		`,
		tagClose() {
			this.$log('closed');
		},
        clickTag() {
            this.$log( 'clicked' )
        },
        check( status ){
            this.$log('check:' + status)
        }
	} );
