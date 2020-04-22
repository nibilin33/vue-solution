import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const testSource = resolve => require(['./view/test-source.vue'], resolve);
const testPlan = resolve => require(['./view/test-plan.vue'], resolve);
const testColor = resolve => require(['./view/test-color.vue'], resolve);
const testWepack = resolve => require(['./view/test-webpack.vue'], resolve);
const login = resolve => require(['./view/login.vue'], resolve);
const testSerialize = resolve => require(['./view/test-serialize.vue'], resolve);
const testGithub = resolve => require(['./view/test-github.vue'], resolve);
const testAST = resolve => require(['./view/test-ast.vue'],resolve);
const routes = [
    {
        path: '/login',
        component: login,
        name:'登录'
    },
    {
        path: '/ume/test-resource',
        component: testSource,
        name:'测试离线资源'
    },
    {
        path: '/test-plan',
        component: testPlan,
        name:'测试定制'
    },
    {
        path: '/test-color',
        component: testColor,
        name:'webpack多彩'
    },
    {
        path: '/webpack',
        component: testWepack,
        name:'在线打包'
    },
    {
        path:'/serialize',
        component: testSerialize,
        name:'序列化反序列化'
    },{
        path:'/git',
        component:testGithub,
        name:'Github用户'
    },
    {
        path:'/ast',
        component:testAST,
        name:'AST'
    }
]
const router = new Router({
    mode: 'hash',
    base:__dirname,
    routes: routes 
});
export default router;