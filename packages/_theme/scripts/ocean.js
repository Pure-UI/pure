const copy = require( 'kopy' );
const path = require( 'path' );
const cwd = process.cwd();

// generate ocean theme
copy(
	path.resolve( cwd, './template' ),
	path.resolve( cwd, '../_theme-ocean' ),
	{
		data: {
			name: 'ocean',
			primaryColor: '#3c7ce6',
		}
	}
);
