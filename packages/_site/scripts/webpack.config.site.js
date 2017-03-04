const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const path = require( 'path' );

process.chdir( path.resolve( __dirname, '../' ) );
const cwd = process.cwd();

module.exports = {
	entry: './src/index.js',
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
				test: /\.(css|less)$/,
				loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader!postcss-loader!less-loader' ),
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json',
				exclude: /node_modules/
			},
			{
				test: /\.(ttf|woff|eot|svg)(\?t=\d+)*$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=102400&name=[name].[ext]?[hash:8]'
			},
		],
		noParse: [ /regularjs/, /pure-ui/ ]
	},
	regular: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	postcss: function () {
		return [
			autoprefixer(),
		]
	},
	resolve: {
		extensions: [ '', '.js', 'json', '.css', '.rgl' ],
		alias: {
			regularjs: path.resolve( '../../node_modules/regularjs/dist/regular.min.js' ),
		},
	},
	plugins: [
		new ExtractTextPlugin( 'app-[hash:8].css' ),
		new HtmlWebpackPlugin( {
			template: 'src/_index.html',
			filename: '../index.html',
		} ),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			}
		} ),
		new CopyWebpackPlugin( [
			{ from: 'src/CNAME', to: '../' },
		] ),
	]
};
