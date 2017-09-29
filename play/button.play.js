import Button from '@pure/button';
import '@pure/theme';

play( Button, module )
	.name( 'Button' )
	.add(
		'basic',
		`
		<Button type="primary">Primary</Button>
		<Button>Normal</Button>
	`,
	)
	.add(
		'size',
		`
		<Button size="small">Normal</Button>
		<Button>Normal</Button>
		<Button size="large">Normal</Button>
	`,
	)
	.add(
		'disabled',
		`
		<Button type="primary" disabled>Normal</Button>
		<Button disabled>Normal</Button>
	`,
	)
	.add(
		'loading',
		{
			template: `
				<Button loading="{ loading }" on-click="{ loading = !loading }">Normal</Button>
			`,
			config() {
				this.data.loading = true
			}
		},
	);
