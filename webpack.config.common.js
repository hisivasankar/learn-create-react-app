const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist'),
    SRC_DIR = path.resolve(__dirname, 'src');

const oConfig = {
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
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            inject: true
        })
    ],
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    }
};

module.exports = oConfig;