<!--
 * @Author: your name
 * @Date: 2020-04-24 10:36:33
 * @LastEditTime: 2020-04-26 18:09:16
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
            <a class="chengguanju" href="http://cgzfj.kaifeng.gov.cn"></a>
            <a class="kaifengwang" href=" http://www.kf.cn"></a>
            <a class="douyin" href="https://weibo.com/u/6424935273?is_all=1"></a>
            <a class="weixin" href="https://weibo.com/u/6424935273?is_all=1">
              <div class="ewm_img" style="display: none;">
                <img src="http://www.jxcc.com:80/static/img/jt_weixin.jpg" />
              </div>
            </a>
            <a class="weibo" href="https://weibo.com/u/6424935273?is_all=1"></a>
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
          a {
            float: right;
            width: 40px;
            height: 40px;
            margin-left: 10px;
            border-radius: 5px;
          }
          .weibo {
            background: url("../assets/f_wb.png") no-repeat;
          }
          .weixin {
            background: url("../assets/f_wx.png") no-repeat;
            &:hover {
              .ewm_img {
                display: none;
                cursor: pointer;
                background: #fff;
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
          .douyin {
            background: url("../assets/f_wb.png") no-repeat;
          }
          .chengguanju {
            background: url("../assets/f_wb.png") no-repeat;
          }
          .kaifengwang {
            background: url("../assets/f_wb.png") no-repeat;
          }
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