<template>
  <div>
    <div id="main">
      <!-- 顶部背景图轮播 -->
      <div style="position: relative; overflow: hidden;">
        <div id="main-swiper" class="swiper-container">
          <div
            class="swiper-wrapper"
            style="width: 7014px; height: 613px; transform: translate3d(-4676px, 0px, 0px); transition-duration: 0.8s;"
          >
            <div class="swiper-slide swiper-slide-duplicate" style="width: 1169px; height: 613px;">
              <img src="../../assets/main2.jpg" class="loop-img" />
            </div>
            <div class="swiper-slide" style="width: 1169px; height: 613px;">
              <img id="first-img" src="../../assets/main1.jpg" class="loop-img" />
            </div>
            <div class="swiper-slide" style="width: 1169px; height: 613px;">
              <img src="../../assets/dangjian.jpg" class="loop-img" />
            </div>
            <div class="swiper-slide" style="width: 1169px; height: 613px;">
              <img src="../../assets/yingshang.jpg" class="loop-img" />
            </div>
            <div
              class="swiper-slide swiper-slide-visible swiper-slide-active"
              style="width: 1169px; height: 613px;"
            >
              <img src="../../assets/main2.jpg" class="loop-img" />
            </div>
            <div class="swiper-slide swiper-slide-duplicate" style="width: 1169px; height: 613px;">
              <img id="first-img" src="../../assets/main1.jpg" class="loop-img" />
              <div class="app-row">
                <p data-aos="fade-right" class="t1">发展清洁能源</p>
                <p data-aos="fade-right" class="t1">燃点绿色品质生活</p>
                <button
                  data-aos="fade-right"
                  onclick="location.assign(&quot;views/aboutSr/shenranjianjie.html&quot;)"
                  class="bt"
                >
                  走进深燃
                  <i class="iconfont iconxiala"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="pagination">
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
          </div>
          <i onclick="mainSwiper.swipePrev()" class="iconfont iconxiangzuo"></i>
          <i onclick="mainSwiper.swipeNext()" class="iconfont iconxiangyou"></i>
        </div>
        <div class="bt-box-outer">
          <div class="app-row bt-box-main">
            <div data-aos="fade-down" style="opacity: 0;" class="am-scrollspy-init">
            
              <!--<span class="item">
                <a
                  class="img-box"
                  style="background-image: url(&quot;static/images/header/3.png&quot;);"
                >
                  <img src="static/images/header/33.png" />
                </a>
                <span class="t">官方微博</span>
              </span>
              <span class="item">
                <a
                  class="img-box"
                  style="background-image: url(&quot;static/images/header/4.png&quot;);"
                >
                  <img src="static/images/header/44.png" />
                  <div class="code-box">
                    <img src="../../assets/4439c452439a16c15f1202.jpg" />
                    <span></span>
                  </div>
                </a>
                <span class="t">深圳燃气公众号</span>
              </span>
              <span class="item">
                <a
                  class="img-box"
                  style="background-image: url(&quot;static/images/header/5.png&quot;);"
                >
                  <img src="../../assets/dingqi2.png" />
                  <div class="code-box">
                    <img src="../../assets/4439c452439a16c166cd04.jpg" />
                    <span></span>
                  </div>
                </a>
                <span class="t">深燃石油气公众号</span>
              </span>-->
            </div>
          </div>
        </div>
        <div style="background: rgb(244, 246, 251); display: none;">
          <div id="notice-swiper" class="app-row swiper-container">
            <div class="swiper-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#main, body, html {
    min-width: 320px;
}
</style>
