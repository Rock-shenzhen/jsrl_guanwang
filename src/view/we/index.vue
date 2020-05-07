<template>
  <div id="we">
    <div class="s_banner">
      <div class="item">
        <img src="../../assets/0417f07f17ca4deb93d3ef262540e341.jpg" alt />
      </div>
      <div class="banner_area w1280" style="width: 1280px;">
        <!--<span class="s_b_text">
          <h1 class="fnt_30">我们</h1>
          <h4 class="fnt_14">ABOUT</h4>
        </span>-->
      </div>
      <h3 class="jz3">导航栏中每个大模块，都设统一一个背景图，风格可按需求设置</h3>
      <div class="wrap_con_nobac pb_200">
        <div class="sub_main_con cf">
          <div class="sub_menu fnt_14">
            <router-link to="/home">首页</router-link>
            <span></span>
            <router-link to="/we">我们</router-link>
          </div>
        </div>
      </div>
      <div class="wrap_con_us">
        <div class="sub_main_us cf min_h_us">
          <div class="us_year fnt_60 mt_10">2020</div>
          <ul class="us_list">
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
              <h1 class="fnt_22">集中供热主管网发展到365公里</h1>
              <p></p>
              <p class="fnt_18 mt_5">集中供热入网面积达到3100万平方米。</p>
              <p></p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
              <h1 class="fnt_22">xxxxxxxxx</h1>
              <p></p>
              <p class="fnt_18 mt_5">xxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p class="fnt_18 mt_5">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p></p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
              <h1 class="fnt_22">xxxxxxxxxxxxxxx</h1>
              <p></p>
              <p class="fnt_18 mt_5">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p></p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
              <h1 class="fnt_22">xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h1>
              <p></p>
              <p class="fnt_18 mt_5">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p></p>
            </li>
          </ul>
          <p>
            <br />
          </p>
        </div>
      </div>
      <div class="us_con_flist">
        <ul>
          <li>
            <router-link to="/organization">
              <img src="../../assets/us_p01.jpg" />
              <h1 class="fnt_26 mt_25">组织架构</h1>
            </router-link>
          </li>
          <li>
            <router-link to="/history">
              <img src="../../assets/us_p02.jpg" />
              <h1 class="fnt_26 mt_25">发展历程</h1>
            </router-link>
          </li>
          <li>
            <router-link to="/leadership">
              <img src="../../assets/us_p03.jpg" />
              <h1 class="fnt_26 mt_25">高管团队</h1>
            </router-link>
          </li>
          <li>
            <router-link to="/member">
              <img src="../../assets/us_p04.jpg" />
              <h1 class="fnt_26 mt_25">金盛人</h1>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="us_sy_con cf pt_100">
        <div class="us_sy">
          <div class="us_le_c" style="width: 665.6px; height: 665.6px;">
            <a href="http://www.jxcc.com:80/channel/b4e6324bc52c40dd8fb15ff0234b468d.html">
              <img src="../../assets/a5ee48403bbd4959b268ce5de4a3eef6.jpg" />
            </a>
          </div>
          <div class="us_ri_c" style="width: 665.6px; height: 665.6px; margin-top: 66.56px;">
            <h1 class="fnt_36">事业宣言</h1>
            <p>以人为本； 科学管理；</p>
            <P>开拓用户； 谋求发展；</P>
            <P>安全高效； 诚信服务。</P>
            <p>以质量求生存；以服务求发展；向管理要效益；为社会做贡献。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$parent.$parent.dh();
  }
};
</script>

<style>
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
meta {
  display: none;
}
.wrap_con_nobac {
  margin: 0 auto;
  width: 100%;
  background: none;
}

.pb_200 {
  padding-bottom: 30px;
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
.sub_menu a {
  float: left;
  color: #999999;
  margin-right: 10px;
}

.wrap_con_us {
  margin: 0 auto;
  background: url("../../assets/us_pics_n.jpg") no-repeat bottom center;
  width: 100%;
}

.min_h_us {
  min-height: 650px;
}
.sub_main_us {
  max-width: 1280px;
  margin: 0 auto;
}
.us_year {
  color: #dbc07f;
  font-family: arial;
}
.fnt_60 {
  font-size: 60px;
}

.mt_10 {
  margin-top: 10px;
}
.us_list {
  float: left;
  width: 60%;
  margin-top: 20px;
}
.us_con_flist {
  margin: 0 auto;
  background: #00638b;
  height: 400px;
  width: 100%;
}
.us_con_flist ul {
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  background: url("../../assets/us_li_b.png") no-repeat right center;
}
.us_con_flist ul li {
  float: left;
  width: 25%;
  height: 100%;
  background: url("../../assets/us_li_b.png") no-repeat left center;
  text-align: center;
}
a {
  transition: all 2s;
}
.us_con_flist ul li img {
  margin-top: 38%;
}
.us_con_flist ul li h1 {
  color: #fff;
}
.pt_100 {
  padding-top: 100px;
}
.us_sy_con {
  max-width: 1280px;
  margin: 0 auto;
}
.us_le_c img {
  width: 100%;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.fnt_26 {
  font-size: 26px;
}
.mt_25 {
  margin-top: 25px;
}

.us_sy_con {
  max-width: 1280px;
  margin: 0 auto;
}
.pt_100 {
  padding-top: 100px;
}
.us_sy {
  position: relative;
  overflow: hidden;
}
.us_le_c {
  position: absolute;
  top: 0;
  width: 50%;
  overflow: hidden;
  height: 0;
  padding-bottom: 0.1%;
  left: 0;
}
.us_ri_c {
  float: right;
  width: 50%;
  background: #f3f3f3;
}
.us_le_c img {
  width: 100%;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.us_ri_c h1 {
  margin-bottom: 20px;
  width: 70%;
  margin-left: 20%;
  margin-top: 25%;
}
.fnt_36 {
  font-size: 36px;
}
.us_ri_c p {
  float: left;
  margin-top: 20px;
  font-size: 18px;
  width: 70%;
  margin-left: 20%;
  color: #999;
}
</style>