import Vue from 'vue'
import Router from 'vue-router'
import ShowPage from '../components/showPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: ShowPage,
        meta: { title: '路志鹏面试' }
    }]
})