<template>
  <div class="littleCircle">
    <div class="click">
      <span class="wrap">
        <i class="iconfont icon-quan1">
          <i class="iconfont icon-quan"></i>
        </i>
      </span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'littleCircle',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">
  .click {
    position: relative;
    color: #fff;
    .wrap{
      position: absolute;
      z-index: 99999;
      width: 50px;
      height: 50px;
      left: 50%;
    }
    .icon-quan1 {
      position: absolute;
      /*z-index: 999;*/
      /*left: 50%;*/
      top: 0;
      opacity: .8;
      font-weight: 100;
      font-size: 30px;
    }
    .icon-quan {
      position: absolute;
      left: 23%;
      top: 25%;
      color: #fff;
      opacity: .8;
      transform: translate(-51%, -51%);
      animation: circleAnimate 1s;
      animation-iteration-count: infinite;
      /*animation-fill-mode: forwards*/
    }

  }

  @keyframes circleAnimate {
    from {
      transform: scale(0, 0);
      /*font-size: 16px;*/
    }
    to {
      transform: scale(2.5, 2.5);
      /*font-size: 30px;*/
    }
  }
</style>
