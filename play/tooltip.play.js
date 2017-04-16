import Tooltip from '@pure/tooltip';
import Button from '@pure/button';

play( Tooltip, module ).name( 'Tooltip' ).component( 'Button', Button ).add(
	'basic',
	`
		<div style="width: 100wh;height: 100vh;display: flex;align-items: center;justify-content: center;">
			<Tooltip placement="top" content="top">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="left" content="left">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="right" content="right">
				<Button>button</Button>
			</Tooltip>
			<Tooltip placement="bottom" content="bottom">
				<Button>button</Button>
			</Tooltip>
		</div>
	`,
);
