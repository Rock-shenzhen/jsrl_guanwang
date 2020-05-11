/*
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-05-09 16:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// we模块
const layout = () =>
    import ('@/view/layout.vue')
const we = () =>
    import ('@/view/we/')
const culture = () =>
    import ('@/view/we/culture.vue')
const history = () =>
    import ('@/view/we/history.vue')
const organization = () =>
    import ('@/view/we/organization.vue')
const leadership = () =>
    import ('@/view/we/leadership.vue')
const member = () =>
    import ('@/view/we/member.vue')
const tdjs = () =>
    import ('@/view/we/tdjs.vue')
const job = () =>
    import ('@/view/we/job.vue')

// import we from '../view/we/index'
// import culture from '../view/we/culture'
// import history from '../view/we/history'
// import organization from '../view/we/organization'
// import leadership from '../view/we/leadership'
// import member from '../view/we/member'
// import tdjs from '../view/we/tdjs'
// import job from '../view/we/job'
// 智慧供热
// import zhgr from '../view/zhgr/index'
const zhgr = () =>
    import ('@/view/zhgr/')
    // 服务
const fw = () =>
    import ('@/view/fw/')
const yrbzpt = () =>
    import ('@/view/fw/yrbzpt')
const wssc = () =>
    import ('@/view/fw/wssc')
const tsjy = () =>
    import ('@/view/fw/tsjy')

const fw1 = () =>
    import ('@/view/fw/fw1')
const fw2 = () =>
    import ('@/view/fw/fw2')
const fw3 = () =>
    import ('@/view/fw/fw3')
const fw4 = () =>
    import ('@/view/fw/fw4')
const fw5 = () =>
    import ('@/view/fw/fw5')
const fw6 = () =>
    import ('@/view/fw/fw6')
const fw7 = () =>
    import ('@/view/fw/fw7')
const fw8 = () =>
    import ('@/view/fw/fw8')
const fw9 = () =>
    import ('@/view/fw/fw9')
const fw10 = () =>
    import ('@/view/fw/fw10')
const fw11 = () =>
    import ('@/view/fw/fw11')

// import fw from '../view/fw/index'
// import yrbzpt from '../view/fw/yrbzpt'
// import wssc from '../view/fw/wssc'
// import fw1 from '../view/fw/fw1'
// import fw2 from '../view/fw/fw2'
// import fw3 from '../view/fw/fw3'
// import fw4 from '../view/fw/fw4'
// import fw5 from '../view/fw/fw5'
// import fw6 from '../view/fw/fw6'
// import fw7 from '../view/fw/fw7'
// import fw8 from '../view/fw/fw8'
// import fw9 from '../view/fw/fw9'
// import fw10 from '../view/fw/fw10'
// import fw11 from '../view/fw/fw11'
// 投资者
const tzz = () =>
    import ('@/view/tzz/')
    // import tzz from '../view/tzz/index'

// 新闻资讯
const news = () =>
    import ('@/view/news/')
const hyxw = () =>
    import ('@/view/news/hyxw')
const gsgg = () =>
    import ('@/view/news/gsgg')
const zcfg = () =>
    import ('@/view/news/zcfg')
    // import news from '../view/news/index'
    // import hyxw from '../view/news/hyxw'
    // import gsgg from '../view/news/gsgg'
    // import zcfg from '../view/news/zcfg'
    // 合作伙伴
const hzhb = () =>
    import ('@/view/hzhb/')
    // import hzhb from '../view/hzhb/index'

// 企业风采
// import enterprise from '../view/enterprise/index'
// import life from '../view/enterprise/life'

// 社会责任
// import shzr from '../view/shzr/index'
// import kjcx from '../view/shzr/kjcx'
// 在线留言
// import zxly from '../view/zxly/index'
// import tsjy from '../view/zxly/tsjy'
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
                // 智慧供热
                {
                    path: '/zhgr',
                    name: '智慧供热',
                    component: zhgr
                },
                // 服务
                {
                    path: '/fw',
                    name: '业务平台',
                    component: fw
                },
                {
                    path: '/yrbzpt',
                    name: '用热报装',
                    component: yrbzpt
                },
                {
                    path: '/fw',
                    name: '网上营业厅',
                    component: fw
                },
                {
                    path: '/wssc',
                    name: '网上商城',
                    component: wssc
                },
                {
                    path: '/tsjy',
                    name: '投诉建议',
                    component: tsjy
                },
                {
                    path: '/fw1',
                    name: '服务1',
                    component: fw1
                },
                {
                    path: '/fw2',
                    name: '服务2',
                    component: fw2
                },
                {
                    path: '/fw3',
                    name: '服务3',
                    component: fw3
                },
                {
                    path: '/fw4',
                    name: '服务4',
                    component: fw4
                },
                {
                    path: '/fw5',
                    name: '服务5',
                    component: fw5
                },
                {
                    path: '/fw6',
                    name: '服务6',
                    component: fw6
                },
                {
                    path: '/fw7',
                    name: '服务7',
                    component: fw7
                },
                {
                    path: '/fw8',
                    name: '服务8',
                    component: fw8
                },
                {
                    path: '/fw9',
                    name: '服务9',
                    component: fw9
                },
                {
                    path: '/fw10',
                    name: '服务10',
                    component: fw10
                },
                {
                    path: '/fw11',
                    name: '服务11',
                    component: fw11
                },
                // 投资者
                {
                    path: '/tzz',
                    name: '投资者',
                    component: tzz
                },
                // 新闻资讯
                {
                    name: "新闻资讯",
                    path: "/news",
                    component: news
                },
                {
                    name: "企业新闻",
                    path: "/news",
                    component: news
                },
                {
                    name: "行业新闻",
                    path: "/hyxw",
                    component: hyxw
                },
                {
                    name: "企业公告",
                    path: "/gsgg",
                    component: gsgg
                },
                {
                    name: "政策法规",
                    path: "/zcfg",
                    component: zcfg
                },
                // 合作伙伴
                {
                    path: '/hzhb',
                    name: '合作伙伴',
                    component: hzhb
                },
                // 企业风采

                // {
                //     path: '/enterprise',
                //     name: '企业风采',
                //     component: enterprise
                // },
                // {
                //     path: '/life',
                //     name: '员工生活',
                //     component: life
                // },
                // {
                //     path: '/enterprise',
                //     name: '员工活动',
                //     component: enterprise
                // },

                // 社会责任
                // {
                //     name: "社会责任",
                //     path: "/shzr",
                //     component: shzr
                // },
                // {
                //     name: "社会公益",
                //     path: "/shzr",
                //     component: shzr
                // },
                // {
                //     name: "科技创新",
                //     path: "/kjcx",
                //     component: kjcx
                // },
                // 在线留言
                // {
                //     path: '/zxly',
                //     name: '在线留言',
                //     component: zxly
                // },
                // {
                //     path: '/tsjy',
                //     name: '投诉建议',
                //     component: tsjy
                // },

                // home模块
                {
                    path: '/home',
                    name: 'home',
                    component: home
                }
            ]
        }
    ],
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    base: '/dist/', // 加上这一行
})

export default router