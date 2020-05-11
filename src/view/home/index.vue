<template>
  <div>
    <div id="main">
      <!-- 动画模块开始 -->
      <div style="position: relative;overflow: hidden;">
        <div id="main-swiper" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <video
                width="100%"
                id="video"
                autoplay
                loop
                preload
                muted
                x-webkit-airplay="true"
                airplay="allow"
                webkit-playsinline="true"
                playsinline="true"
                class="loop-img"
              >
                <source src="http://www.ctitech.net/dist/syxcsp.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <!-- <div style="background: rgb(244, 246, 251); display: none;">
          <div id="notice-swiper" class="app-row swiper-container">
            <div class="swiper-wrapper"></div>
          </div>
        </div>-->
      </div>
      <!-- 动画模块结束 -->
      <!-- 企业宣言开始 -->
      <div class="descript_area">
        <p class="txt">
          金盛主要从事热力产品的生产销售，水电器材及相关设备、建材、五金百货、机电设备的销售，压力管道的安装，压力管道的设计。
          <span class="pc"></span>秉承“供热暖身，服务暖心”的经营理念
          <!--<span class="m"></span>助力企业数字化升级。 -->
          <span class="pc"></span>以质量求生存；以服务求发展；向管理要效益；为社会做贡献。
        </p>
      </div>
      <!-- 企业宣言结束-->
      <!--我们模块开始 -->
      <div class="details_area">
        <div class="details_con">
          <ul class="detail_list">
            <li>
              <router-link to="/we" class="sdmk">
                <p>公司简介</p>
                <img src="../../assets/sdmk1.jpg" alt="公司简介" />
              </router-link>
            </li>
            <li>
              <router-link to="/culture" class="sdmk">
                <p>企业文化</p>
                <img src="../../assets/sdmk2.jpg" alt="企业文化" />
              </router-link>
            </li>
            <li class="last">
              <router-link to="/tdjs" class="sdmk">
                <p>团队建设</p>
                <img src="../../assets/sdmk3.jpg" alt="团队建设" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--我们模块结束 -->
      <!-- 业务模块开始 -->
      <div class="link_area">
        <div class="link_hook">
          <div class="link_tab">
            <ul class="tab_list">
              <li class="list_item_1 current" data-num="1">
                <router-link to="/fw" class="block-link">
                  <h3 class="tit">网上营业厅</h3>
                  <p class="txt">让生活更便捷</p>
                  <i class="icon icon_arrow_r"></i>
                </router-link>
              </li>
              <li class="list_item_2" data-num="2">
                <router-link class="block-link" to="/yrbzpt">
                  <h3 class="tit">用热报装</h3>
                  <p class="txt">让服务更便捷</p>
                  <i class="icon icon_arrow_r"></i>
                </router-link>
              </li>
              <li class="list_item_3" data-num="3">
                <router-link class="block-link" to="/wssc">
                  <h3 class="tit">网上商城</h3>
                  <p class="txt">让客户更便捷</p>
                  <i class="icon icon_arrow_r"></i>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="link_content">
            <div class="con con_1" style="display: block;">
              <ul class="link_con_list">
                <li class="item_1">
                  <router-link to="/fw1">
                    <div class="script">
                      <h4 class="tit">服务1</h4>
                      <p class="txt">说点什么好呢</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_2">
                  <router-link to="/fw2">
                    <div class="script">
                      <h4 class="tit">服务2</h4>
                      <p class="txt">我也不知道</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_3">
                  <router-link to="/fw3">
                    <div class="script">
                      <h4 class="tit">服务3</h4>
                      <p class="txt">你去问问她</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_4">
                  <router-link to="/fw4">
                    <div class="script">
                      <h4 class="tit">服务4</h4>
                      <p class="txt">她不告诉我</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="con con_2" style="display: none;">
              <ul class="link_con_list">
                <li class="item_1">
                  <router-link to="/fw5">
                    <div class="script">
                      <h4 class="tit">服务5</h4>
                      <p class="txt">早上好</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_2">
                  <router-link to="/fw6">
                    <div class="script">
                      <h4 class="tit">服务6</h4>
                      <p class="txt">中午好</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_3">
                  <router-link to="/fw7">
                    <div class="script">
                      <h4 class="tit">服务7</h4>
                      <p class="txt">
                        晚上好
                        <br />我要加班了~~~
                      </p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="con con_3" style="display: none;">
              <ul class="link_con_list">
                <li class="item_1">
                  <router-link to="/fw8">
                    <div class="script">
                      <h4 class="tit">服务8</h4>
                      <p class="txt">春</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_2">
                  <router-link to="/fw9">
                    <div class="script">
                      <h4 class="tit">服务9</h4>
                      <p class="txt">夏</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_3">
                  <router-link to="/fw10">
                    <div class="script">
                      <h4 class="tit">服务10</h4>
                      <p class="txt">秋</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
                <li class="item_4">
                  <router-link to="/fw11">
                    <div class="script">
                      <h4 class="tit">服务11</h4>
                      <p class="txt">深圳没有冬天~</p>
                      <i class="icon icon_arrow_r"></i>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 业务模块结束 -->
      <!--新闻模块开始 -->
      <div class="resp_area">
        <div class="resp_details">
          <h3 class="tit">
            最新
            <br />新闻资讯
          </h3>
          <p class="txt">聚合微小善行，以科技让世界更美好</p>
          <router-link to="/news">
            <i class="icon icon_arrow_r"></i>
          </router-link>
        </div>
        <div class="public_welfare">
          <div class="slide_area">
            <ul class="slide_list">
              <li class>
                <router-link to="/hyxw">
                  <h4 class="tit">全球战疫 一起行动</h4>
                  <p class="txt">在新冠肺炎疫情之战中，腾讯秉持科技向善，以互联网科技的力量，通过我们的技术和产品为全球战疫提供支持。</p>
                  <div class="img img0"></div>
                  <span class="shadow_bg"></span>
                </router-link>
              </li>
              <li class>
                <h4 class="tit">99 公益日</h4>
                <p class="txt">每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。</p>
                <div class="img img1"></div>
                <span class="shadow_bg"></span>
              </li>
              <li class="active">
                <h4 class="tit">长城保护项目</h4>
                <p class="txt">公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。</p>
                <div class="img img2"></div>
                <span class="shadow_bg"></span>
              </li>
              <li class>
                <h4 class="tit">金盛为城</h4>
                <p class="txt">根据城市需求供暖量场景，打造云数据平台的“城市服务中心”。</p>
                <div class="img img3"></div>
                <span class="shadow_bg"></span>
              </li>
            </ul>
            <i class="icon_arrow icon_arrow_l"></i>
            <i class="icon_arrow icon_arrow_r"></i>
          </div>
          <i class="hook_tri"></i>
        </div>
      </div>
      <!--新闻模块结束 -->

      <!--智慧供热模块开始 -->
      <div class="develop_area">
        <div class="develop_con">
          <div class="develop_details">
            <h3 class="tit">
              智慧
              <br />供热与供暖
            </h3>
            <p class="txt">可持续发展集中供热</p>
            <router-link to="/zhgr">
              <i class="icon icon_arrow_r"></i>
            </router-link>
          </div>
        </div>
        <div class="slide_area dev_bg">
          <ul class="slide_list">
            <li class="li1"></li>
            <li class="li2"></li>
            <li class="li3 active"></li>
          </ul>
          <div class="slide-tab">
            <div class="li"></div>
            <div class="li"></div>
            <div class="li active"></div>
          </div>
        </div>
      </div>
      <!--智慧供热模块结束 -->
    </div>
  </div>
