const fs = require('fs');
const DEFAULT = {
    sourcePrefix: '',
    outputPath: '',
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
            compiler.hooks.done.tap(PLUGINNAME, (stats) => {
                try {
                    console.log('compiler.hooks.done');
                } catch (error) {
                    console.log(error);
                }
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
    }
}
module.exports = ThemeWebpackPlugin;
