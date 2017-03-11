import Tooltip from 'pure-tooltip';
import Button from 'pure-button';

play( Tooltip, module )
	.name( 'Tooltip' )
	.component( 'Button', Button )
	.add( 'basic', `
		<div style="width: 100wh;height: 100vh;display: flex;align-items: center;justify-content: center;">
			<Tooltip placement="top">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="left">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="right">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="bottom">
				<Button>button</Button>
			</Tooltip>
		</div>
	` )
