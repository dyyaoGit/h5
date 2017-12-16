<template>
  <div class="msgContentBottom">
    <div class="add">
      <i class="iconfont icon-iconjia"></i>
    </div>
    <div class="input">
      <div class="input-content">
        短信/彩信
      </div>
    </div>
    <div class="send">
      <i class="iconfont icon-icon-"></i>
    </div>
  </div>
</template>

<style lang="scss">
  .msgContentBottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f5f5f5;
    height: 40px;
  }
  .add,.send{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-iconjia,.icon-icon-{
    font-size: 22px;
    color: #7b7b7b;
  }
  .input{
    /*border: 1px solid #f1f1f1;*/
    flex: 6;

    .input-content{
      padding: 5px;
      font-size: 15px;
      color: #7b7b7b;
      border: 1px solid #f1f1f1;
    }
  }
</style>

<script>
  export default {
    name: 'msgContentBottom',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">

</style>
