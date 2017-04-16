import ProgressCircle from '@pure/progress-circle';
import NumberInput from '@pure/number-input';

play( ProgressCircle, module )
	.name( 'ProgressCircle' )
	.component( 'NumberInput', NumberInput )
	.add( 'basic', {
		template: `
			<ProgressCircle size="160" percentage="{ v }" show-percentage-text="{ false }">
				<div style="font-size: 14px;">some text...</div>
			</ProgressCircle>
			<br>
			<NumberInput value="{ v }" step="10" on-change="{ v = $event }"></NumberInput>
		`,
		config() {
			this.data.v = 10;
		},
	} );
