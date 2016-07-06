var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cwd = process.cwd();

module.exports = {
	entry: './index.js',
	cwd: cwd,
	devtool: 'source-map',
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: 'pure.js'
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
				test: /\.less$/,
				loader: 'less',
				exclude: /node_modules/
			}
		]
	},
	regularjs: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			mcss: ExtractTextPlugin.extract( 'css!mcss' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', '.mcss', '.rgl' ]
	},
	externals: {
		'regularjs': 'Regular'
	},
	plugins: [
		new ExtractTextPlugin( 'pure.css' )
	]
};
