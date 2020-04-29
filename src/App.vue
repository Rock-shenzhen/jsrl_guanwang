<!--
 * @Author: your name
 * @Date: 2020-04-24 10:28:58
 * @LastEditTime: 2020-04-29 10:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\jsrl_gw\src\App.vue
 -->
<template>
  <div id="app">
    <topBar ref="donghua"></topBar>
    <router-view class="content"></router-view>
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
  .content {
    margin-top: -110px;
  }
}
</style>