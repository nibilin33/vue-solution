const fs = require('fs');
const opt = {
    prefix: '',
    outputName: 'source.js',
};
class SourceWebpackPlugin {
    constructor(options) {
        this.options = Object.assign(opt,options||{});
    }

    apply(compiler) {
        compiler.hooks.emit.tap('SourceWebpackPlugin', (compilation) => {
            console.log('compiler.hooks.emit');
        });
        compiler.hooks.done.tap('SourceWebpackPlugin', (stats) => {
            try {
                let str = '';
                stats.compilation.chunks.forEach((chunk) => {
                    str += `${str ? ',' : ''}${chunk.files.map(filename => `"${this.options.prefix}/${filename}"`).join(',')}`;
                });
                fs.writeFileSync(`${__dirname}/${this.options.outputName}`, str);
            } catch (error) {
                console.log(error);
            }
        });
    }
}
module.exports = SourceWebpackPlugin;
