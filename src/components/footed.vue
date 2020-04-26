<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:33
 * @LastEditTime: 2020-04-26 16:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\src\components\footed.vue
 -->
<template>
  <div id="footed">
    <div class="warp">
      <div class="left">
        <p>版权所有©开封市金盛热力有限公司 豫ICP备17020033号-1</p>
        <p>
          <router-link to="/map">网站地图</router-link>
          <router-link to="/women">联系我们</router-link>
          <router-link to="/falv">法律声明</router-link>
        </p>
      </div>
      <div class="right">
        <div class="ico">
          <div class="weibo">
            <a href="https://weibo.com/u/6424935273?is_all=1"></a>
          </div>
          <div class="weixin">
            <img src="" alt="">
          </div>
          <div class="douyin">
            <img src="" alt="">
          </div>
          <div class="chengguanju">
            <img src="" alt="">
          </div>
          <div class="kaifengwang">
            <img src="" alt="">
          </div>
        </div>
        <p>友情链接</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#footed {
  margin-top: -270px;
  color: #fff;
  background: url("../assets/footed.jpg") no-repeat;
  .warp {
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 80px;
    width: 1280px;
    height: 270px;
    .left {
      float: left;
      p {
        padding: 10px 0;
        color: #909599;
        a {
          font-size: 16px;
          line-height: 16px;
          color: #fff;
          display: inline-block;
          padding: 0 10px;
          border-left: 1px solid #fff;
          &:first-child {
            padding-left: 0;
            border-left: 0;
          }
        }
      }
    }
    .right {
      float: right;
      display: flex;
      flex-direction: column;
      .ico {
        // width: 100px;
        height: 40px;
        > div {
          float: right;
          width: 40px;
          height: 40px;
          margin-left: 10px;
          border-radius: 5px;
        }
        .weibo {
          background-color: #f0f;
        }
        .weixin {
          background-color: #ff0;
        }
        .douyin {
          background-color: #f0f;
        }
        .chengguanju {
          background-color: #f0f;
        }
        .kaifengwang {
          background-color: #f0f;
        }
      }
      p {
        margin-top: 20px;
        color: #909599;
      }
    }
  }
}
</style>