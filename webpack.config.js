var path = require('path');
var webpack = require('webpack');

module.exports = function (options) {
	return {
		entry: {
			index: "./client/src/components/index.jsx"
		},
		output: {
			filename: '[name].js',
			path: './static/js/'
		},
		module: {
			loaders: [
				{
					test: /\.jsx$/,
					loader: 'jsx-loader?insertPragma=React.DOM&harmony'
				}
			]
		}
	};
};
