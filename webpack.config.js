var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'),
    SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: path.resolve(SRC_DIR, 'app.jsx'),
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './src',
        publicPath: '/dist'
    }
};

module.exports = config;