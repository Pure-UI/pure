var ghpages = require( 'gh-pages' );
var path = require( 'path' );

ghpages.clean();
ghpages.publish( path.resolve( __dirname, 'public' ), {
	logger: function(message) {
		console.log(message);
	}
}, function() {
	console.log( 'ghpages published' );
} );
