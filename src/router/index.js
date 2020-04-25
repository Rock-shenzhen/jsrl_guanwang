/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-25 23:58:26
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
import culture from '../view/we/culture'

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
                    component: we,
                    children: [{
                            path: '/culture',
                            name: 'culture',
                            component: culture
                        },
                        {
                            path: '/history',
                            name: 'history',
                            component: history
                        },
                        {
                            path: '/organization',
                            name: 'organization',
                            component: organization
                        },
                        {
                            path: '/leadership',
                            name: 'leadership',
                            component: leadership
                        },
                        {
                            path: '/member',
                            name: 'member',
                            component: member
                        },
                    ]
                },
                {
                    path: '/culture',
                    name: 'culture',
                    component: culture
                },
            ]
        }
    ]
})

export default router