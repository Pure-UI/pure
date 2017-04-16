import Badge from '@pure/badge';
import Button from '@pure/button';

play( Badge, module )
	.name( 'Badge' )
	.component( 'Button', Button )
	.add(
		'basic',
		`
		<Badge>
			<Button>button</Button>
		</Badge>
		<Badge>
			12345
		</Badge>
	`,
	)
	.add(
		'with number',
		`
		<Badge count="1000" max="999">
			<Button>button</Button>
		</Badge>
	`,
	)
	.add(
		'dot',
		`
		<Badge dot>
			<Button>button</Button>
		</Badge>
	`,
	);
