const copy = require( 'kopy' );
const path = require( 'path' );

copy(
	path.resolve( __dirname, '../../_theme-default/lib' ),
	path.resolve( __dirname, '../public/theme/default' ),
	{}
);

copy(
	path.resolve( __dirname, '../../_theme-ocean/lib' ),
	path.resolve( __dirname, '../public/theme/ocean' ),
	{}
)
