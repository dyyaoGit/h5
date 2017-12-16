<template>
  <div class="iphoneMsg">
    <div class="Msg-wrap">

      <div class="Msg">
        <div class="title">
              <span class="title-item">
                <span class="icon-msg">
                  <i class="iconfont icon-iphoneduanxin"></i>
                </span>
                信息
              </span>
          <span>现在</span>
        </div>

        <div class="Msg-content">
          <div class="Msg-phone">
            95555
          </div>
          <div class="Msg-text">
            <!--您账户8888于07月31日12:00入账人民币100,000【借箭】-->
            <!--用于存放短信信息的内容-->
            <slot>您账户8888于07月31日12:00入账人民币100,000【借箭】</slot>
          </div>
          <div class="scan">
            <slot name="scan">轻扫以显示更多</slot>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  export default {
    name: 'iphoneMsg',
    data () {
      return {

      }
    }
  }
</script>


<style scoped lang="scss">
  .Msg-wrap {
    padding: .1rem;
    color: #333;
  }

  .Msg {
    background: rgba(255,255,255,.8);
    border-radius: 6px;
    overflow: hidden;
  }

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: .08rem .2rem;
    color: rgb(98,114,145);
    background: rgba(255, 255, 255, .7);
    .icon-msg{
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      text-align: center;
      border-radius: 3px;
      width: 19px;
      background: rgb(98,250,122);
      .icon-iphoneduanxin{
        font-size: 12px;
        color: #fff;
      }
    }
    .title-item{
      position: relative;

      padding-left: 22px;
    }
  }

  .Msg-content{
    padding: .2rem .25rem;
    font-size: 14px;
    .Msg-phone{
      font-weight: 900;
    }
    .Msg-text{
      font-weight: 500;
      line-height: 1.2;
      word-break: break-all;
    }
    .scan{
      font-size: 12px;
      margin-top: 4px;
      font-weight: 100;
      color: rgb(98,114,145);
    }

  }
</style>
