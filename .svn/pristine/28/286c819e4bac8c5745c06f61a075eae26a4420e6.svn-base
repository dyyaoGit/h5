<template>
  <div class="start">

    <div class="start-logo animated flip">
      <img class="logo" src="../../../static/images/logo1.png" alt="LOGO">
    </div>


    <h1 class="desc">
      <div class="text animated rubberBand" v-if="isPushTitle">借箭—互联网高级人才共享平台</div>
      <div class="animated rubberBand" v-if="isPushContent">
        让智慧流动起来
      </div>
    </h1>
  </div>
</template>

<script>
  import '../../../node_modules/animate.css/animate.min.css'
export default {
  name: 'start',
  data () {
    return {
      isPushTitle: false,
      isPushContent: false
    }
  },
  mounted(){
    let _this = this;
    setTimeout(() => {
        _this.isPushTitle = true;
        setTimeout(() => {
          _this.isPushContent = true;
        },2000)
    },2000)
  }
}
</script>


<style scoped>
  .text{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }
.start{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 750px;
  margin: 0 auto;
  background: url(../../../static/images/logo.png) no-repeat;
  -webkit-background-size: 100%;
  background-size: 100% 100%;
}
.start-logo{
  position: absolute;
  top: 23.73%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 2.32rem;
}
  .logo{
    display: block;
    width: 100%;
  }

.desc{
  position: absolute;
  right: 0;
  bottom: 20%;
  left: 0;
  margin: 0 auto;
  text-align: center;
  font-family: Arial,Verdana,Sans-serif;
  font-size: 17px;
  font-weight: 600;
}
@media screen and (max-width:321px){
  .desc{font-size:14px}
}
@media screen and (min-width:321px) and (max-width:400px){
  .desc{font-size:17px}
}
@media screen and (min-width:415px){
  .desc{font-size:20px}
}
</style>
