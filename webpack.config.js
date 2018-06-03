const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: "development", 
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			}
		]
	},
	devtool: 'eval-sourcemap',
}