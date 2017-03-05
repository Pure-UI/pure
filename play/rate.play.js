import Rate from '../packages/rate/src';

play( Rate, module )
	.name( 'Rate' )
	.add( 'basic', {
		template: `
			<Rate on-change="{ this.onChange($event) }"></Rate>
		`,
		onChange( v ) {
			this.$log( v );
		},
	} );
