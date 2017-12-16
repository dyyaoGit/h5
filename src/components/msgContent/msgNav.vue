<template>
  <div class="msgNav">
    <div class="nav">
        <span class="back">
          <i class="iconfont icon-back"></i>
          <span class="msg-num">888</span>
        </span>
      <div class="header">
          <div class="header-icon">
            <slot>
              <i class="iconfont icon-11"></i>
            </slot>
          </div>
        <div class="header-text">
          <slot name="phone-nunber">
            95555
          </slot>
        </div>
      </div>

      <span class="gantanhao">
          <i class="iconfont icon-tanhao"></i>
        </span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'msgNav',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">
  .nav{
    position: relative;
    display: flex;
    padding: .4rem .2rem;
    justify-content: space-between;
    background: rgb(249,249,249);
    border-bottom: 1px solid #f5f5f5;
  }
  .back{
    display: flex;
    align-items: center;
    color: rgb(0,122,255);
    .icon-back{
      font-size: 20px;
    }
    .msg-num{
      display: block;
      color: #fff;
      background: rgb(0,122,255);
      padding: 1px 4px;
      border-radius: 15px;
    }
  }

  .header{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .header-text{
      font-size: 12px;
      font-weight: 400;
    }
  }
  .header-icon{
    position: relative;
    height: 35px;
    width: 35px;
    overflow: hidden;
    background: rgb(150,156,167);
    border-radius: 50%;
    text-align: center;
    .icon-11{
      position: absolute;
      left: 50%;
      bottom: -2px;
      transform: translateX(-50%);
      color: #fff;
      font-size: 26px;
    }
  }
  .gantanhao{
    color: rgb(0,122,255);
  }
</style>
