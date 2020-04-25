/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-24 11:24:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import layout from '../view/layout.vue'
import home from '../view/home/index'
import news from '../view/news/index'
import we from '../view/we/index'
import member from '../view/we/member'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/layout',
        },
        {
            path: '/layout',
            name: 'layout',
            component: layout,
            children: [{
                    path: '/home',
                    name: 'home',
                    component: home
                },
                {
                    path: '/news',
                    name: 'news',
                    component: news
                },
                {
                    path: '/we',
                    name: 'we',
                    component: we
                },
                {
                    path: '/member',
                    name: 'member',
                    component: member
                },
            ]
        }
    ]
})

export default router