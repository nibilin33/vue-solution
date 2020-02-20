const fs = require('fs');
const DEFAULT = {
    prefix: '',
    outputName: 'source.js',
};
const PLUGINNAME = 'SourceWebpackPlugin';

class SourceWebpackPlugin {
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
                    this.createFile(stats.compilation.chunks);
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
                let allChunks = compilation.getStats().toJson().chunks;
                this.createFile(allChunks);
                callback();
            } catch (error) {
                console.log(error);
                callback();
            }
        });
    }
    createFile(allChunks) {
        let str = '';
        allChunks.forEach((chunk) => {
            str += `${str ? ',' : ''}${chunk.files.map(filename => `"${this.options.prefix}/${filename}"`).join(',')}`;
        });
        fs.writeFileSync(`${__dirname}/${this.options.outputName}`, str);
    }
}
module.exports = SourceWebpackPlugin;
