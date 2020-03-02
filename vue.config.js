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
        plugins:plugins,
        module:{
            rules:[
                {
                    test: /\.vue$/,
                    use:{
                        loader: path.resolve(__dirname, './webpack-plu-loader/i18nloader.js')
                    }
                    
                }
            ]
        }
 
    },
    devServer: {
        hot: false,
        proxy: {
            '/api/v1': {
                target: 'http://0.0.0.0:3000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
};
