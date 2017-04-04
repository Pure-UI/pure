const copy = require( 'kopy' );
const path = require( 'path' );
const cwd = process.cwd();

// generate default theme
copy(
	path.resolve( cwd, './template' ),
	path.resolve( cwd, '../_theme-default' ),
	{
		data: {
			name: '',
			primaryColor: '#4c5c77',
		}
	}
);
