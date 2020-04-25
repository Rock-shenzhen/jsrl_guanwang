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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$parent.dh();
  }
};
</script>

<style lang="less" scoped>
#layout {
  margin-bottom: 270px;
}
</style>