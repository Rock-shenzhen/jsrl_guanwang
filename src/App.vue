<!--
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-24 11:04:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\App.vue
 -->
<template>
  <div id="app">
    <topBar ref="donghua"></topBar>
    <router-view></router-view>
    <footed></footed>
  </div>
</template>



<script>
import topBar from "./components/topBar";
import footed from "./components/footed";
export default {
  name: "App",
  components: {
    topBar,
    footed
  },
  methods: {
    dh() {
      this.$refs.donghua.animation();
    }
  }
};
</script>


<style lang="less" scoped>
#app {
  height: 100%;
}
</style>