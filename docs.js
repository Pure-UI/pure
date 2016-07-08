const marked = require( 'marked' );
const fm = require( 'front-matter' );
const glob = require( 'glob' );
const _ = require( 'lodash' );
const path = require( 'path' );
const fs = require( 'fs' );

const cwd = process.cwd();
const renderer = new marked.Renderer();
var codes = {};

renderer.code = function( code, language ) {
	codes[ language ] = code;
	return '';
};

var docs = {};

glob('**/*.md', {
	cwd: path.resolve( cwd, 'docs' )
}, function( err, files ) {
	if( err ) return;

	files.forEach(function( v, i ) {
		var componentName = path.dirname( v );
		var p = path.join( 'docs', v );
		docs[ componentName ] = docs[ componentName ] || [];
		docs[ componentName ].push({
			path: v
		});
	});

	// parse
	var doc;
	for( var i in docs ) {
		doc = docs[ i ];
		for( var j = 0, len = doc.length; j < len; j++ ) {
			var content = fs.readFileSync( path.resolve( cwd, 'docs', doc[ j ].path ), 'utf-8' );
			var parsed = fm( content );
			doc[ j ].attrs = parsed.attributes;
			doc[ j ].source = parsed.body;
			codes = {};
			doc[ j ].html = marked( parsed.body, { renderer: renderer } );
			doc[ j ].code = codes;
		}

		docs[ i ] = _.sortBy( docs[ i ], function( v ) {
			return v.attrs.order;
		} );
	}


	fs.writeFileSync( 'site/docs.json', JSON.stringify( docs, 0, 4 ) );
});
