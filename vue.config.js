const SourceWebpackPlugin = require('./source-plugin');
const plugins = [
    new SourceWebpackPlugin(),
];
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        plugins,
    },
    productionSourceMap: false,
};
