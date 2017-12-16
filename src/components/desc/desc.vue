<template>
  <div class="desc" @click="jump">
    <div class="container">
      <transition name="slide-right">
        <div class="title" v-show="first">
          来借箭
        </div>
      </transition>

      <transition name="slide-right">
        <div class="title" v-show="second">
          <div class="title-container">
            互联网高级人才共享平台
          </div>
        </div>
      </transition>

      <transition name="slide-right">
        <div class="self-container" v-show="three">
          <div class="self" ref='selfItems'>
          <span class='self-item'>
        自我经营
      </span>
            <span class='self-item'>
        树立品牌
      </span>
            <span class='self-item'>
        实现个人价值最大化
      </span>
          </div>
        </div>
      </transition>


      <div class="article">
        <transition name="slide-right">
          <div class="article-item" v-show="four">
            <strong class="strong">
              这里有更赚自由的工作>
            </strong>
            <span>突破困局，更自由的工作方式</span>
          </div>
        </transition>
        <transition name="slide-right">
          <div class="article-item" v-show="five">
            <strong class="strong">
              这里有更赚名气的工作>
            </strong>
            <span>树立品牌，扩大行业影响力</span>
          </div>
        </transition>

        <transition name="slide-right">
          <div class="article-item" v-show="six">
            <strong class="strong">
              这里有更赚 Money 的工作>
            </strong>
            <span>增加收入，提高生活品质</span>
          </div>
        </transition>

        <div class="clickMe animated slideInRight" v-if="three">
          点击继续
          <little-circle></little-circle>
        </div>



      </div>
    </div>

  </div>
</template>
<style lang="scss">
  .animated {
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
  }
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
  import littleCircle from '../littleCircle.vue'
  import '../../../node_modules/animate.css/animate.min.css'
  export default {
    name: 'desc',
    components: {
      littleCircle
    },
    data () {
      return {
        first: false,
        second: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        isCanJump: false
      }
    },
    mounted() {
      let _this = this;
      this.$nextTick(() => {
          let time = 800;

          setTimeout(()=>{
              _this.first = true;
              setTimeout(() =>{
                  _this.second = true;
                  setTimeout(() =>{
                      _this.three = true;
                      setTimeout(() =>{
                          _this.four = true;
                          setTimeout(()=> {
                              _this.five = true;
                              setTimeout(() =>{
                                  _this.six = true;
                                  _this.isCanJump = true;
                              },time)
                          },time)
                      },time)
                  },time)
              },time)
          },time)

      });
    },
    methods: {
        jump (){
            if(this.isCanJump){
              this.$router.push("/iWantYou");
            }
        }
    }
  }
</script>


<style scoped lang="scss">
  .desc {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: .4rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    font-size: 12px;
    background: url(../../../static/images/bg1.jpg) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .container {
    float: left;
  }

  .desc .title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    color: rgb(37, 131, 190);
    line-height: 1.7;

  }

  .title-container {
    text-align: justify;
    text-align-last: justify;
  }

  $role-height: 20px;
  .self-container {
    padding-bottom: $role-height;
  }

  .self {
    margin-top: 4px;
    font-size: 13px;
    color: rgb(37, 131, 190);
    justify-content: space-between;
    border-bottom: 1px solid rgb(37, 131, 190);
    padding-bottom: $role-height;
    text-align: justify;
    text-align-last: justify;
  }

  .article-item {
    font-size: 12px;
    text-align: justify;
    text-align-last: justify;
    color: rgb(37, 131, 190);
    line-height: 2;
    .strong {
      font-size: 10px;
    }

  }

  .slide-right-enter {
    transform: translate3d(100%, 0, 0);
  }

  .slide-right-enter-active {
    transition: transform .5s ease;
  }
</style>
