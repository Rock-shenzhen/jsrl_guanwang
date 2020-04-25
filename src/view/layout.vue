<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:58
 * @LastEditTime: 2020-04-24 17:08:40
 * @LastEditors: Please set LastEditors
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