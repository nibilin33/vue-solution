const SourceWebpackPlugin = require('./source-plugin');
const plugins = [
    new SourceWebpackPlugin({
        outputName: process.env.NODE_ENV !== 'production'? 'source.js':'source-remote.js'
    }),
];
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        plugins,
    },
    productionSourceMap: false,
};
