import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: { title: '' }
        },
        {
            path: '/task3',
            component: ()=>import('../components/task3.vue'),
            meta: { title: '' }
        },
        {
            path: '/task4',
            component: ()=>import('../components/task4.vue'),
            meta: { title: '' }
        },
        {
            path: '/task5',
            component: ()=>import('../components/task5.vue'),
            meta: { title: '' }
        },
        {
            path: '/task6',
            component: ()=>import('../components/task6.vue'),
            meta: { title: '' }
        },
    ]
})