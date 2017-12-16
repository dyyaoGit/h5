<template>
  <div class="freeWorkMsg" @click="jump">
    <audio controls="controls" ref="audio" style="display: none">
      <source src="../../../static/wmv/4085.mp3" type="audio/mp3">
      Your browser does not support the audio tag.
    </audio>
    <msg-nav>
      <div slot="default"
           style="text-align: center;position: absolute;bottom: 0;left: 50%;top: 50%; transform: translate(-50%,-50%);word-break: keep-all">
        借箭
      </div>
      <div slot="phone-nunber" style="text-align: center;">借箭</div>
    </msg-nav>

    <div class="iMessage">
      iMessage
      <div class="data">
        今天 下午6:18
      </div>
    </div>

    <msg-text class="animated flash">
      您好，借箭向您发来一
      项运营总监任务邀约，
      周期两周，薪资人民币50,000
      详情
      <span class="link">
        http://www.jiejianwork.com
      </span>
      【借箭】
    </msg-text>

    <div class="iMessage" v-if="isTimeShow">
      iMessage
      <div class="data">
        今天 下午6:23
      </div>
    </div>



    <msg-text class="animated flash" v-if="isTimeShow">
      您好，借箭向您发来
      产品经理任务邀约，
      工作地点自由，时薪人民币
      2,000
      详情
      <span class="link">
        http://www.jiejianwork.com
      </span>
      【借箭】
    </msg-text>

    <msg-content-bottom class="bt"></msg-content-bottom>
    <div class="clickMe animated flip" v-if="isPush">
      点击继续
      <little-circle></little-circle>
    </div>


      <!--<div class="logo" >-->
        <!--<transition name="zoom">-->
          <!--<img src="../../../static/images/logo1.png" alt="logo" v-if="isPush">-->
        <!--</transition>-->
      <!--</div>-->

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

  .logo{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 50px;
    height: 50px;
    img{
      width: 100%;
      display: block;
    }
  }
  .startAnimate{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>


<script>
  import '../../../node_modules/animate.css/animate.min.css'
  import littleCircle from '../littleCircle.vue'
  import wx from 'weixin-js-sdk'
  import '../../../node_modules/animate.css/animate.min.css'
  import msgNav from './msgNav.vue'
  import iphoneMsg from '../iphoneMsg.vue'
  import msgText from './msgText.vue'
  import msgContentBottom from './msgContentBottom.vue'

  export default {
    name: 'freeWorkMsg',
    components: {
      msgNav,
      msgText,
      msgContentBottom,
      iphoneMsg,
      littleCircle
    },
    data () {
      return {
        isTimeShow: false,
        isPush: false,
        three: true
      }
    },
    mounted(){
      let _this = this;

      this.axios.post('http://api.jiejianwork.com/wxserv/wx-pay/jsapi-pay-init', {"url": location.href}).then(res => {
        // console.log(res.data);
        let wxJson = res.data;
        wxJson.jsApiList = [];
        wx.config(wxJson);
        wx.ready(() => {
          setTimeout(() => {
            _this.$refs.audio.play();
            _this.isTimeShow = true;
            setTimeout(() => {
              _this.$refs.audio.play();
//              _this.isTimeShow = true;
            }, 1500)
          }, 1000);
        })
      }).catch(err => {
        alert(err);
      })
    },
    watch: {
      isTimeShow(val){
          let _this = this;
          if(val){
            setTimeout(() => {
              _this.isPush = true;
            },3000);
          }

      }
    },
    methods:{
      jump(){
          if(this.isPush){
             this.$router.push('/logo') ;
          }
      }
    }
  }
</script>


<style scoped lang="scss">
  .freeWorkMsg {
    background: #f1f1f1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 750px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    font-size: 12px;
  }

  .iMessage {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    color: #7b7b7b;
    font-size: 12px;
    .data {
      font-size: 12px;
    }
  }

  .bt {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .link {
    color: rgb(39, 110, 187);
    text-decoration: underline;
  }
</style>
