import Vue from 'vue'
import App from './App'
// 自定义导航栏组件
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
// 将自定义导航栏组件注册为全局组件
Vue.component('uni-nav-bar',uniNavBar)
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

import axios from "@/components/axios.js"
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
