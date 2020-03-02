const loaderUtils = require("loader-utils");
module.exports = function (source) {
    let options = loaderUtils.getOptions(this);
    console.log(options);
    // todo:额外替换规则
    try {
        let result = source.match(/\<template\>[\s\S]*\<\/template\>/gmi).map((it)=>{
            return it.replace(/(\{\{\$t\((.*)\)\}\})/g,'<nb-close data-key=$2>$1</nb-close>');
        }).join('');
       return source.replace(/\<template\>([\s\S]*)\<\/template\>/gmi,result);
    } catch (error) {
        return source;
    }
}