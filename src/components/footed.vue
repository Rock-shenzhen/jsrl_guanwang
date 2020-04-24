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
          <div class="weixin"></div>
          <div class="weibo"></div>
        </div>
        <p>技术支持: you see see you one day day 的</p>
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
          margin-left: 20px;
          border-radius: 5px;
        }
        .weixin {
          background-color: #ff0;
        }
        .weibo {
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