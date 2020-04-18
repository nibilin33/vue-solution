const SourceWebpackPlugin = require('./webpack-plu-loader/source-plugin');
const ThemeWebpackPlugin = require('./webpack-plu-loader/themeWebpackPlugin/index');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

const plugins = [
    new SourceWebpackPlugin({
        outputName: process.env.NODE_ENV !== 'production'? 'source.js':'source-remote.js'
    }),
    new ManifestPlugin(),
    // new ThemeWebpackPlugin(),
];
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    publicPath:process.env.publicPath||'/',
    outputDir:path.join(__dirname,process.env.outputDir||'./server/dist'),
    pages: {
        index:'src/main.js',
        game: 'src/game/main.js'
    },
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
        hot: true,
        proxy: {
            '/api/v1': {
                target: 'http://0.0.0.0:3000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
};
