<template>
  <div id="app">
    <transition :name="slideName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        slideName: 'fade'
      }
    },
    watch: {
      '$route' (to , from){
          // if(to.path == '/msgContent'|| to.path == '/freeWorkMsg') {
          //   this.slideName = 'slide-right';
          // }
          // else if(to.path == '/desc'||to.path == '/iWantYou'){
          //   this.slideName = 'slide-bottom';
          // }
          // else{
          //   this.slideName = 'fade';
          // }
          this.slideName = 'slide-bottom'
      }
    }
  }
</script>

<style>
  body, div, ol, ul, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, p, form, fieldset, legend, input {
    margin: 0;
    padding: 0;
  }
  #app{
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  font-size:  12px;
 }
  .dis_flex{
    display: flex;
  }

  body {
    font-family: Helvetica,'Microsoft YaHei';
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }
  .slide-right-enter{
    transform: translate3d(100%,0,0);
  }
  .slide-right-enter-active{
    transition: all 5s;
  }
  .slide-right-leave-active{
    transition: transform   10s ease;
  }
  .slide-right-leave-to{
    transform: translate3d(-100%,0,0);
  }
  .slide-bottom-enter{
    transform: translate3d(0,100%,0);
  }
  .slide-bottom-enter-active{
    transition: transform 5s ease;
  }
/*  .slide-bottom-leave-active{
    transition: all 5s ease;
  }
  .slide-bottom-leave-to{
    transform: translate3d(0,-100%,0);
  }*/
</style>
