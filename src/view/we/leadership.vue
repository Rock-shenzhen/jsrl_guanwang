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
    <div class="wrap_con wrap_con_gg">
      <div class="sub_main_con cf">
        <div class="sub_menu fnt_14">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <div class="sub_menu fnt_14">
            <router-link to="/home">首页</router-link>
            <span></span>
            <router-link to="/we">我们</router-link>
            <span></span>
            <router-link to="/leadership">高管团队</router-link>
          </div>
        </div>
        <div class="sub_content cf mt_55">
          <h1 class="gs_title fnt_32">高管团队</h1>
          <div class="gg_pc mt_75">
            <div class="gg_t_pc">
              <ul>
                <li>
                  <div class="gg_l mb_40">
                    <img src alt />
                  </div>
                  <div class="gg_r mb_40" style="height: 420.345px;">
                    <h1 class="fnt_24">高管姓名</h1>
                    <h2 class="fnt_14">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </div>
                </li>
                <li>
                  <div class="gg_l mb_40">
                    <img src alt />
                  </div>
                  <div class="gg_r mb_40" style="height: 420.345px;">
                    <h1 class="fnt_24">高管姓名</h1>
                    <h2 class="fnt_14">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
            <div class="gg_th_list">
              <ul>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
                <li>
                  <div class="gg_ps">
                    <img src />
                  </div>
                  <span>
                    <h1 class="fnt_16 mt_10">高管姓名</h1>
                    <h2 class="fnt_14 mt_5">
                      开封市金盛热力有限公司 职务
                      <br />兼任职务或荣誉
                    </h2>
                  </span>
                </li>
              </ul>
            </div>
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
.gs_title{
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
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

.wrap_con_gg {
  background: url(../../assets/gg_s_bac.jpg) no-repeat bottom center;
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
.sub_content {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100px;
}
.gg_pc {
  width: 100%;
}
ul {
  display: block;
  list-style-type: disc;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.gg_t_pc ul li {
  float: left;
  width: 100%;
  overflow: hidden;
}
.gg_l {
  float: left;
  width: 27.7%;
  height: 0;
  overflow: hidden;
  padding-bottom: 34.6%;
}

.mb_40 {
  margin-bottom: 40px;
}
.gg_l img {
  border: 1px solid #fff;
  width: 357px;
  height: 534px;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  background-color: skyblue;
}

img {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border: 0;
  display: inline-block;
}
.gg_r {
  float: right;
  width: 70%;
  height: 429px;
  overflow: hidden;
  position: relative;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  background: url(../../assets/gg_ptb.jpg) repeat-x center center;
}

.mb_40 {
  margin-bottom: 40px;
}
.gg_r h1 {
  position: absolute;
  width: 20%;
  top: 50%;
  left: 15%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.gg_r h2 {
  position: absolute;
  width: 70%;
  top: 50%;
  right: -23%;
  color: #999;
  line-height: 26px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.fnt_14 {
  font-size: 14px;
}
.gg_th_list {
  float: left;
  width: 100%;
}
.gg_th_list ul li {
  float: left;
  width: 15.91%;
  margin-right: 0.7%;
  overflow: hidden;
  margin-bottom: 20px;
}
.gg_ps {
  float: left;
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 125.4%;
}
.gg_th_list ul li img {
  border: 1px solid #fff;
  width: 205px;
  height: 305px;
  background-color: skyblue;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
</style>