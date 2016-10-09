const ghpages = require( 'gh-pages' );
const path = require( 'path' );
const cwd = process.cwd();

ghpages.clean();
ghpages.publish( path.resolve( cwd, 'public' ), {
	logger: function(message) {
		console.log(message);
	}
}, function() {
	// TODO: 判断是否失败
	console.log( 'ghpages published' );
} );
