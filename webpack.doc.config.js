var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cwd = process.cwd();

module.exports = {
	entry: './site/index.js',
	cwd: cwd,
	devtool: 'source-map',
	output: {
		path: './site/dist',
		publicPath: 'dist/',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.rgl$/,
				loader: 'regularjs'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( 'style', 'css' ),
				exclude: /node_modules/
			}
		]
	},
	regularjs: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', '.css', '.rgl' ]
	},
	externals: {
		'regularjs': 'Regular'
	},
	plugins: [
		new ExtractTextPlugin( 'app.css' )
	]
};
