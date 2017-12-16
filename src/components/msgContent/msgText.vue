<template>
  <div class="msgText">
      <div class="msg-text">
        <slot>
          您账户8888于07月31
          日10:30入账工资,人
          民币30,000
          <strong>
            【招商银行】
          </strong>
        </slot>
      </div>
  </div>
</template>


<script>
  export default {
    name: 'msgText',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">
  .msgText{
    padding-left: .2rem;
  }
  .msg-text {
    font-weight: 500;
    padding: .2rem .4rem;
    max-width: 260px;
    border-radius: 15px 15px 15px 0;
    line-height: 1.5;
    background: rgb(229,229,229);
  }
</style>
