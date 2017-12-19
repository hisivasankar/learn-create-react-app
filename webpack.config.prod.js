const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.common.js');

var oProductionConfig = {};

module.exports = merge(commonConfig, oProductionConfig);