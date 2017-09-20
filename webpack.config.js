var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		}, {
			test: /\.scss$/,
			loaders: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'autoprefixer-loader',
				options: {
					browsers: ["last 2 version", "Firefox 15"]
				}
			}, {
				loader: 'sass-loader'
			}]
		}, {
			test: /\.(jpg|gif|png|mp3)$/,
			loader: 'file-loader',
			options: {
				name: "[name].[ext]"
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/music.html'
		})
	]
}