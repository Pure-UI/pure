import NumberInput from '@pure/number-input';

play( NumberInput, module ).name( 'NumberInput' ).add(
	'basic',
	{
		template: `
			<NumberInput step="{ .5 }" value="{ 5 }" min="{ 0 }" max="{ 10 }" on-change="{ this.onChange($event) }"></NumberInput>
		`,
		onChange( v ) {
			this.$log( typeof v )
			this.$log( v )
			this.$log( '-----' )
		}
	},
);
