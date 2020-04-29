<template>
  <div>
    <div id="main">
      <!-- 顶部背景图轮播 -->
      <div style="position: relative;overflow: hidden;">
        <div id="main-swiper" class="swiper-container">
          <div class="swiper-wrapper">
            <!--style="width: 7014px; height: 613px; transform: translate3d(-4676px, 0px, 0px); transition-duration: 0.8s;"   -->
            <div class="swiper-slide">
              <img id="first-img" src="../../assets/main1.jpg" class="loop-img" />
            </div>
            <!--<div class="swiper-slide swiper-slide-duplicate" style="width: 1169px; height: 613px;">
              <img src="../../assets/main2.jpg" class="loop-img" />
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
            </div>-->
            <!--<div class="swiper-slide swiper-slide-duplicate" style="width: 1169px; height: 613px;">
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
            </div>-->
          </div>
          <div class="pagination">
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
          </div>
          <!--<i onclick="mainSwiper.swipePrev()" class="iconfont iconxiangzuo"></i>
          <i onclick="mainSwiper.swipeNext()" class="iconfont iconxiangyou"></i>-->
          <img src="../../assets/zuojiantou.png" class="zuo-img jiantou" alt="点击" />
          <img src="../../assets/youjiantou.png" class="you-img jiantou" alt="点击" />
        </div>
        <!--<div class="bt-box-outer">
          <div class="app-row bt-box-main">
            <div data-aos="fade-down" style="opacity: 100;">
              <span class="item">
                <a class="img-box" style="background-image: url('../../assets/3.png');">
                  <img src="../../assets/33.png" />
                </a>
                <span class="t">微博</span>
              </span>
              <span class="item">
                <a class="img-box" style="background-image: url('../../assets/4.png');">
                  <img src="../../assets/44.png" />
                  <div class="code-box">
                     <img src="../../assets/4439c452439a16c15f1202.jpg" />
                    <span></span>
                  </div>
                </a>
                <span class="t">公众号</span>
              </span>
              <span class="item">
                <a class="img-box" style="background-image: url('../../assets/5.png');">
                  <img src="../../assets/dingqi2.png" />
                  <div class="code-box">
                  <img src="../../assets/4439c452439a16c166cd04.jpg" />
                    <span></span>
                  </div>
                </a>
                <span class="t">抖音</span>
              </span>
            </div>
          </div>
        </div>-->
        <div style="background: rgb(244, 246, 251); display: none;">
          <div id="notice-swiper" class="app-row swiper-container">
            <div class="swiper-wrapper"></div>
          </div>
        </div>
      </div>
      <!-- 头条资讯 -->
      <div class="bg-box today-bg-box">
        <div data-aos="fade-up" style="opacity: 1;" class="am-scrollspy-init">
          <div id="today-sr-swiper" class="app-row swiper-container">
            <p class="t0">头条资讯</p>
            <div class="swiper-wrapper">
              <div data-index="0" class="swiper-slide swiper-slide-visible swiper-slide-active">
                <img src="../../assets/jsgr.jpg" class="td-img" />
                <div class="text-box">
                  <p class="t1">头条资讯</p>
                  <p onclick="clickZhiXun()" class="t2">开封市金盛热力有限公司关于集中供热相关通知</p>
                  <p class="t3">2020-04-27</p>
                  <p class="t4">
                    <span class="ellipsis">...</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="pagination">
              <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
            </div>
            <a  class="view-more hvr-wobble-bottom">阅读全文</a>
          </div>
        </div>
      </div>
      <!-- 三大模块 -->
      <div class="bg-box news-bg-box">
        <div data-aos="fade-up" class="news-box">
          <div class="item item1 am-scrollspy-init" style="opacity: 1;">
            <img src="../../assets/news1.png" class="img1" />
            <div
              class="text-box"
              style="opacity: 0.9; background-image: linear-gradient(44deg, rgba(191, 0, 0, 0.91) 0px, rgba(189, 64, 0, 0.78) 100%);"
            >
              <span
                onclick="location.assign(views/partyCommittee/dangWeiJianShe.html)"
                class="title"
              >深燃党建</span>
              <p>
                <span>04-27 深圳市燃气集团股份有限公司党委关于巡察整改情况的通报</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>04-19 习近平主持召开中央政治局常务委员会会议</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>04-15 输配公司党委开展形式多样的党建“结对子”活动</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
            </div>
          </div>
          <div class="item item2 am-scrollspy-init" style="opacity: 1;">
            <img src="../../assets/news2.png" class="img1" />
            <div
              class="text-box"
              style="opacity: 1; background-image: linear-gradient(44deg, rgb(7, 102, 177) 0px, rgb(45, 166, 143) 100%);"
            >
              <span onclick="location.assign(views/news/shenranZixun.html)" class="title">深燃资讯</span>
              <p>
                <span>04-17 深圳燃气召开2020年第一季度经济工作会暨疫情防控及巡察整改阶段性工作总结会</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>04-15 推进市属国企大湾区战略协同 深圳燃气成功进军天然气热电联产领域</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>03-11 深圳燃气节气海报入选新华社《中国名牌》杂志主题征集活动</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
            </div>
          </div>
          <div class="item item3 am-scrollspy-init" style="opacity: 1;">
            <img src="../../assets/news3.jpg" class="img1" />
            <div
              class="text-box"
              style="opacity: 1; background-image: linear-gradient(44deg, rgb(115, 181, 22) 0px, rgba(45, 166, 114, 0.9) 100%);"
            >
              <span onclick="location.assign(views/news/meitijujiao.html)" class="title">媒体聚焦</span>
              <p>
                <span>03-15 深圳燃气精准优化报装流程</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>03-13 能承担1/5深圳居民供气量，梅林LNG应急气化站可随时启用</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
              <p>
                <span>03-03 为安全复工出实招，深圳燃气联合市住建局向部分施工人员提供新冠肺炎核酸检测</span>
                <i class="iconfont iconxiangyou"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 两大模块 -->
      <div class="summary-box-out">
        <div class="app-row summary-box">
          <div style="float: right;">
            <div data-aos="fade-up-right" class="item item1 am-scrollspy-init" style="opacity: 1;">
              <p class="t1">客户中心</p>
              <p class="t2 hvr-float-shadow">营商环境</p>
              <div class="img-box">
                <div class="contain">
                  <img src="../../assets/summary2.png" class="img1" />
                </div>
                <p class="t3">深圳燃气：积极落实支持商业客户共度难关举措获好评</p>
                <span class="t4">2020-03-20</span>
              </div>
              <a href="views/businessEnvironment/yingshanghuanjin.html" class="t5 hvr-bounce-in">
                了解更多
                <img src="../../assets/arrow2.png" class="img2" />
              </a>
            </div>
            <div data-aos="fade-up-left" class="item item2 am-scrollspy-init" style="opacity: 1;">
              <p class="t1">天然气改造</p>
              <p
                onclick="location.assign(&quot;views/urbanVillages/index.html&quot;)"
                class="t2 hvr-float-shadow"
              >城中村改造</p>
              <div class="img-box">
                <div class="contain">
                  <img
                    onclick="location.assign(&quot;views/urbanVillages/index.html&quot;)"
                    src="../../assets/summary3.png"
                    class="img1"
                  />
                </div>
                <p class="t3">宣传先行，助力城中村改造复工复产</p>
                <span class="t4">2020-03-31</span>
              </div>
              <a href="views/urbanVillages/index.html" class="t5 hvr-bounce-in">
                了解更多
                <img src="../../assets/arrow2.png" class="img2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 业务地图 -->
      <div class="domain-box">
        <div id="particles-js" style="height: 100%;">
          <canvas
            class="particles-js-canvas-el"
            width="1169"
            height="470"
            style="width: 100%; height: 100%;"
          ></canvas>
        </div>
        <div id="mapContent" class="app-row content">
          <img src="../../assets/map2.png" class="map am-scrollspy-init" style="opacity: 1;" />
          <span data-aos="fade-down" class="t1 am-scrollspy-init" style="opacity: 1;">深燃版图</span>
          <button
            data-aos="fade-right"
            onclick="location.assign(&quot;views/aboutSr/shenRanBanTu.html&quot;)"
            class="t2 am-scrollspy-init"
            style="opacity: 1;"
          >查看更多</button>
          <div data-aos="fade-up" class="num-box">
            <div class="item am-scrollspy-init" style="opacity: 1;">
              <span class="t3 num1">1600</span>
              <span class="t4">
                覆盖人口超过
                <span class="t5 num1">1600</span>万
              </span>
            </div>
            <div class="item am-scrollspy-init" style="opacity: 1;">
              <span class="t3 num2">14000</span>
              <span class="t4">
                运营燃气管道超过
                <span class="t5 num2">14000</span>公里
              </span>
            </div>
            <div class="item am-scrollspy-init" style="opacity: 1;">
              <span class="t3 num3">40</span>
              <span class="t4">
                全国
                <span class="t5 num3">40</span>个特许经营权城市
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 金盛期刊 -->
      <div class="journal-box am-scrollspy-init" style="opacity: 1;">
        <div data-aos="fade-up" style="height: 100%;">
          <div id="journal-swiper" class="app-row swiper-container">
            <div class="swiper-wrapper" style="width: 800px; height: 500px;">
              <!-- transform: translate3d(-800px, 0px, 0px); transition-duration: 0s;-->
              <!-- 5600px-->
              <!-- <div class="swiper-slide swiper-slide-duplicate" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="../../assets/3DDA535EE49A48FFA9A7403C448D6AF8.png"
                    onclick="openDetail(view.periodical[4])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[4])" class="title">第71期：改革奋进正当时</span>
                  <p>
                    <span class="title2">刊首 FORWARD</span>
                    <span class="title2">博览 NEWS</span>
                  </p>
                  <p>04 中俄东线天然气管道过境段：6月末实现全部贯通（等）</p>
                  <p>06 深圳燃气组织召开深圳市天然气交易中心方案研究专家评审会（等）</p>
                  <p>08 深圳发布全国首份优化用气营商环境白皮书</p>
                  <p>12 深圳燃气2018年年度报告以及2019年一季报业绩点评摘选</p>
                  <p class="last-p">14 攻坚决战 城中村改造再加速——专访城中村改造办公室张坚主任</p>
                  <span class="title2">党建 PARTY BUILDING</span>
                  <p class="last-p">16 党建进班组，党员上一线书记项目深化实施方案</p>
                  <span class="title2">专题 TOPIC</span>
                  <p>22 改革改了什么？</p>
                  <p>26 坚持贯彻新发展理念引领深圳燃气高质量发展</p>
                  <p>28 做深做实做细改革工作，确保圆满完成各项经营工作目标</p>
                  <p></p>
                </div>
              </div>-->
              <div
                class="swiper-slide swiper-slide-visible swiper-slide-active"
                style="width: 1200px; height: 700px;"
              >
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="../../assets/880C4267300F48A180754B0DC946456A.jpg"
                    onclick="openDetail(view.periodical[0])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[0])" class="title">第75期：2020深燃再出发</span>
                  <p></p>
                  <p>
                    <span class="title2">
                      新春贺词
                      <span>FORWARD</span>
                    </span>
                    <span>&nbsp;</span>
                    <span class="title2">
                      博览
                      <span>NEWS</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span>04</span> 全球LNG供应过剩将持续到年中（等）
                    <span></span>
                  </p>
                  <p>
                    <span>06 深燃党委召开巡察整改工作部署会</span>（等）
                    <span></span>
                  </p>
                  <p>
                    <span>08</span> 深圳燃气召开2019年度经济工作会等系列会议
                    <span></span>
                  </p>
                  <p>
                    <span>16</span> 2019中国资本市场十大事件
                    <span></span>
                  </p>
                  <p class="last-p">
                    <span>18 2019城中村改造大数据</span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      党建
                      <span>PARTY BUILDING</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      <span>20 习近平出席国企党建工作会议：使国企成为党和国家最可信赖的依靠力量</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      专题
                      <span>TOPIC</span>
                    </span>
                    <span></span>
                  </p>
                  <p class="MsoNormal">
                    <span>&nbsp;</span>
                  </p>
                  <p></p>
                </div>
              </div>
              <!--
              <div class="swiper-slide" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="https://guanwang-oss.oss-cn-shenzhen.aliyuncs.com/2019/12/30/7515FFE6266D4393B27D00F283BF3138.jpg"
                    onclick="openDetail(view.periodical[1])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[1])" class="title">第74期：十年磨砺 蓄势蜕变</span>
                  <p></p>
                  <p style="margin-left:0cm;">
                    <b>刊首</b>
                    <b>FORWARD&nbsp;</b>
                  </p>
                  <p style="margin-left:0cm;">
                    <b>博览</b>
                    <b>NEWS</b>
                  </p>
                  <p class="Default">
                    04
                    中俄东线天然气管道投产通气（等）
                    <span></span>
                  </p>
                  <p class="Default">
                    06
                    携手打造粤港澳大湾区液化天然气“生态圈” 助力大湾区绿色低碳发展（等）
                    <span></span>
                  </p>
                  <p class="Default">
                    12
                    并购交易中的“分期付款”您知道吗？
                    <span>18</span>城中村进行时——宣民生之声 传大众之心
                  </p>
                  <p class="Default">
                    14
                    全面对接自建项目 &nbsp;服务全市城中村改造大局
                  </p>
                  <p style="margin-left:0cm;">
                    <b>党建</b>
                    <b>PARTY BUILDING</b>
                  </p>
                  <p class="Default">
                    18
                    完善顶层设计 夯实制度基础用党建凝聚企业发展的磅礴力量
                  </p>
                  <p style="margin-left:0cm;">
                    <b>专题</b>
                    <b>TOPIC</b>
                  </p>
                  <p class="Default">
                    22
                    十年风雨 十年收获28
                    适应新要求 锤炼硬功夫
                    砥砺再出发
                  </p>
                  <p class="Default">
                    24
                    十年磨砺 蓄势蜕变
                  </p>
                  <p class="Default">
                    30
                    坚持“双区驱动”， 实现高质量发展
                  </p>
                  <p></p>
                </div>
              </div>
              <div class="swiper-slide" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="https://guanwang-oss.oss-cn-shenzhen.aliyuncs.com/2019/11/11/F91A7F5CBBB84039BEC9AC10E2ECB35E.jpg"
                    onclick="openDetail(view.periodical[2])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[2])" class="title">第73期：清风伴深燃</span>
                  <p></p>
                  <p>
                    <span class="title2">刊首 FORWARD</span>
                    <span>&nbsp;</span>
                    <span class="title2">博览 NEWS</span>
                  </p>
                  <p>04西气东输工程：15年输气近5000亿方 近4亿人受益（等）</p>
                  <p>06 深圳燃气举行国庆升旗仪式（等）</p>
                  <p>08 深圳召开2019年第三季度经济工作会</p>
                  <p>
                    12 落实创新战略 加快转型发展——深圳燃气召开“
                    <span>落实创新战略 加快转型发展</span>”主题研讨会
                  </p>
                  <p class="last-p">18 城中村进行时——宣民生之声 传大众之心</p>
                  <p>
                    <span class="title2">党建 PARTY BUILDING</span>
                  </p>
                  <p>
                    <span class="title2">22 深圳燃气党委召开“不忘初心、牢记使命”主题教育总结大会</span>
                  </p>
                  <p>
                    <span class="title2">专题 TOPIC</span>
                  </p>
                  <p>26 深圳燃气纪委全面从严治企大事记</p>
                  <p>28 适应新要求 锤炼硬功夫 砥砺再出发</p>
                  <p>30 深化监督体制机制改革 护航深圳燃气高质量发展</p>
                  <p></p>
                </div>
              </div>
              <div class="swiper-slide" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="https://guanwang-oss.oss-cn-shenzhen.aliyuncs.com/2019/09/09/218B4A8A38954BF6BA017CA4E1E5D32E.jpg"
                    onclick="openDetail(view.periodical[3])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[3])" class="title">第72期：不忘初心 牢记使命</span>
                  <p>
                    <span class="title2">刊首 FORWARD</span>
                    <span>&nbsp;</span>
                    <span class="title2">博览 NEWS</span>
                  </p>
                  <p>04 全球第一家天然气制汽油厂在土库曼斯坦投产（等）</p>
                  <p>06 董事长李真带队拜访坪山区陶永欣书记（等）</p>
                  <p>08 深圳燃气召开2019半年经济工作会议</p>
                  <p>10 你好！首船LNG！</p>
                  <p>
                    <span>18 深圳燃气2019年半年度报告业绩点评摘选</span>
                  </p>
                  <p class="last-p">20 功崇惟志 业广惟勤 记城中村改造的一天</p>
                  <br />
                  <span class="title2">专题 TOPIC</span>
                  <p>24 不忘初心 牢记使命 坚定信心 攻坚克难</p>
                  <p>27 深圳燃气“不忘初心 牢记使命”主题教育集中学习研讨中党委领导发言节选</p>
                  <p>32 多措并举同谋划 紧抓落实促实效</p>
                  <p></p>
                </div>
              </div>
              <div class="swiper-slide" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="https://guanwang-oss.oss-cn-shenzhen.aliyuncs.com/2019/07/18/3DDA535EE49A48FFA9A7403C448D6AF8.png"
                    onclick="openDetail(view.periodical[4])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[4])" class="title">第71期：改革奋进正当时</span>
                  <p>
                    <span class="title2">刊首 FORWARD</span>
                    <span class="title2">博览 NEWS</span>
                  </p>
                  <p>04 中俄东线天然气管道过境段：6月末实现全部贯通（等）</p>
                  <p>06 深圳燃气组织召开深圳市天然气交易中心方案研究专家评审会（等）</p>
                  <p>08 深圳发布全国首份优化用气营商环境白皮书</p>
                  <p>12 深圳燃气2018年年度报告以及2019年一季报业绩点评摘选</p>
                  <p class="last-p">14 攻坚决战 城中村改造再加速——专访城中村改造办公室张坚主任</p>
                  <span class="title2">党建 PARTY BUILDING</span>
                  <p class="last-p">16 党建进班组，党员上一线书记项目深化实施方案</p>
                  <span class="title2">专题 TOPIC</span>
                  <p>22 改革改了什么？</p>
                  <p>26 坚持贯彻新发展理念引领深圳燃气高质量发展</p>
                  <p>28 做深做实做细改革工作，确保圆满完成各项经营工作目标</p>
                  <p></p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-duplicate" style="width: 800px; height: 500px;">
                <a class="title-img-box hvr-curl-bottom-right">
                  <img
                    src="https://guanwang-oss.oss-cn-shenzhen.aliyuncs.com/2020/03/17/880C4267300F48A180754B0DC946456A.jpg"
                    onclick="openDetail(view.periodical[0])"
                    class="title-img"
                  />
                </a>
                <div class="text-box">
                  <span onclick="openDetail(view.periodical[0])" class="title">第75期：2020深燃再出发</span>
                  <p></p>
                  <p>
                    <span class="title2">
                      新春贺词
                      <span>FORWARD</span>
                    </span>
                    <span>&nbsp;</span>
                    <span class="title2">
                      博览
                      <span>NEWS</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span>04</span> 全球LNG供应过剩将持续到年中（等）
                    <span></span>
                  </p>
                  <p>
                    <span>06 深燃党委召开巡察整改工作部署会</span>（等）
                    <span></span>
                  </p>
                  <p>
                    <span>08</span> 深圳燃气召开2019年度经济工作会等系列会议
                    <span></span>
                  </p>
                  <p>
                    <span>16</span> 2019中国资本市场十大事件
                    <span></span>
                  </p>
                  <p class="last-p">
                    <span>18 2019城中村改造大数据</span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      党建
                      <span>PARTY BUILDING</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      <span>20 习近平出席国企党建工作会议：使国企成为党和国家最可信赖的依靠力量</span>
                    </span>
                    <span></span>
                  </p>
                  <p>
                    <span class="title2">
                      专题
                      <span>TOPIC</span>
                    </span>
                    <span></span>
                  </p>
                  <p class="MsoNormal">
                    <span>&nbsp;</span>
                  </p>
                  <p></p>
                </div>
              </div>-->
            </div>
            <i onclick="journalSwiper.swipePrev()" class="iconfont iconxiangzuo"></i>
            <i onclick="journalSwiper.swipeNext()" class="iconfont iconxiangyou"></i>
            <div class="pagination">
              <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
              <span class="swiper-pagination-switch"></span>
              <span class="swiper-pagination-switch"></span>
              <span class="swiper-pagination-switch"></span>
              <span class="swiper-pagination-switch"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#main {
  min-width: 320px;
  width: 100%;
  
  // height: 937px;
  // 轮播图大盒子
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
        height: 888px;
        .loop-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .pagination {
      position: absolute;
      left: 0;
      text-align: center;
      bottom: 18px;
      width: 100%;
      .swiper-pagination-switch {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        margin: 0 3px;
        cursor: pointer;
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
  .bt-box-main {
    position: absolute;
    bottom: 65px;
    z-index: 70;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);

    .am-animation-slide-bottom {
      -webkit-animation-name: am-slide-bottom;
      animation-name: am-slide-bottom;
      .item {
        cursor: pointer;
        margin-top: 20px;
        margin-right: 134px;
        color: pink;
        z-index: 999;
        font-size: 14px;
        text-decoration: none;
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
          img {
            position: absolute;
            width: 18px;
            height: auto;
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border: 0;
            vertical-align: middle;
          }
        }
        a {
          background: 0 0;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          color: pink;
        }
        .t {
          white-space: nowrap;
          display: inline-block;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          max-width: 5em;
        }
      }
    }
    [class*="am-animation-"] {
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
  }
  .app-row {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    max-width: 1200px;
    min-width: 320px;
  }
  // 轮播图盒子结束
  // 头条资讯
  .today-bg-box {
    padding: 106px 0 120px 0;
  }
  .bg-box {
    width: 100%;
    overflow: hidden;
    // background-color: pink;
    background-size: 100% 100%;
    position: relative;
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
        box-sizing: content-box;
        width: 1200px;
        // height: ;
        // transition-property: transform, left, top, -webkit-transform;
        // transition-duration: 0s;
        // transform: translate3d(0, 0, 0);
        // transition-timing-function: ease;
        .swiper-slide {
          width: 1200px;
          height: 498px;
          position: relative;
          box-sizing: border-box;
          float: left;
          .td-img {
            // -webkit-transition: all 0.6s;
            transition: all 0.6s;
            background: #ebebeb;
            height: 82%;
            padding-left: 1px;
            float: left;
            // -o-object-fit: cover;
            object-fit: cover;
            // -o-object-position: 50% 50%;
            object-position: 50% 50%;
            width: 50%;
          }
          .text-box {
            opacity: 1;
            -webkit-transition: all 0.45s;
            transition: all 0.45s;
            float: right;
            width: 43%;
            height: 425px;
            overflow: hidden;
            display: inline-block;
            .t1 {
              font-size: 38px;
              color: #0866b0;
              margin-bottom: 20px;
              font-weight: 700;
            }
            .t2 {
              margin-bottom: 20px;
              font-size: 28px;
              color: #333;
              letter-spacing: 0;
              cursor: pointer;
              -webkit-transition: all 0.45s;
              transition: all 0.45s;
            }
            .t3 {
              margin-bottom: 15px;
              font-size: 18px;
              color: #cfcfcf;
              letter-spacing: 0;
            }
            .t4 {
              white-space: normal;
              word-break: break-all;
              font-size: 16px;
              color: #000;
              letter-spacing: 0;
              text-align: justify;
              position: relative;
              height: 216px;
              overflow: hidden;
              line-height: 36px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 6;
            }
          }
        }
      }
      .pagination {
        position: absolute;
        left: 0;
        -webkit-transition: all 0.45s;
        transition: all 0.45s;
        bottom: 20px;
        .swiper-active-switch {
          background: #1a6dd3;
        }
        .swiper-pagination-switch {
          display: inline-block;
          width: 40px;
          height: 3px;
          border-radius: 0;
          vertical-align: middle;
          // background: #d2d2d2;
          margin: 0 5px;
          cursor: pointer;
        }
      }
      .view-more {
        cursor: pointer;
        bottom: 9px;
        right: 0;
        position: absolute;
        overflow: hidden;
        display: block;
        width: 150px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        border: none;
        background: #73b516;
        color: #fff;
        border-radius: 5px;
      }
    }
    #today-sr-swiper {
      height: 498px;
      position: relative;
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
  // 三大模块
  .news-bg-box {
    .news-box {
      margin: auto;
      .item {
        -webkit-transition: all 0.45s;
        transition: all 0.45s;
        background-size: 100% 100%;
        overflow: hidden;
        height: auto;
        float: left;
        width: 33%;
        position: relative;
        margin-left: 0.5%;
        &:nth-child(1) {
          margin-left: 0;
        }
        img {
          cursor: pointer;
          // -webkit-transition: 0.45s;
          // transition: 0.45s;
          width: 100%;
          height: auto;
        }
        .text-box {
          bottom: 0;
          // -webkit-transition: 0.6s;
          // transition: 0.6s;
          width: 100%;
          height: 100px;
          // -webkit-box-sizing: border-box;
          box-sizing: border-box;
          position: absolute;
          overflow: hidden;
          // background-image: url('../../assets/squre.png');
          background-size: 100% 100%;
          .title {
            font-size: 28px;
            color: #fff;
            -webkit-transition: 0.6s;
            transition: 0.6s;
            padding-left: 40px;
            line-height: 100px;
            display: inline-block;
            letter-spacing: 1.4px;
          }
          p {
            padding-left: 40px;
            padding-right: 30px;
            margin-bottom: 16px;
            font-size: 20px;
            color: #fff;
            cursor: pointer;
            -webkit-transition: all 0.45s;
            transition: all 0.45s;
            span {
              display: inline-block;
              width: 80%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  // 三大模块结束
  // 两大模块
  .summary-box-out {
    overflow: hidden;
    background-image: url("../../assets/yancong.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 90vh;
    min-height: 400px;
    position: relative;
    .summary-box {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .item {
        float: left;
        border-radius: 8px;
        width: 327px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        margin-left: 40px;
        padding: 30px 30px;
        -webkit-box-shadow: 0 2px 25px 0 #cbe6f3;
        box-shadow: 0 2px 25px 0 #cbe6f3;
        overflow: hidden;
        &:first-child {
          margin-left: 0;
        }
        .t1 {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.35);
          letter-spacing: 0.9px;
        }
        .t2 {
          margin-bottom: 25px;
          margin-top: 15px;
          font-weight: 700;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          cursor: pointer;
          font-size: 28px;
          letter-spacing: 1.4px;
        }
        .img-box {
          overflow: hidden;
          width: 100%;
          cursor: pointer;
          -o-object-fit: cover;
          object-fit: cover;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          .contain {
            height: 160px;
            width: 100%;
            overflow: hidden;
            .img1 {
              height: 100%;
              width: 100%;
              -webkit-transition: all 0.4s;
              transition: all 0.4s;
            }
          }
          .t3 {
            cursor: pointer;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 16px;
            height: 52px;
            overflow: hidden;
            color: #424242;
            line-height: 26px;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .t4 {
            font-size: 14px;
            color: #9b9b9b;
          }
        }
        .t5 {
          color: #1a6dd3;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          cursor: pointer;
          font-size: 18px;
          margin-top: 40px;
          .img2 {
            height: 15px;
            width: 28px;
          }
        }
      }
    }
    .app-row {
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      max-width: 1200px;
      min-width: 320px;
    }
  }
  // 两大模块结束
  // 业务地图
  .domain-box {
    position: relative;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 600px;
    // background-image: url('../../assets/yancong.jpg');
    // background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(45deg, #008efe 0, #2da68f 100%);
    background-size: 100% 100%;
    .content {
      height: 370px;
      position: absolute;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .map {
        -webkit-transition: all 0.45s;
        transition: all 0.45s;
        height: 100%;
        width: auto;
        position: absolute;
        right: -10%;
      }
      .t1 {
        opacity: 1;
        color: #fff;
        font-size: 44px;
        font-weight: 700;
        letter-spacing: 2px;
        // margin-bottom: 100px;
      }
      .t2 {
        // -webkit-transition: all 0.45s;
        transition: all 0.45s;
        display: block;
        color: #fff;
        height: 45px;
        width: 130px;
        font-size: 16px;
        background: #73b516;
        border-radius: 7px;
        margin-top: 80px;
        margin-bottom: 70px;
      }
      .item {
        // -webkit-transition: all 0.45s;
        // transition: all 0.45s;
        float: left;
        margin-right: 8%;
        .t3 {
          font-size: 53px;
          opacity: 0.95;
          color: #fff;
          font-family: dinbold;
          font-weight: 700;
          letter-spacing: 2px;
          display: block;
        }
        .t4 {
          font-size: 16px;
          opacity: 0.95;
          color: #fff;
          letter-spacing: 2px;
        }
      }
    }
    .app-row {
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      max-width: 1200px;
      min-width: 320px;
    }
  }
  // 业务地图结束
  // 期刊
  .journal-box {
    background-image: url("../../assets/b2.jpg");
    background-size: 100% 100%;
    background-position: 0 80px;
    background-repeat: no-repeat;
    height: 700px;
    // #journal-swiper {
    // }
    .swiper-container {
      // background-color: pink;
      height: 100%;
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
      .swiper-wrapper {
        width: 100%;
        position: relative;
        box-sizing: content-box;
        .swiper-slide {
          width: 100%;
          position: relative;
          float: left;
          box-sizing: content-box;
          // -webkit-box-sizing: content-box;
          .title-img-box {
            background: 0 0;
            display: inline-block;
            width: 36%;
            .title-img {
              cursor: pointer;
              // opacity: 1;
              width: 100%;
              height: auto;
              padding: 8px;
              // -webkit-box-sizing: border-box;
              box-sizing: border-box;
              background: rgba(212, 215, 224, 0.8);
              right: 90px;
              // opacity: 0;
              // -webkit-transition: all 0.6s;
              transition: all 0.6s;
            }
          }
          .text-box {
            opacity: 1;
            // -webkit-transition: all 0.6s;
            transition: all 0.6s;
            width: 49%;
            float: right;
            .title {
              cursor: pointer;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 36px;
              color: #fff;
              display: block;
              margin-top: 135px;
              letter-spacing: 1.9px;
              margin-bottom: 20px;
              // -webkit-transition: all .45s;
              transition: all 0.45s;
            }
            p {
              color: #fff;
              font-size: 14px;
              line-height: 22px;
              .title2 {
                display: block;
                font-size: 18px;
                color: #fff;
                margin-bottom: 30px;
                line-height: 22px;
              }
            }
            .last-p {
              margin-bottom: 20px;
            }
          }
          .hvr-curl-bottom-right {
            display: inline-block;
            vertical-align: middle;
            // -webkit-transform: perspective(1px) translateZ(0);
            // transform: perspective(1px) translateZ(0);
            // -webkit-box-shadow: 0 0 1px transparent;
            // box-shadow: 0 0 1px transparent;
            position: relative;
          }
          a {
            -webkit-tap-highlight-color: transparent;
            color: #08c;
          }
        }
      }
    }

    .pagination {
      span {
        display: inline-block;
      }
      // -webkit-transition: all 0.45s;
      transition: all 0.45s;
      position: absolute;
      bottom: 60px;
      .swiper-active-switch {
        opacity: 1;
        background: hotpink;
      }
      .swiper-pagination-switch {
        width: 40px;
        height: 3px;
        opacity: 0.7;
        background: skyblue;
        margin-right: 10px;
      }
    }
  }
  // 期刊结束
}
</style>
