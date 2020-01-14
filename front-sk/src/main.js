import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './routes'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(Router)

// history mode 가 뭔지 찾아보기
// history  mode를 추가 해야 http://localhost:8080/components 를 볼 수 있어
const router = new Router({
    mode : "history",
    routes,
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


