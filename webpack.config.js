var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var ProvidePlugin = require( './ProvidePlugin' );
var autoprefixer = require( 'autoprefixer' );
var path = require( 'path' );
var cwd = process.cwd();

var singleConfig = {
	entry: './src/index.js',
	cwd: cwd,
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: 'pure.js',
		library: 'Pure',
		libraryTarget: 'umd'
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
				loader: ExtractTextPlugin.extract( 'style', 'css!postcss!less' ),
				exclude: /node_modules/
			}
		]
	},
	postcss: [
		autoprefixer({ browsers: [ 'last 2 versions' ] })
	],
	regularjs: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', '.less', '.rgl' ],
		// 覆盖regularjs
		alias: {
			'regularjs': path.resolve( __dirname, 'src/core.js' )
		}
	},
	plugins: [
		new ExtractTextPlugin( 'pure.css' ),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ProvidePlugin({
			// 真正的Regular指向external
			__REGULAR__: path.resolve( __dirname, 'src/external.js~' )
		}),
	]
};

var bundleConfig = {
	entry: './src/index.js',
	cwd: cwd,
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: 'pure+regular.js',
		library: 'Pure',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.rgl$/,
				loader: 'regularjs',
				include: /src/
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
				loader: ExtractTextPlugin.extract( 'style', 'css!postcss!less' ),
				exclude: /node_modules/
			}
		]
	},
	postcss: [
		autoprefixer({ browsers: [ 'last 2 versions' ] })
	],
	regularjs: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' ),
		}
	},
	resolve: {
		extensions: [ '', '.js', '.less', '.rgl' ],
		// 覆盖regularjs
		alias: {
			'regularjs': path.resolve( __dirname, 'src/core.js' )
		}
	},
	plugins: [
		new ExtractTextPlugin( 'pure.css' ),
		new ProvidePlugin({
			// 引入真正的regularjs
			__REGULAR__: require.resolve( 'regularjs' )
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	]
}

module.exports = [
	singleConfig,
	bundleConfig
]
