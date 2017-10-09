const ghpages = require( 'gh-pages' );
const path = require( 'path' );

ghpages.clean();
ghpages.publish( path.resolve( __dirname, '../public' ), {
	logger: function( message ) {
		console.log( message );
	}
}, function ( err ) {
	if ( err ) {
		return console.error( '\nghpages publish error:\n\n', err.message );
	}

	console.log( 'ghpages published' );
} );
