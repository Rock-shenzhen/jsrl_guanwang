/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-26 10:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import layout from '../view/layout.vue'
import news from '../view/news/index'
import home from '../view/home/index'
import we from '../view/we/index'
import member from '../view/we/member'
import culture from '../view/we/culture'
import enterprise from '../view/enterprise/index'
import life from '../view/enterprise/life'
import gcdt from '../view/gcdt/index'
import hyxw from '../view/news/hyxw'
import gsgg from '../view/news/gsgg'
import zcfg from '../view/news/zcfg'
import history from '../view/we/history'
import organization from '../view/we/organization'
import leadership from '../view/we/leadership'
import zxly from '../view/zxly/index'
import job from '../view/job/index'

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
                    path: '/gcdt',
                    name: '工程动态',
                    component: gcdt
                },
                {
                    name: "公司新闻",
                    path: "/news",
                    component: news
                },
                {
                    name: "行业新闻",
                    path: "/hyxw",
                    component: hyxw
                },
                {
                    name: "公司公告",
                    path: "/gsgg",
                    component: gsgg
                },
                {
                    name: "政策法规",
                    path: "/zcfg",
                    component: zcfg
                },
                {
                    path: '/we',
                    name: '关于我们',
                    component: we
                },
                {
                    path: '/we',
                    name: '公司简介',
                    component: we
                },
                {
                    path: '/culture',
                    name: '企业文化',
                    component: culture
                },
                {
                    path: '/history',
                    name: '发展历程',
                    component: history
                },
                {
                    path: '/organization',
                    name: '组织架构',
                    component: organization
                },
                {
                    path: '/leadership',
                    name: '高管团队',
                    component: leadership
                },
                {
                    path: '/member',
                    name: '金盛人',
                    component: member
                },
                {
                    path: '/life',
                    name: '员工生活',
                    component: life
                },
                {
                    path: '/enterprise',
                    name: '员工活动',
                    component: enterprise
                },
                {
                    path: '/zxly',
                    name: '在线留言',
                    component: zxly
                },
                {
                    path: '/job',
                    name: '招聘信息',
                    component: job
                },
                {
                    path: '/home',
                    name: 'home',
                    component: home
                }
            ]
        }
    ]
})

export default router