import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const testSource = resolve => require(['./view/test-source.vue'], resolve);
const testPlan = resolve => require(['./view/test-plan.vue'], resolve);
const testColor = resolve => require(['./view/test-color.vue'], resolve);
const routes = [
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
]
const router = new Router({
    mode: 'history',
    base:__dirname,
    routes: routes 
});
export default router;