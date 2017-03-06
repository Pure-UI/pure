import Button from 'pure-button/src';

play( Button, module )
	.name( 'Button' )
	.add( 'basic', `
		<Button primary>Primary</Button>
		<Button>Normal</Button>
	` )
	.add( 'size', `
		<Button primary sm>Primary</Button>
		<Button sm>Normal</Button>
	` )
	.add( 'disabled', `
		<Button primary disabled>Normal</Button>
		<Button disabled>Normal</Button>
	` )
