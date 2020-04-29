<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:33
 * @LastEditTime: 2020-04-29 09:17:03
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
          <div>
            <a class="chengguanju" href="http://cgzfj.kaifeng.gov.cn">
              <img src="../assets/kfw111.png" alt />
            </a>
            <a class="kaifengwang" href=" http://www.kf.cn">
              <img src="../assets/cgw111.png" alt />
            </a>
            <a class="douyin" href="https://weibo.com/u/6424935273?is_all=1">
              <img src="../assets/dy.png" alt />
            </a>
            <a class="weixin" href="https://weibo.com/u/6424935273?is_all=1">
              <img src="../assets/wx.png" alt />
            </a>
            <a class="weibo" href="https://weibo.com/u/6424935273?is_all=1">
              <img src="../assets/wb.png" alt />
            </a>
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
  width: 100%;
  margin-top: -270px;
  color: #fff;
  background-image: url("../assets/footer.png");
  background-size: 100% 100%;
  .warp {
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 80px;
    width: 1200px;
    height: 270px;
    .left {
      float: left;
      margin-top: 50px;
      p {
        padding: 10px 0;
        color: #08c;
        a {
          font-size: 16px;
          line-height: 16px;
          color: black;
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
      margin-top: 50px;
      .ico {
        // width: 100px;
        height: 40px;
        > div {
          a {
            float: right;
            width: 40px;
            height: 40px;
            margin-right: 30px;
            border-radius: 10px;

            // background-color: #d4f4f0;
            img {
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
              // background-color: #d4f4f0;
            }
          }
          .weixin {
            &:hover {
              .ewm_img {
                display: none;
                cursor: pointer;
                background: #08c;
                padding: 10px;
                position: absolute;
                bottom: 36px;
                left: 50%;
                width: 110px;
                height: 110px;
                margin-left: -110px;
                img {
                  transition: all 0.5s;
                  border: 0;
                  display: inline-block;
                }
              }
            }
          }
          .kaifengwang {
            width: 50px;
            height: 50px;
          }
          .chengguanwang {
            width: 50px;
            height: 50px;
          }
        }
      }
      p {
        margin-top: 20px;
        color: black;
      }
    }
  }
}
</style>