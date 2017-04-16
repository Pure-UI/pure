import ProgressBar from '@pure/progress-bar';

play( ProgressBar, module ).name( 'ProgressBar' ).add(
	'basic',
	`
		<ProgressBar percentage="{ 80 }"></ProgressBar>
		<br>
		<ProgressBar percentage="{ 0 }" text-inside></ProgressBar>
		<br>
		<ProgressBar percentage="{ 10 }" text-inside></ProgressBar>
	`,
);
