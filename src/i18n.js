import Vue from 'vue';
import VueI18n from 'vue-i18n';
const messages = {
    en:{},
    zh:{},
};
Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 'zh',
    messages,
});
export const $t = (key, args) => i18n.t(key, args);