import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../mock/mock.js'
// import './utils/mdpi'
import JsonViewer from 'vue-json-viewer'
import './style/global.css'

Vue.config.productionTip = false

Vue.use(JsonViewer)

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')