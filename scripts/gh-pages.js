var ghpages = require( 'gh-pages' );
var path = require( 'path' );
var cwd = process.cwd();

ghpages.clean();
ghpages.publish( path.resolve( cwd, 'public' ), {
	logger: function(message) {
		console.log(message);
	}
}, function() {
	console.log( 'ghpages published' );
} );
