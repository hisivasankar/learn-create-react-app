const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.common.js');

var oDevConfig = {
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        publicPath: '/'
    },
};

module.exports = merge(commonConfig, oDevConfig);