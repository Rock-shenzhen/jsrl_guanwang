<template>
  <div id="topBar">
    <div class="warp">
      <div class="logo">
        <img src alt />
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
        {
          name: "关于我们",
          to: "/we",
          children: [
            { name: "企业文化", to: "/culture" },
            { name: "公司简介", to: "/we" },
            { name: "发展历程", to: "/history" },
            { name: "组织架构", to: "/organization" },
            { name: "高管团队", to: "/leadership" },
            { name: "金盛人", to: "/member" }
          ]
        },
        {
          name: "企业风采",
          to: "/enterprise",
          children: [
            { name: "员工生活", to: "/life" },
            { name: "企业活动", to: "/enterprise" }
          ]
        },
        {
          name: "新闻公告",
          to: "/news",
          children: [
            { name: "公司新闻", to: "/news" },
            { name: "行业新闻", to: "/hyxw" },
            { name: "公司公告", to: "/gsgg" },
            { name: "政策法规", to: "/zcfg" }
          ]
        },
        { name: "工程动态", to: "/gcdt" },
        { name: "招聘信息", to: "/job" },
        { name: "在线留言", to: "/zxly" }
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
      if (logo.offsetTop === 0 && nav.offsetLeft === 500) {
        logo.style.top = "-100px";
        nav.style.left = "650px";
      }

      (function test() {
        let weizhi = logo.offsetTop;
        let weizhi1 = nav.offsetLeft;

        weizhi = Math.ceil(weizhi - weizhi / 20);
        weizhi1 = Math.floor(weizhi1 - (weizhi1 - 500) / 20);

        logo.style.top = weizhi + "px";
        nav.style.left = weizhi1 + "px";
        if (weizhi > 0) {
          logo.style.top = "0px";
        }
        if (weizhi1 < 500) {
          nav.style.left = "500px";
        }
        if (weizhi < 0 || weizhi1 > 500) {
          window.requestAnimationFrame(test);
        }
      })();
    }
  }
};
</script>

<style lang="less" scoped>
#topBar {
  // background-color: #f0f;
  .warp {
    margin: 0 auto;
    position: relative;
    width: 1280px;
    height: 110px;
    .logo {
      position: absolute;
      top: -100px;
      left: 0;
      width: 300px;
      height: 100px;
      background-color: #ff0;
    }
    .nav {
      position: absolute;
      left: 650px;
      top: 10;
      width: 760px;
      // background-color: #0ff;
      > ul {
        height: 100%;
        padding-top: 55px;
        li {
          position: relative;
          float: left;
          padding: 0 12px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          &:hover > a {
            color: #dcc07f;
          }
          .sanjiaoxing {
            position: absolute;
            bottom: 7px;
            left: 50%;
            width: 6px;
            height: 6px;
            margin-left: -3px;
            background: #dcc07f;
            transform: rotate(45deg);
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          .select {
            position: absolute;
            width: 100%;
            top: 40px;
            left: 0px;
            z-index: 9999;
            padding: 10px 0;
            color: #fff;
            background-color: #dcc07f;
            li {
              width: 100%;
              height: 40px;
              line-height: 40px;
              padding: 0;
              &:hover {
                background-color: #fff;
                a {
                  color: #dcc07f;
                }
              }
              a {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>