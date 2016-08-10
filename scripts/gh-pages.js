var ghpages = require( 'gh-pages' );
var path = require( 'path' );
var cwd = process.cwd();

ghpages.clean();
ghpages.publish( path.resolve( cwd, 'public' ), {
	logger: function(message) {
		console.log(message);
	}
}, function() {
	// TODO: 判断是否失败
	console.log( 'ghpages published' );
} );
