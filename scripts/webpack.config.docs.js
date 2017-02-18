const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const webpack = require( 'webpack' );
const path = require( 'path' );
const cwd = process.cwd();

module.exports = {
	entry: './site/index.js',
	cwd: cwd,
	output: {
		path: './public/dist',
		filename: 'app-[hash:8].js',
		jsonpFunction: 'Q'
	},
	module: {
		loaders: [
			{
				test: /\.rgl$/,
				loader: 'regular'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: 'es2015'
				}
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
		],
		noParse: [ /regularjs/, /dist\/pure/ ]
	},
	regular: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', 'json', '.css', '.rgl' ],
		alias: {
			regularjs: path.resolve( cwd, 'node_modules/regularjs/dist/regular.min.js' )
		}
	},
	plugins: [
		new ExtractTextPlugin( 'app-[hash:8].css' ),
		new HtmlWebpackPlugin({
			template: 'site/_index.html',
			filename: '../index.html',
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{ from: 'packages/_theme/default.css', to: '../pure.css' }
		])
	]
};