</template>

<script>
 import $ from "jquery";
export default {
  mounted() {
    this.hdmk();
    this.ygdhz();
    this.rcfz();
  },
  methods: {
    hdmk() {
      $(".link_area .link_hook .link_tab .tab_list li").on(
        "mouseenter",
        function() {
          if (!$(this).hasClass("current")) {
            $(".link_area .link_hook .tab_list li").removeClass("current");
            $(this).addClass("current");
            $(".link_area .link_hook .link_content .con").hide();
            $(
              ".link_area .link_hook .link_content .con_" + $(this).data("num")
            ).fadeIn();
          }
        }
      );
    },
    ygdhz() {
      var resp_area_banner_time;
      var resp_area_index = 0;
      var resp_area_width = $(".resp_area .slide_area").width();
      var resp_area_len = $(".resp_area .slide_list li").length;
      function resp_area_banner(l) {
        if (l) {
          resp_area_index--;
          resp_area_index =
            resp_area_index < 0 ? resp_area_len - 1 : resp_area_index;
        } else {
          resp_area_index++;
          resp_area_index =
            resp_area_index < resp_area_len ? resp_area_index : 0;
        }

        $(".resp_area .slide_list li").removeClass("active");
        $(".resp_area .slide_list li")
          .eq(resp_area_index)
          .addClass("active");
      }
      var resp_area_banner_time = setInterval(resp_area_banner, 4000);

      $(".resp_area .slide_area .icon_arrow").on("click", function() {
        clearInterval(resp_area_banner_time);
        if ($(this).hasClass("icon_arrow_l")) {
          resp_area_banner(1);
        } else {
          resp_area_banner();
        }
        resp_area_banner_time = setInterval(resp_area_banner, 4000);
      });
    },
    rcfz() {
      var develop_area_banner_time;
      var develop_area_index = 0;
      var develop_area_width = $(".develop_area .slide_area").width();
      var develop_area_len = $(".develop_area .slide_list li").length;
      function develop_area_banner(l) {
        if (l != undefined) {
          develop_area_index = l;
        } else {
          develop_area_index++;
        }
        develop_area_index =
          develop_area_index < develop_area_len ? develop_area_index : 0;
        $(".develop_area .slide_list li").removeClass("active");
        $(".develop_area .slide_list li")
          .eq(develop_area_index)
          .addClass("active");
        $(".develop_area .slide-tab .li").removeClass("active");
        $(".develop_area .slide-tab .li")
          .eq(develop_area_index)
          .addClass("active");
      }
      var develop_area_banner_time = setInterval(develop_area_banner, 5000);

      $(".develop_area .slide-tab .li").on("click", function() {
        clearInterval(develop_area_banner_time);
        develop_area_banner($(this).index());
        develop_area_banner_time = setInterval(develop_area_banner, 4000);
      });

      $(".back_to_top").on("click", function() {
        $("html , body").animate({ scrollTop: 0 }, "slow");
      });
    }
  }
};
</script>
<style lang="less">
#main {
  min-width: 320px;
  width: 100%;
  // 视频模块开始
  #main-swiper {
    // top: -50px;
    position: relative;
    min-height: 400px;
    .swiper-wrapper {
      position: relative;
      width: 100%;
      // transition-property: transform, left, top, -webkit-transform;
      // transition-timing-function: ease;
      box-sizing: content-box;
      .swiper-slide {
        cursor: pointer;
        overflow: hidden;
        background-size: 100% 100%;
        position: relative;
        width: 100%;
        height: 940px;
        .loop-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  // 视频模块结束

  // 企业宣言模块开始
  .descript_area {
    display: block;
    width: 100%;
    opacity: 0.5;
    .txt {
      font-size: 20px;
      text-align: center;
      color: #5f6464;
      font-weight: bold;
      line-height: 54px;
      padding: 105px 0 74px;
      .pc {
        display: block;
      }
    }
  }
  // 企业宣言模块结束
  // 我们模块开始
  .details_area {
    display: block;
    width: 100%;
    margin-bottom: 84px;
    .details_con {
      display: block;
      width: 1240px;
      margin: 0px auto;
      height: 250px;
      .detail_list {
        display: block;
        height: 250px;
        li {
          display: inline-block;
          float: left;
          height: 100%;
          width: 400px;
          text-align: center;
          margin-right: 10px;
          position: relative;
          overflow: hidden;
          .sdmk {
            display: block;
            height: 100%;
            width: 100%;
            &::after {
              display: block;
              content: "";
              height: 100%;
              width: 100%;
              background: rgba(0, 82, 217, 0.7);
              position: absolute;
              left: 0px;
              top: 0px;
              z-index: 2;
              opacity: 0;
              transition: opacity 0.3s ease-out;
            }
            &:hover::after {
              opacity: 1;
              transform: scale(1);
            }
            p {
              display: block;
              float: left;
              font-size: 30px;
              height: 40px;
              text-align: center;
              position: absolute;
              left: 50%;
              top: 50%;
              margin-top: -20px;
              z-index: 3;
              color: #fff;
              border-bottom: 1px solid rgba(255, 255, 255, 0);
              transform: translate(-50%, 0);
              padding-bottom: 3px;
              transition: border-bottom 0.3s ease-out;
              font-family: "TencentSansw7";
              padding-bottom: 5px;
              -webkit-transition: width 1s linear;
            }
            img {
              display: block;
              height: 100%;
              width: 100%;
              position: absolute;
              left: 0px;
              top: 0px;
              z-index: 1;
              transform: scale(1);
              transition: transform 0.3s ease-out;
            }
          }
        }
        .current {
          opacity: 1;
        }
      }
    }
  }
  // 我们模块结束
  // 业务模块开始
  .link_area {
    display: block;
    width: 100%;
    height: 780px;
    background: #1b1f25;
    margin-bottom: 84px;
    .link_hook {
      display: block;
      width: 1440px;
      height: 780px;
      margin: 0px auto;
      .link_tab {
        display: block;
        width: 36%;
        height: 100%;
        float: left;
        .tab_list {
          display: block;
          height: 100%;
          li {
            display: block;
            height: 33.3%;
            opacity: 0.4;
            position: relative;
            .block-link {
              display: block;
              height: 100%;
              width: 100%;
              .tit {
                margin-left: -28%;
                display: block;
                font-size: 30px;
                color: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -4.9%;
                transition: margin-left 0.3s ease-out;
                font-family: "TencentSansw7";
                right: 32px;
                &::after {
                  display: block;
                  content: "";
                  height: 70px;
                  width: 6px;
                  background: #1e52d8;
                  position: absolute;
                  left: 50%;
                  margin-left: -62%;
                  top: 18%;
                  opacity: 0;
                  transform: translate(-20px, 0px);
                  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
                }
                &:hover::after {
                  opacity: 1;
                  transform: translate(0px, 0px);
                }
              }
              .txt {
                display: block;
                font-size: 16px;
                color: #fff;
                position: absolute;
                left: 50%;
                margin-left: -28%;
                top: 50%;
                margin-top: 5.8%;
                transition: margin-left 0.3s ease-out;
                font-family: "TencentSansw3";
                right: 30px;
              }
              .icon {
                display: block;
                height: 16px;
                width: 54px;
                background: url("../../assets/icon_arrow_r.png") no-repeat 0 0;
                position: absolute;
                left: 50%;
                opacity: 1;
                margin-left: -27.5%;
                top: 50%;
                margin-top: 14.8%;
                transition: margin-left 0.3s ease-out, opacity 0.3s ease-out;
                background-size: 100% 100%;
              }
            }
          }
          .list_item_2 {
            .icon {
              margin-top: 9%;
            }
            .tit {
              margin-top: -10.9%;
            }
            .txt {
              margin-top: -0.2%;
            }
          }
          .list_item_3 {
            .icon {
              margin-top: 3.8%;
            }
            .tit {
              margin-top: -16.3%;
            }
            .txt {
              margin-top: -6.2%;
            }
          }
          .current {
            opacity: 1;
            .tit {
              margin-left: -28%;
              &::after {
                opacity: 1;
                transform: translate(0px, 0px);
              }
            }
            .txt {
              margin-left: -28%;
            }
            .icon {
              opacity: 1;
              margin-left: -27.5%;
            }
          }
        }
      }
      .link_content {
        display: block;
        width: 64%;
        height: 780px;
        margin-left: 0;
        overflow: hidden;
        .con {
          display: none;
          width: 100%;
          height: 100%;
          .link_con_list {
            display: block;
            width: 100%;
            height: 100%;
            li {
              display: block;
              width: 50%;
              float: left;
              height: 50%;
              background-size: cover;
              overflow: hidden;
              a {
                display: block;
                width: 100%;
                height: 100%;
                position: relative;
                &:hover .script .tit {
                  margin-top: 59px;
                }
                &:hover .script .txt {
                  opacity: 1;
                  transform: translate(0px, 0);
                }
                &:hover .script .icon {
                  animation: a_arrow_r 0.2s linear forwards;
                  opacity: 1;
                }
                @keyframes a_arrow_r {
                  0% {
                    opacity: 0;
                    right: 71px;
                  }
                  100% {
                    opacity: 1;
                    right: 51px;
                  }
                }
                .script {
                  display: block;
                  width: 100%;
                  height: 50%;
                  position: absolute;
                  left: 0px;
                  bottom: 0px;
                  background: -webkit-linear-gradient(
                    bottom,
                    rgba(0, 0, 0, 0.4),
                    rgba(0, 0, 0, 0)
                  );
                  .tit {
                    display: block;
                    margin-left: 43px;
                    margin-top: 119px;
                    font-size: 20px;
                    color: #fff;
                    transition: margin-top 0.3s ease-out;
                    font-family: "TencentSansw7";
                  }
                  .txt {
                    display: block;
                    margin-left: 43px;
                    margin-top: 9px;
                    line-height: 1.8;
                    font-size: 14px;
                    color: #fff;
                    opacity: 0;
                    transform: translate(0px, 15px);
                    transition: opacity 0.3s ease-out;
                    font-family: "TencentSansw3";
                    margin-right: 43px;
                  }
                  .icon {
                    display: block;
                    height: 14px;
                    width: 31px;
                    background: url("../../assets/icon_arrow_r_s.png") no-repeat
                      0 0;
                    position: absolute;
                    right: 71px;
                    top: 71px;
                    opacity: 0;
                    transition: all 0.3s ease-out;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }
        }
        .con_1 {
          display: block;

          .item_1 {
            background-image: url("../../assets/index_link_1_1.jpg");
          }
          .item_2 {
            background-image: url("../../assets/index_link_1_2.jpg");
          }
          .item_3 {
            background-image: url("../../assets/index_link_1_3.jpg");
          }
          .item_4 {
            background-image: url("../../assets/index_link_1_4.jpg");
          }
        }
        .con_2 {
          // display: block;
          .link_con_list {
            .item_1 {
              background-image: url("../../assets/index_link_2_1.jpg");
            }
            .item_2 {
              background-image: url("../../assets/index_link_2_2.jpg");
            }
            .item_3 {
              background-image: url("../../assets/index_link_2_3.jpg");
              width: 100%;
            }
          }
        }
        .con_3 {
          // display: block;
          .link_con_list {
            .item_1 {
              background-image: url("../../assets/index_link_3_1.jpg");
            }
            .item_2 {
              background-image: url("../../assets/index_link_3_2.jpg");
            }
            .item_3 {
              background-image: url("../../assets/index_link_3_3.jpg");
            }
            .item_4 {
              background-image: url("../../assets/index_link_3_4.jpg");
            }
          }
        }
      }
    }
  }
  // 业务模块结束

  // 新闻模块开始
  .resp_area {
    display: block;
    width: 1280px;
    height: 620px;
    margin: 0px auto 84px; /*background:url(../../assets/bg_4.png) no-repeat 0 0; background-size: contain;*/
    position: relative;
    .resp_details {
      display: block;
      width: 450px;
      position: absolute;
      left: 50%;
      margin-left: 68px;
      top: 50%;
      margin-top: -8.3%;
      .tit {
        display: block;
        color: #2a2e2e;
        width: 450px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 36px;
        margin-bottom: 20px;
        font-family: "TencentSansw7";
      }

      .txt {
        display: block;
        color: #5f6464;
        width: 450px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 20px;
        margin-bottom: 40px;
        font-family: "TencentSansw3";
      }
      a {
        .icon_arrow_r {
          display: block;
          width: 38px;
          height: 16px;
          background: url("../../assets/icon_arrow_r_dark.png") no-repeat 0 0;
          margin-left: 3px;
          background-size: 100% 100%;
        }
      }
    }

    .public_welfare {
      display: block;
      width: 627px;
      height: 620px;
      position: absolute;
      left: 0px;
      top: 0px;
      .slide_area {
        display: block;
        width: 627px;
        height: 620px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
        .slide_list {
          display: block;
          width: 100%;
          height: 620px;
          position: relative;
          li {
            width: 627px;
            height: 620px;
            color: #fff;
            position: absolute;
            opacity: 0;
            transition: opacity 0.3s linear;
            -moz-transition: opacity 0.3s linear;
            -ms-transition: opacity 0.3s linear;
            -o-transition: opacity 0.3s linear;
            -webkit-transition: opacity 0.3s linear;
            left: 0;
            top: 1;
            a {
              display: block;
              color: #fff;
              position: absolute;
              width: 100%;
              height: 100%;
            }
            .tit {
              display: block;
              width: 500px;
              font-size: 24px;
              position: absolute;
              left: 53px;
              bottom: 107px;
              z-index: 1;
              font-family: "TencentSansw7";
            }
            .txt {
              display: block;
              width: 500px;
              font-size: 16px;
              position: absolute;
              left: 52px;
              bottom: 41px;
              line-height: 29px;
              z-index: 1;
              font-family: "TencentSansw3";
            }
            .img {
              display: block;
              width: 627px;
              height: 620px;
              position: absolute;
              left: 0px;
              top: 0px;
            }
            .img0 {
              background: url("../../assets/index_resp_bg0.png") no-repeat
                center center;
              background-size: cover;
            }
            .img1 {
              background: url("../../assets/index_resp_bg1.jpg") no-repeat
                center center;
              background-size: cover;
            }
            .img2 {
              background: url("../../assets/index_resp_bg2.jpg") no-repeat
                center center;
              background-size: cover;
            }
            .img3 {
              background: url("../../assets/index_resp_bg3.jpg") no-repeat
                center center;
              background-size: cover;
            }
            .shadow_bg {
              display: block;
              width: 100%;
              height: 30%;
              position: absolute;
              left: 0px;
              bottom: 0px;
              background: -webkit-linear-gradient(
                bottom,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0)
              );
              pointer-events: none;
            }
          }
          .active {
            opacity: 1;
          }
        }
        .icon_arrow {
          display: block;
          width: 10px;
          height: 16px;
          background: url(../../assets/sli-left-icon.png) no-repeat center;
          position: absolute;
          right: 144px;
          bottom: 116px;
          margin-top: -30px;
          z-index: 5;
          background-size: 10px 16px;
          padding: 5px;
          cursor: pointer;
          display: none\9;
          opacity: 0;
          transition: opacity 0.2s linear;
        }
        .icon_arrow_r {
          left: auto;
          right: 98px;
          background: url("../../assets/sli-right-icon.png") no-repeat center;
          background-size: 10px 16px;
        }
        &:hover .icon_arrow {
          display: block;
          opacity: 1;
        }
      }
      .hook_tri {
        display: block;
        width: 43px;
        height: 620px;
        background: url("../../assets/i_tri.png") no-repeat 0 0;
        background-size: contain;
        position: absolute;
        right: 0px;
        bottom: 0px;
      }
    }
  }
  // 新闻模块结束

  // 智慧供热模块开始

  .develop_area {
    display: block;
    width: 100%;
    margin: 0px auto;
    position: relative;
    .develop_con {
      width: 1240px;
      margin: 0 auto;
      .develop_details {
        display: block;
        width: 450px;
        position: absolute;
        left: 6.6%;
        top: 16%;
        z-index: 1;
        .tit {
          display: block;
          color: #2a2e2e;
          width: 450px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 36px;
          margin-bottom: 20px;
          font-family: "TencentSansw7";
        }
        .txt {
          display: block;
          color: #5f6464;
          width: 450px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 20px;
          margin-bottom: 40px;
          font-family: "TencentSansw3";
        }
        a {
          .icon_arrow_r {
            display: block;
            width: 38px;
            height: 16px;
            background: url("../../assets/icon_arrow_r_dark.png") no-repeat 0 0;
            margin-left: 3px;
            background-size: 100% 100%;
          }
        }
      }
    }
    .slide_area {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .slide_list {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        height: 1040px;
        li {
          display: inline-block;
          width: 100%;
          height: 1040px;
          float: left;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transition: 0.3s linear;
          -moz-transition: opacity 0.3s linear;
          -ms-transition: opacity 0.3s linear;
          -o-transition: opacity 0.3s linear;
          -webkit-transition: opacity 0.3s linear;
          position: absolute;
          left: 0;
          top: 0;
        }
        .active {
          opacity: 1;
        }

        .li1 {
          background: url("../../assets/index_develop_bg1.jpg") no-repeat top;
          background-size: cover;
        }

        .li2 {
          background: url("../../assets/index_develop_bg2.jpg") no-repeat top;
          background-size: cover;
        }

        .li3 {
          background: url("../../assets/index_develop_bg3.jpg") no-repeat top;
          background-size: cover;
        }
        @keyframes offset {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 384;
          }
        }
      }
      .slide-tab {
        position: absolute;
        right: 32px;
        bottom: 24px;
        .li {
          float: left;
          margin-left: 8px;
          width: 8px;
          height: 8px;
          background: #fff;
          transition: width 0.3s linear;
          -moz-transition: width 0.3s linear;
          -ms-transition: width 0.3s linear;
          -o-transition: width 0.3s linear;
          -webkit-transition: width 0.3s linear;
          cursor: pointer;
        }
        .active {
          width: 24px;
          background: #0052d9;
        }
      }
    }
  }

  // 智慧供热模块结束
}
</style>
