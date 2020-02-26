const SourceWebpackPlugin = require('./webpack-plu-loader/source-plugin');
const ThemeWebpackPlugin = require('./webpack-plu-loader/themeWebpackPlugin/index');
const path = require('path');

const plugins = [
    new SourceWebpackPlugin({
        outputName: process.env.NODE_ENV !== 'production'? 'source.js':'source-remote.js'
    }),
    // new ThemeWebpackPlugin(),
];
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    outputDir:path.join(__dirname,'server/dist'),
    configureWebpack: {
        plugins:plugins
    },
};
