<!--
 * @Author: your name
 * @Date: 2020-04-26 09:01:54
 * @LastEditTime: 2020-04-27 14:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\src\view\enterprise\index.vue
 -->
<template>
  <div id="home">
  <el-row :gutter="10">
  <el-col :xs="2" :sm="6" :md="4" :lg="3" :xl="4"><div class="grid-content bg-purple">
  aaa
  </div></el-col>
  <el-col :xs="10" :sm="6" :md="8" :lg="9" :xl="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="10" :sm="6" :md="8" :lg="9" :xl="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="2" :sm="6" :md="4" :lg="3" :xl="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
