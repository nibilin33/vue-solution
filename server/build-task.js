const webpack = require('gulp-webpack');
const gulp = require('gulp');
let config = require('./webpack.config');

module.exports = function(entry){
    return new Promise((resolve,reject)=>{
        gulp.src(entry)
        .pipe(webpack(config, null, function(err, stats) {
            resolve(Object.keys(stats.compilation.assets));
        }))
        .pipe(gulp.dest(__dirname+'/output/'));
    });

};