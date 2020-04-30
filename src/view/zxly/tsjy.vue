<!--
 * @Author: your name
 * @Date: 2020-04-26 09:01:54
 * @LastEditTime: 2020-04-26 18:34:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\src\view\enterprise\index.vue
 -->
<template>
  <div id="enterprise">
    <div class="s_banner">     
      <div class="banner_area w1280" style="width: 1280px;">
        <span class="s_b_text">
          <h1 class="fnt_30">我们</h1>
          <h4 class="fnt_14">ABOUT</h4>
        </span>
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
  padding-bottom: 200px;
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
</style>