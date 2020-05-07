<template>
  <div>
    <div class="s_banner">
      <div class="item">
        <img src="../../assets/0417f07f17ca4deb93d3ef262540e341.jpg" alt />
      </div>
      <div class="banner_area w1280" style="width: 1280px;">
        <!--  <span class="s_b_text">
          <h1 class="fnt_30"></h1>
          <h4 class="fnt_14">enterprise</h4>
        </span>
        -->
      </div>
    </div>
    <h3 class="jz3">导航栏中每个大模块，都设统一一个背景图，风格可按需求设置</h3>
    <div class="wrap_con">
      <div class="sub_main_con cf pb_fre">
        <div class="sub_menu fnt_14">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <div class="sub_menu fnt_14">
            <router-link to="/home">首页</router-link>
            <span></span>
            <router-link to="/we">我们</router-link>
            <span></span>
            <router-link to="/member">金盛人</router-link>
          </div>
        </div>
        <div class="sub_content cf mt_55">
          <h1 class="gs_title fnt_32">金盛人</h1>
          <div class="peo_01 mt_70">
            <ul class="mt_45">
              <li class="li01">
                <h1 class="fnt_24">企业理念</h1>
                <p class="fnt_12 mt_27">
                  XXXXXXXXXXXXX。
                  <br />XXXXXXXXXXXXX。
                </p>
              </li>
              <li class="li01">
                <h1 class="fnt_24">企业XX</h1>
                <p class="fnt_12 mt_27">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX；
                  <br />XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX；。
                </p>
              </li>
              <li class="li01">
                <h1 class="fnt_24">企业XX</h1>
                <p class="fnt_12 mt_27">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX；、
                  <br />XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX；。
                </p>
              </li>
            </ul>
          </div>
          <div class="peo_02 mt_70">
            <ul class="mt_45">
              <li>
                <span class="peo2_pic">
                  <img src />
                </span>
                <span class="peo2_conx fnt_12 mt_10">
                  <h1 class="fnt_18">姓名</h1>
                  <h2 class="fnt_14">部门及职位</h2>
                </span>
              </li>
              <li>
                <span class="peo2_pic">
                  <img src />
                </span>
                <span class="peo2_conx fnt_12 mt_10">
                  <h1 class="fnt_18">姓名</h1>
                  <h2 class="fnt_14">部门及职位</h2>
                </span>
              </li>
              <li>
                <span class="peo2_pic">
                  <img src />
                </span>
                <span class="peo2_conx fnt_12 mt_10">
                  <h1 class="fnt_18">姓名</h1>
                  <h2 class="fnt_14">部门及职位</h2>
                </span>
              </li>
              <li>
                <span class="peo2_pic">
                  <img src />
                </span>
                <span class="peo2_conx fnt_12 mt_10">
                  <h1 class="fnt_18">姓名</h1>
                  <h2 class="fnt_14">部门及职位</h2>
                </span>
              </li>
            </ul>
          </div>
          <div class="peo_03 mt_30">
            <ul class="mt_45">
              <li class="mb_20">
                <span class="peo_le">
                  <img src />
                </span>
                <span class="peo_ri fnt_12 mt_85">
                  <h1 class="fnt_24">姓名</h1>
                  <h2 class="fnt_14">部门及荣誉</h2>
                  <p class="fnt_14 mt_30">座右铭或其他</p>
                </span>
              </li>
              <li class="mb_20">
                <span class="peo_le">
                  <img src />
                </span>
                <span class="peo_ri fnt_12 mt_85">
                  <h1 class="fnt_24">姓名</h1>
                  <h2 class="fnt_14">部门及荣誉</h2>
                  <p class="fnt_14 mt_30">座右铭或其他</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
img {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border: 0;
  display: inline-block;
}
.banner_area {
  position: absolute;
  max-width: 1280px;
  left: 50%;
  bottom: 10%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.w1280 {
  margin: 0 auto;
  width: 1280px;
}
.s_b_text {
  line-height: 33px;
  text-align: center;
  float: left;
  padding-left: 13px;
  margin-top: 22%;
}
.s_b_text h1,
.s_b_text h4 {
  color: #fff;
}
.fnt_30 {
  font-size: 30px;
}
.fnt_14 {
  font-size: 14px;
}

.wrap_con {
  margin: 0 auto;
  background: url(../../assets/zz_bac.jpg) no-repeat bottom center;
  width: 100%;
}
.pb_fre {
  padding-bottom: 0px !important;
}
.sub_main_con {
  max-width: 1280px;
  margin: 0 auto;
  padding: 38px 0 0;
}
.sub_menu {
  float: left;
}
.fnt_14 {
  font-size: 14px;
}
.sub_menu a {
  float: left;
  color: #999999;
  margin-right: 10px;
}
.sub_menu span {
  float: left;
  margin-right: 10px;
  background: url(../../assets/sub_m_b.png) no-repeat 0 1px;
  width: 10px;
  height: 18px;
}
.sub_menu a {
  float: left;
  color: #999999;
  margin-right: 10px;
}
.pb_fre .sub_content {
  padding-bottom: 65px;
}
.sub_content {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100px;
}

.mt_55 {
  margin-top: 55px;
}
.gs_title {
  text-align: center;
}
.fnt_32 {
  font-size: 32px;
}
.peo_01 {
  float: left;
  width: 99.9%;
  min-height: 100px;
  padding: 4% 0 4%;
  border: 1px solid #dbc07f;
}

.mt_70 {
  margin-top: 20px;
}
.peo_01 .mt_45 {
  margin-top: 0;
}
.peo_01 ul {
  height: 80%;
}
.mt_45 {
  margin-top: 45px;
}
.peo_01 li:first-child,
.peo_01 li:last-child {
  border-right: none;
  border-left: none;
}

.peo_01 li {
  float: left;
  padding: 0 1% 0 1%;
  width: 31%;
  border-right: 1px solid #dbc07f;
  border-left: 1px solid #dbc07f;
}
.peo_01 li h1 {
  color: #d6a120;
}
.fnt_24 {
  font-size: 24px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
.peo_01 li p {
  color: #868080;
  line-height: 22px;
}
.fnt_12 {
  font-size: 12px;
}
.mt_27 {
  margin-top: 27px;
}
.peo_02.mt_70 {
  margin-top: 35px;
}

.peo_02 {
  float: left;
}
.peo_02 li {
  float: left;
  width: 23.7%;
  overflow: hidden;
  margin-right: 1.3%;
}
.peo_02 li span.peo2_pic {
  padding: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 66.7%;
}

.peo_02 li img {
  width: 305px;
  height: 205px;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  background-color: skyblue;
}

.peo_02 li span {
  padding: 5% 5% 5% 5%;
  width: 100%;
  float: left;
  min-height: 62px;
  box-sizing: border-box;
}

.peo_02 li h1 {
  font-weight: bold;
}

.fnt_18 {
  font-size: 18px;
}
.peo_02 li h2 {
  margin-top: 5px;
  color: #666666;
}
.fnt_14 {
  font-size: 14px;
}
.peo_03 {
  float: left;
}
.mt_30 {
  margin-top: 30px;
}
.peo_03 li {
  float: left;
  width: 100%;
}

.mb_20 {
  margin-bottom: 20px;
}
.peo_le {
  float: left;
  width: 49.2%;
  height: 0;
  overflow: hidden;
  padding-bottom: 37%;
}
.peo_03 li img {
  width: 630px;
  height: 475px;
  background-color: skyblue;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.peo_ri {
  float: right;
  width: 46%;
}
.fnt_12 {
  font-size: 12px;
}

.mt_85 {
  margin-top: 85px;
}
</style>