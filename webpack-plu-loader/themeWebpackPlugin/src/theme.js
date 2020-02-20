const hex2rgba = require('./utils');
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';
const DEFAULT_THEMEMAP =  {
    colorFilePrefix: '-', // 样式文件命名prefix+color
    brightness: 0.45,
    setProperty: function(color,mixList) {// 依据主题色计算其他颜色变量
        const root = document.documentElement;
        mixList.forEach((item)=>{
            root.style.setProperty(item.prop, hex2rgba(color,item.alpha));
        });
    }
}

module.exports = class Theme {
    constructor(config) {
        // todo: 使用schema 校验格式   
        const { themeURLs, themeMap } = config;
        this.themeUrls = themeURLs || [];     
        this.themeMap = Object.assign({},DEFAULT_THEMEMAP,themeMap);
    }

    static createThemeLinks(fileName) {
        const domHead = document.getElementsByTagName('HEAD').item(0);
        const href = this.themeUrls.find((it) => this.urlRegTest(it, fileName));
        if (this.themeUrls) {
            const style = document.createElement('link');
            Object.assign(style, {
                href,
                rel: 'stylesheet',
                type: 'text/css',
            });
            domHead.appendChild(style);
        }
    }

    static urlRegTest(url, name) {
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        const reg = new RegExp(`^${name}(\\-\\w+)*(\\.\\w+)*\\.css$`);
        return reg.test(fileName);
    }

    static getFileList(cssList, name) {
        const matchFileList = [];
        cssList.forEach((url) => {
            if (this.urlRegTest(url, name)) {
                matchFileList.push(url);
            }
        });
        return matchFileList;
    }

    static getStyleUrlList() {
        const domHead = document.getElementsByTagName('HEAD').item(0);
        const styleList = Array.from(domHead.querySelectorAll('link[rel=\'stylesheet\']'));
        const urlList = [];
        styleList.forEach((item) => {
            urlList.push(item.getAttribute('href'));
        });
        return urlList;
    }

    static appendDarkMask(theme) {
        const mask = document.getElementById('theme-dark-mark');
        if (mask) {
            document.body.removeChild(mask);
        }
        if (theme !== DARK_MODE) {
            return;
        }
        const div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;bottom:0;outline:100vw solid;z-index:99999;');
        div.setAttribute('id', 'theme-dark-mark');
        document.body.appendChild(div);
        div.style.outlineColor = `rgba(0,0,0,${this.themeMap.brightness})`;
    }
    static setTheme(params) {
        const { theme, color, mixList}  = params;
        const fileName = `${this.themeMap.colorFilePrefix}${color}`;
        const urlList = this.getStyleUrlList();
        this.appendDarkMask(theme||LIGHT_MODE);
        if (urlList.indexOf(fileName) > -1) {
            return;
        }
        this.themeMap.setProperty(color,mixList);
        const themeList = this.getFileList(urlList, fileName);
        themeList.forEach((el) => {
            if (this.themeUrls.indexOf(el) >= 0) {
                const item = document.querySelectorAll(`link[href="${el}"]`)[0];
                item.parentNode.removeChild(item);
            }
        });
        this.createThemeLinks(fileName);
    }
}
