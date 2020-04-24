<template>
  <div id="topBar">
    <div class="warp">
      <div class="logo">
        <img src alt />
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/we">我们</router-link>
            <dl class="select">
              <dd>
                <router-link to="/index"></router-link>
              </dd>
              <dd>
                <router-link to="/member" class="fnt_16">金盛人</router-link>
              </dd>
            </dl>
          </li>
          <li>业务</li>
          <li>投资者中心</li>
          <li>可持续发展</li>
          <li>党建创新</li>
          <li>
            <router-link to="/member">传媒视点</router-link>
          </li>
          <li class="el-icon-search"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      let logo = document.getElementsByClassName("logo")[0];
      let nav = document.getElementsByClassName("nav")[0];

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
  background-color: #f0f;
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
      // width: 700px;
      // height: 100px;
      background-color: #0ff;
      ul {
        // display: block;
        height: 100%;
        padding-top: 40px;
        list-style-type: disc;
        // margin-block-start: 1em;
        // margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        li {
          position: relative;
          float: left;
          padding: 5px 20px;
          .fnt_16 {
            font-size: 16px;
          }
          &:hover .select {
            display: block;
          }
          .select {
            position: absolute;
            top: 44px;
            left: 0px;
            z-index: 9999;
            padding: 10px 0 10px;
            display: none;
            // width: 100%;
            // height: 100%;
            color: #fff;
            background-color: #dcc07f;
            &:hover {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>