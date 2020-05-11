<template>
  <div id="topBar">
    <div class="warp">
      <div class="logo">
        <img src="../assets/logo_20190731102143.png" alt />
      </div>
      <div class="nav">
        <ul>
          <li
            v-for="(nav, i) in navBar"
            :key="i"
            @mouseenter="current = i"
            @mouseleave="current = -1"
          >
            <router-link :to="nav.to">{{nav.name}}</router-link>
            <div v-if="nav.children">
              <i class="sanjiaoxing" v-show="current === i"></i>
              <ul class="select" v-show="current === i">
                <li v-for="(son, j) in nav.children" :key="j">
                  <router-link :to="son.to">{{son.name}}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: -1,
      navBar: [
        { name: "网站首页", to: "/home" },
        // 我们
        {
          name: "我们",
          to: "/we",
          children: [
            { name: "公司简介", to: "/we" },
            { name: "企业文化", to: "/culture" },
            { name: "发展历程", to: "/history" },
            { name: "组织架构", to: "/organization" },
            { name: "高管团队", to: "/leadership" },
            { name: "金盛人", to: "/member" },
            { name: "团队建设", to: "/tdjs" },
            { name: "人才招聘", to: "/job" }
          ]
        },
        // 智慧供热
        {
          name: "智慧供热",
          to: "/zhgr",
          // children: [{ name: "投诉建议", to: "/tsjy" }]
        },
        // 服务
        {
          name: "服务",
          to: "/fw",
          children: [
            { name: "网上营业厅", to: "/fw" },
            { name: "用热报装", to: "/yrbzpt" },
            { name: "网上商城", to: "/wssc" },
            { name: "投诉建议", to: "/tsjy" }
          ]
        },
        // 投资者
        {
          name: "投资者",
          to: "/tzz",
          // children: [{ name: "投诉建议", to: "/tsjy" }]
        },
        // 新闻资讯
        {
          name: "新闻资讯",
          to: "/news",
          children: [
            { name: "企业新闻", to: "/news" },
            { name: "行业新闻", to: "/hyxw" },
            { name: "企业公告", to: "/gsgg" },
            { name: "政策法规", to: "/zcfg" }
          ]
        },
        // 合作伙伴
        {
          name: "合作伙伴",
          to: "/hzhb",
          // children: [{ name: "投诉建议", to: "/tsjy" }]
        }
        // {
        //   name: "企业风采",
        //   to: "/enterprise",
        //   children: [
        //     { name: "企业活动", to: "/enterprise" },
        //     { name: "员工生活", to: "/life" }
        //   ]
        // },

        // {
        //   name: "社会责任",
        //   to: "/shzr",
        //   children: [
        //     { name: "社会公益", to: "/shzr" },
        //     { name: "科技创新", to: "/kjcx" }
        //   ]
        // }
      ]
    };
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      let logo = document.getElementsByClassName("logo")[0];
      let nav = document.getElementsByClassName("nav")[0];
      if (logo.offsetTop === 0 && nav.offsetLeft === 600) {
        logo.style.top = "-100px";
        nav.style.left = "750px";
      }

      (function test() {
        let weizhi = logo.offsetTop;
        let weizhi1 = nav.offsetLeft;

        weizhi = Math.ceil(weizhi - weizhi / 20);
        weizhi1 = Math.floor(weizhi1 - (weizhi1 - 600) / 20);

        logo.style.top = weizhi + "px";
        nav.style.left = weizhi1 + "px";
        if (weizhi > 0) {
          logo.style.top = "0px";
        }
        if (weizhi1 < 600) {
          nav.style.left = "500px";
        }
        if (weizhi < 0 || weizhi1 > 600) {
          window.requestAnimationFrame(test);
        }
      })();
    }
  }
};
</script>

<style lang="less" scoped>
#topBar {
  position: relative;
  z-index: 999;
  // background-color: #2e3092;
  .warp {
    margin: 0 auto;
    position: relative;
    width: 1280px;
    height: 110px;
    .logo {
      position: absolute;
      left: 0;
      top: -100px;
      // bottom: 0px;

      // background-color: #2e3092;
      img {
        width: 100%;
        margin-top: 30px;
        // bottom: 0;
      }
    }
    .nav {
      position: absolute;
      // margin-left: 100px;
      top: 10;
      margin-top: -10px;
      width: 760px;
      left: 760px;
      // background-color: #0ff;
      > ul {
        height: 100%;
        padding-top: 55px;
        li {
          // border-radius: 8px;
          // margin-right: 10px;
          position: relative;
          float: left;
          width: 80px;
          padding: 0 12px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          // &:hover{
          //   border: 3px solid blue;

          // }
          &:hover > a {
            color: #bbbbbb;
          }
          .sanjiaoxing {
            position: absolute;
            bottom: 9px;
            left: 40%;
            top: 80%;

            transform: rotate(180deg);

            display: block;
            margin: auto;
            height: 0;
            width: 0;
            border-top: 10px solid #fff;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
            color: #fff;
          }
          .select {
            position: absolute;
            border-radius: 6px;
            width: 100%;
            top: 46px;
            left: 0px;
            z-index: 9999;
            padding: 10px 0;
            color: black;
            background-color: #fff;
            li {
              width: 100%;
              height: 40px;
              line-height: 40px;
              padding: 0;
              &:hover {
                background-color: #fff;
                a {
                  color: #436eee;
                }
              }
              a {
                color: black;
              }
            }
          }
        }
      }
    }
  }
}
</style>