<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:33
 * @LastEditTime: 2020-05-06 15:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsrl_guanwang\src\components\footed.vue
 -->
<template>
  <div id="footed">
    <div class="warp">
      <div class="left">
        <p>
          <span>电 话：0371-25855555</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>传 真：0371-23869088</span>
        </p>
        <p>
          <span>地 址：开封市集英街南段9号</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>邮 箱：jsrl2006@126.com</span>
        </p>
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
            <a class="kaifengwang" href=" http://www.kf.cn" target="_blank" title="河南省开封网">
              <img src="../assets/kfw111.png" alt />
            </a>
            <a class="chengguanju" href="http://cgzfj.kaifeng.gov.cn" target="_blank" title="河南省城管局">
              <img src="../assets/cgw111.png" alt />
            </a>
            <a class="douyin" href="https://weibo.com/u/6424935273?is_all=1" target="_blank" title="抖音公众号"> 
              <img src="../assets/dy.png" alt />
              <div class="dy_ewm">
                <span></span>
              </div>
            </a>
            <a class="weixin" href="https://weibo.com/u/6424935273?is_all=1" target="_blank" title="微信公众号">
              <img src="../assets/wx.png" alt />
              <div class="code-box">
                <span></span>
              </div>
            </a>
            <a class="weibo" href="https://weibo.com/u/6424935273?is_all=1" target="_blank" title="微博公众号">
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
      margin-top: -20px;
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
            width: 50px;
            height: 50px;
            margin-right: 30px;
            border-radius: 50px;
            &:hover {
              background-color: #fff;
            }
            img {
              max-width: 80%;
              max-height: 80%;
              width: auto;
              height: auto;
              margin: 5px auto 0 5px;
            }
          }
          .douyin {
            position: relative;
            .dy_ewm {
              background: url("../assets/js_dy.png") no-repeat 0px 0px;
              background-size: 100% 100%;
              height: 150px;
              width: 150px;
              position: absolute;
              display: none;
              z-index: 22;
              border: 1px solid #f0f0f0;
              top: -170px;
              left: -50px;
              pointer-events: none;
              // transition: 0.3s;
              // -webkit-transition: 0.3s;
              span {
                display: block;
                margin:150px auto;
                height: 0;
                width: 0;
                border-top: 10px solid #fff;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
              }
            }
            &:hover .dy_ewm {
              display: block;
            }
          }
          .weixin {
            position: relative;
            .code-box {
              background: url("../assets/wx_ewm.jpg") no-repeat 0px 0px;
              background-size: 100% 100%;
              height: 150px;
              width: 150px;
              position: absolute;
              display: none;
              z-index: 22;
              border: 1px solid #f0f0f0;
              top: -170px;
              left: -50px;
              // transition: 0.3s;
              // -webkit-transition: 0.3s;
              span {
                display: block;
                margin:150px auto;
                height: 0;
                width: 0;
                border-top: 10px solid #fff;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
              }
            }
            &:hover .code-box {
              display: block;
            }
          }
          .chengguanju {
            img {
              margin: 9px auto 0 5px;
            }
          }
          .kaifengwang {
            img {
              margin: 9px auto 0 5px;
            }
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