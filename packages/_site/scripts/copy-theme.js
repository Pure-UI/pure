const copy = require( 'kopy' );
const path = require( 'path' );

copy(
	path.resolve( __dirname, '../../_theme/lib' ),
	path.resolve( __dirname, '../public/theme/default' ),
	{}
);
