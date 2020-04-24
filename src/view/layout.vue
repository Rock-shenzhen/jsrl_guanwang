<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:58
 * @LastEditTime: 2020-04-24 14:04:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\src\view\layout.vue
 -->
<template>
  <div id="layout">
    <!-- <el-container id="home"> -->
    <!-- <el-header> -->
    <topBar></topBar>
    <!-- </el-header> -->
    <!-- <el-main> -->
    <router-view></router-view>
    <!-- </el-main> -->
    <!-- <el-footer> -->
    <footed></footed>
    <!-- </el-footer> -->
    <!-- </el-container> -->
  </div>
</template>

<script>
import topBar from "../components/topBar";
import footed from "../components/footed";
export default {
  components: {
    topBar,
    footed
  }
};
</script>

<style>
</style>