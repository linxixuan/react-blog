var path = require('path');
var webpack = require('webpack');

module.exports = function (options) {
	return {
		entry: {
            app: "./client/components/app.jsx"
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
