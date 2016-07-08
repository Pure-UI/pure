var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var cwd = process.cwd();

module.exports = {
	entry: './site/index.js',
	cwd: cwd,
	devtool: 'source-map',
	output: {
		path: './site/dist',
		publicPath: 'dist/',
		filename: 'app-[hash:8].js',
		jsonpFunction: 'Q'
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
			},
			{
				test: /\.json$/,
				loader: 'json',
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
		extensions: [ '', '.js', 'json', '.css', '.rgl' ]
	},
	externals: {
		'regularjs': 'Regular'
	},
	plugins: [
		new ExtractTextPlugin( 'app-[hash:8].css' ),
		new HtmlWebpackPlugin({
			template: 'site/_index.html',
			filename: '../index.html',
		})
	]
};
