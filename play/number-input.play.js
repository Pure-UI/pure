import NumberInput from 'pure-number-input';

play( NumberInput, module )
	.name( 'NumberInput' )
	.add( 'basic', `
		<NumberInput step=".5" value="10"></NumberInput>
	` )
