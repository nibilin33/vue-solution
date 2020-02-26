const path = require('path');
const MangleJsClassPlugin = require('mangle-js-webpack-plugin');
module.exports = {
output: {
    path: path.resolve(__dirname,'./output'),
    filename: '[name].js',
},
module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
    ]
},
plugins:[
    new MangleJsClassPlugin(),
]
};