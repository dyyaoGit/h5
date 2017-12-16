<template>
  <div class="iWantYou">
    <div class="content">
      <div class="first-text animated flip" v-if="first">
        <span>
           各位业界专家
        </span>
      </div>
      <transition name="slide-right">
        <div class="img-text" v-if="second">
          <img src="../../../static/images/text.png" alt="text">
        </div>
      </transition>


      <transition name="slide-right">
        <div class="role" v-if="three"></div>
      </transition>

      <transition name="slide-right">
        <div class="erwema" v-if="four">
          <div class="wx1">
            <img src="../../../static/images/wx1.jpg" alt="wx">
          </div>
          <div class="wx2">
            <img src="../../../static/images/wx2.jpg" alt="wx">
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    width: 7.6em;

    box-sizing: border-box;
    color: #000;
    letter-spacing: 0.2em;
    font-size: 16px;
    .first-text {
      span {
        padding: .2em;
        display: inline-block;
        background: #fff;
      }
    }
    .img-text {
      margin-top: .2rem;
    }
    img {
      width: 100%;
    }
  }

  .erwema {
    display: flex;
    justify-content: space-between;
    .wx2 {
      margin-left: .1rem;
    }
  }

  .role {
    height: 1px;
    background: #fff;
    margin: 10px 0;
  }
</style>

<script>
  import '../../../node_modules/animate.css/animate.min.css'
  export default {
    name: 'iWantYou',
    data () {
      return {
        first: false,
        second: false,
        three: false,
        four: false
      }
    },
    mounted() {
        let _this = this;
        this.$nextTick(()=>{
            let time = 2000;
            setTimeout(() =>{
                _this.first = true;
                setTimeout(()=>{
                    _this.second = true;
                    setTimeout(() => {
                        _this.three = true;
                        setTimeout(() =>{
                            _this.four = true;
                        },time)
                    },time)
                },time)
            },time)
        })
    }
  }
</script>


<style scoped lang="scss">
  .iWantYou {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: .4rem;
    font-size: 12px;
    background: url(../../../static/images/iwantyou.jpg) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

</style>
