import NumberInput from '@pure/number-input';

play( NumberInput, module ).name( 'NumberInput' ).add(
	'basic',
	`
		<NumberInput step="{ .5 }" value="{ 5 }" min="{ 0 }" max="{ 10 }"></NumberInput>
	`,
);
