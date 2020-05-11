/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-05-09 10:58:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './styles/base.css';
import './styles/txsp.css';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
    error: 'dist/error.png', // 当加载图片失败的时候
    loading: 'dist/loading.gif', // 图片加载状态下显示的图片
    attempt: 3 //  加载错误后最大尝试次数 默认值:3
})
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})