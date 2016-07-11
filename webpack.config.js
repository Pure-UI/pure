var webpack = require( 'webpack' )
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var cwd = process.cwd();

module.exports = {
	entry: './index.js',
	cwd: cwd,
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
				test: /\.(ttf|woff|svg|eot)$/,
				loader: 'url',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( 'style', 'css' ),
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
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', '.less', '.rgl' ]
	},
	externals: {
		'regularjs': 'Regular'
	},
	plugins: [
		new ExtractTextPlugin( 'pure.css' ),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	]
};
