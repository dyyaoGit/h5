<template>
  <div class="logo" @click="jump">
    <h1 class="logo-wrap">
      <img src="../../../static/images/logo1.png" alt="logo" v-show="first" class="animated zoomIn">
      <div class="desc animated rotateInDownRight" v-show="second">
        让智慧流动起来
      </div>
    </h1>

    <div class="clickMe animated slideInRight" v-if="three">
      点击继续
      <little-circle></little-circle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .clickMe{
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    font-size: 16px;
    text-align: center;
    color: dodgerblue;
  }
</style>
<script>
  import '../../../node_modules/animate.css/animate.min.css'
  import littleCircle from '../littleCircle.vue'
  export default {
    name: 'logo',
    components: {
      littleCircle
    },
    data () {
      return {
        first: false,
        second: false,
        three: false,
        canJump: false
      }
    },
    mounted() {
        let _this = this;
      this.$nextTick(()=>{
          let time = 1000;
          setTimeout(() =>{
              _this.first = true;
              setTimeout(() => {
                  _this.second = true;
                  setTimeout(()=>{
                    _this.three = true;
                    _this.canJump = true;
                  },time)
              },time)
          },time)
      })
    },
    methods: {
        jump() {
          if(this.canJump){
              this.$router.push('/desc')
          }
      }
    }
  }
</script>


<style scoped lang="scss">
  .logo{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 750px;
    padding: .4rem;
    box-sizing: border-box;
    margin: 0 auto;
    background: url(../../../static/images/logobg.jpg) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .logo-wrap{
    width: 1.8rem;
    font-size: 12px;
    img{
      width: 100%;
      display: block;
    }
  }
  .desc{
    border-top: 1px solid #000;
    /*letter-spacing: 2px;*/
    margin-top: .3rem;
    padding-top: .2rem;
    text-align: justify;
    text-align-last: justify;
  }
</style>
