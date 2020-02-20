const theme = require('./src/theme');
const DEFAULT = {
    sourcePrefix: '',
    outputPath: '',
    webpackConfig: {}
};
const PLUGINNAME = 'ThemeWebpackPlugin';

class ThemeWebpackPlugin {
    constructor(options) {
        this.options = Object.assign(DEFAULT,options||{});
    }

    apply(compiler) {
       
        if(compiler.hooks) {
            // compatible with webpack 4.x
            compiler.hooks.emit.tap(PLUGINNAME, () => {
                console.log('compiler.hooks.emit');
            });
            compiler.hooks.compilation.tap(PLUGINNAME,(compilation)=>{
				// HTML处理完毕勾子
				compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
					PLUGINNAME,
					(htmlPluginData, callback) => {
						const injectStr = this.injectToHtml();
						htmlPluginData.html = htmlPluginData.html.replace('</html>', injectStr);
						console.log(htmlPluginData.outputName,htmlPluginData.assets);
						// htmlWebpackPluginAfterHtmlProcessing 返回 HtmlWebpackPlugin对象
						// {
						// 	html 字符串
						// 	assets
						// 	plugin
						// 	childCompilerHash
						// 	childCompilationOutputName
						// 	assetJson
						//  outputName
						// }
						// console.log(htmlPluginData);
						callback(null, htmlPluginData)
					}
				);
				
				// 勾子任务处理完毕发送事件时
				compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync(
					PLUGINNAME,
					(htmlPluginData, callback) => {
						// htmlWebpackPluginAfterEmit 返回 HtmlWebpackPlugin对象
						// {
						// 	html 简化对象 { source, size }
						// 	outputName
						// 	plugin
						// 	childCompilerHash
						// 	childCompilationOutputName
						// 	assetJson
						// }
						// console.log(htmlPluginData);
						callback(null, htmlPluginData);
					}
				);
            });
            return;
        }
        compiler.plugin('make', (compilation,callback) => {
            callback();
        });
        compiler.plugin('emit', (compilation, callback) => {
            try {
                callback();
            } catch (error) {
                console.log(error);
                callback();
            }
        });
    }
    injectToHtml() {
        const themeOb = new theme({});
        const injectStr = `
        <script type="text/javascript">window.WEBPACKTHEME = ${themeOb}</script></html>
        `;
        return injectStr;
    }
}
module.exports = ThemeWebpackPlugin;
