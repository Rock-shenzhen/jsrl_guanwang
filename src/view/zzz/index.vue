<template>
  <div id="home">
    <div class="swiper-slide swiper-slide-visible swiper-slide-active">
      <img src="../../assets/main1.jpg" class="loop-img" />
    </div>
    <img src="../../assets/zuojiantou.png" class="zuo-img jiantou" alt="点击" />
    <img src="../../assets/youjiantou.png" class="you-img jiantou" alt="点击" />
    <div class="bt-box-outer">
      <div class="app-row bt-box-main">
        <div
          data-aos="fade-down"
          style="opacity: 0;"
          class="am-scrollspy-init am-scrollspy-inview am-animation-slide-bottom"
        >
          <span class="item">
            <a class="img-box" style="background-image: url('../../assets/3.png');">
              <img src="../../assets/33.png" style="z-index:999" />
            </a>
            <span class="t">官方微博</span>
          </span>

          <span class="item">
            <a class="img-box" style="background-image: url('../../assets/4.png);">
              <img src="../../assets/44.png" />
              <div class="code-box">
                <img src="../../assets/20200427171330.jpg" />
                <span></span>
              </div>
            </a>
            <span class="t">金盛热力公众号</span>
          </span>

          <span class="item">
            <a class="img-box" style="background-image: url('../../assets/3.png');">
              <img src="../../assets/33.png" />
            </a>
            <span class="t">抖音</span>
          </span>
        </div>
      </div>
    </div>
    <div class="bg-box today-bg-box">
      <div
        data-aos="fade-up"
        style="opacity: 0;"
        class="am-scrollspy-init am-scrollspy-inview am-animation-slide-bottom"
      >
        <div id="today-sr-swiper" class="app-row swiper-container">
          <p class="t0">头条资讯</p>
          <div
            class="swiper-wrapper"
            style="width: 1200px; height: 498px; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);"
          >
            <div
              data-index="0"
              class="swiper-slide swiper-slide-visible swiper-slide-active"
              style="width: 1200px; height: 498px;"
            >
              <img src class="td-img" />
              <div class="text-box">
                <p class="t1">头条资讯</p>
                <p onclick="clickZhiXun()" class="t2">文章标题</p>
                <p class="t3">日期</p>
                <p class="t4">
                  <span class="ellipsis">...</span>
                </p>
              </div>
            </div>
          </div>
          <div class="pagination">
            <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
          </div>
          <a onclick="clickZhiXun()" class="view-more hvr-wobble-bottom">阅读全文</a>
        </div>
      </div>
    </div>
    <div>版心</div>
    <div>版心</div>
    <div>版心</div>
    <div>版心</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#home {
  width: 100%;
  // height: 100%;
  .swiper-slide {
    cursor: pointer;
    overflow: hidden;
    background-size: 100% 100%;
    position: relative;
    width: 100%;
    height: 888px;
    .loop-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .jiantou {
    width: 50px;
    height: 50px;
    // left: auto;
    // cursor: pointer;
    position: absolute;
    top: 50%;
  }
  .zuo-img {
    left: 40px;
  }
  .you-img {
    right: 40px;
  }
  .bt-box-main {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    max-width: 1200px;
    min-width: 320px;
    // position: absolute;
    bottom: 65px;
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translateX(-50%);
    .item {
      cursor: pointer;
      margin-top: 20px;
      margin-right: 134px;
      font-size: 14px;
      text-decoration: none;
      text-align: center;
      margin: 0 auto;
      .img-box {
        position: relative;
        vertical-align: middle;
        margin-right: 10px;
        background-size: 100% 100%;
        cursor: pointer;
        border: 0;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        position: relative;
      }

      a {
        background: 0 0;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        color: #08c;
      }
      span {
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
      }

      .bt-box-main .t {
        white-space: nowrap;
        display: inline-block;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        max-width: 5em;
      }
    }
    .am-animation-slide-bottom {
      animation-name: am-slide-bottom;
      margin: 0 auto;
      // text-align: center;
    }

    // [class*=am-animation-] {
    //     animation-duration: .5s;
    //     animation-timing-function: ease-out;
    //     animation-fill-mode: both;
    // }
  }
  .today-bg-box {
    padding: 106px 0 120px 0;
    .am-animation-slide-bottom {
      animation-fill-mode: both;
      // -webkit-animation-duration: 0.5s;
      // animation-duration: 0.5s;
      /* animation-timing-function: ease-out; */
      /* -webkit-animation-fill-mode: both; */

      #today-sr-swiper {
        height: 498px;
        position: relative;
        .t0 {
          font-size: 38px;
          color: #0866b0;
          margin-bottom: 20px;
          font-weight: 700;
          display: none;
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transition-duration: 0s;
          transform: translate3d(0, 0, 0);
          transition-timing-function: ease;
          box-sizing: content-box;
          background-color: pink;
        }
        .swiper-slide {
          position: relative;
          box-sizing: border-box;
          float: left;
        }
        #today-sr-swiper .td-img {
          transition: all 0.6s;
          background-color: pink;
          height: 82%;
          padding-left: 1px;
          float: left;
          object-fit: cover;
          object-position: 50% 50%;
          width: 50%;
        }
        
      }
      .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        direction: ltr;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 1;
      }

      .app-row {
        margin-left: auto;
        margin-right: auto;
        width: 1200px;
        max-width: 1200px;
        min-width: 320px;
      }
    }
  }
  .bg-box {
    width: 100%;
    overflow: hidden;
    // background-size: 100% 100%;
    background-color: skyblue;
    position: relative;
  }
}
</style>