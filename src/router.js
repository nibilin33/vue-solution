import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const testSource = resolve => require(['./view/test-source.vue'], resolve);
const testPlan = resolve => require(['./view/test-plan.vue'], resolve);
const testColor = resolve => require(['./view/test-color.vue'], resolve);
const testWepack = resolve => require(['./view/test-webpack.vue'], resolve);
const login = resolve => require(['./view/login.vue'], resolve);
const testSerialize = resolve => require(['./view/test-serialize.vue'], resolve);

const routes = [
    {
        path: '/login',
        component: login,
    },
    {
        path: '/ume/test-resource',
        component: testSource,
    },
    {
        path: '/test-plan',
        component: testPlan,
    },
    {
        path: '/test-color',
        component: testColor,
    },
    {
        path: '/webpack',
        component: testWepack,
    },
    {
        path:'/serialize',
        component: testSerialize,
    }
]
const router = new Router({
    mode: 'hash',
    base:__dirname,
    routes: routes 
});
export default router;