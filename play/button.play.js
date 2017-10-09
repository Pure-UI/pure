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
				<Button loading="{ loading }" on-click="{ this.onClick() }">Normal</Button>
			`,
			config() {
				this.data.loading = false
			},
			onClick() {
				this.data.loading = true

				setTimeout( () => {
					this.data.loading = false
					this.$update()
				}, 1000 )
			},
		},
	);
