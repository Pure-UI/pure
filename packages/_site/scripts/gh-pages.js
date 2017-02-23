const ghpages = require( 'gh-pages' );
const path = require( 'path' );

ghpages.clean();
ghpages.publish( path.resolve( __dirname, '../public' ), {
	logger: function( message ) {
		console.log( message );
	}
}, function () {
	console.log( 'ghpages published' );
} );
