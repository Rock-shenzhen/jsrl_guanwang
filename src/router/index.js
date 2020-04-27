/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-27 14:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// we模块
import layout from '../view/layout.vue'
import we from '../view/we/index'
import culture from '../view/we/culture'
import history from '../view/we/history'
import organization from '../view/we/organization'
import leadership from '../view/we/leadership'
import member from '../view/we/member'
import tdjs from '../view/we/tdjs'
import job from '../view/we/job'
// 业务平台
import yewu from '../view/yewu/index'
import yrbzpt from '../view/yewu/yrbzpt'
import wssc from '../view/yewu/wssc'
// 企业风采
import enterprise from '../view/enterprise/index'
import life from '../view/enterprise/life'
// 新闻公告
import news from '../view/news/index'
import hyxw from '../view/news/hyxw'
import gsgg from '../view/news/gsgg'
import zcfg from '../view/news/zcfg'
// 社会责任
import shzr from '../view/shzr/index'
import kjcx from '../view/shzr/kjcx'
// 在线留言
import zxly from '../view/zxly/index'
import tsjy from '../view/zxly/tsjy'
// home模块
import home from '../view/home/index'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home',
        },
        {
            path: '/layout',
            name: 'layout',
            component: layout,
            children: [
                // we模块
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
                    path: '/tdjs',
                    name: '团队建设',
                    component: tdjs
                },
                {
                    path: '/job',
                    name: '招聘信息',
                    component: job
                },
                // 业务平台
                {
                    path: '/yewu',
                    name: '业务平台',
                    component: yewu
                },
                {
                    path: '/yrbzpt',
                    name: '用热报装',
                    component: yrbzpt
                },
                {
                    path: '/yewu',
                    name: '网上营业厅',
                    component: yewu
                },
                {
                    path: '/wssc',
                    name: '网上商城',
                    component: wssc
                },
                // 企业风采

                {
                    path: '/enterprise',
                    name: '企业风采',
                    component: enterprise
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
                // 新闻公告
                {
                    name: "新闻公告",
                    path: "/news",
                    component: news
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
                // 社会责任
                {
                    name: "社会责任",
                    path: "/shzr",
                    component: shzr
                },
                {
                    name: "社会公益",
                    path: "/shzr",
                    component: shzr
                },
                {
                    name: "科技创新",
                    path: "/kjcx",
                    component: kjcx
                },
                // 在线留言
                {
                    path: '/zxly',
                    name: '在线留言',
                    component: zxly
                },
                {
                    path: '/tsjy',
                    name: '投诉建议',
                    component: tsjy
                },

                // home模块
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