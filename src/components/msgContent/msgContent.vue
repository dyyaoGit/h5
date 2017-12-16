<template>
  <div class="msgContent" @click="goNext">
<!--     <mt-popup class="slideMsg" v-model="pushMsg" position="top">
      <iphone-msg style="background: rgba(255,255,255,.8);">
        文案：
        您好，借箭向您发来一
        项运营总监任务邀约，
        周期两周，薪资人民币50,000
        详情
        http://www.jiejianwork...
        <div slot="scan"></div>
      </iphone-msg>
    </mt-popup> -->
    <audio controls="controls" ref="audio" style="display: none">
      <source src="../../../static/wmv/4085.mp3" type="audio/mp3">
      Your browser does not support the audio tag.
    </audio>

    <msg-nav></msg-nav>

    <div class="iMessage">
      iMessage
      <div class="data">
        今天 下午6:18
      </div>
    </div>

    <msg-text></msg-text>

    <div class="iMessage">
      iMessage
      <div class="data">
        今天 下午6:23
      </div>
    </div>

    <msg-text>
      您账户9999于07月31
      日12:00入账人民币100,000
      <strong>
      【借箭】
    </strong>
    </msg-text>

    <msg-content-bottom class="bt"></msg-content-bottom>

  </div>
</template>
<script>
  // import { Popup } from 'mint-ui'
  // import wx from 'weixin-js-sdk'
  import msgNav from './msgNav.vue'
  import iphoneMsg from '../iphoneMsg.vue'
  import msgText from './msgText.vue'
  import msgContentBottom from './msgContentBottom.vue'

  export default {
    name: 'msgContent',
    components: {
      msgNav,
      msgText,
      msgContentBottom,
      iphoneMsg,
      // mtPopup:Popup
    },
    data () {
      return {
          pushMsg: false
      }
    },
    methods:{
      goNext(){
          this.$router.push("/freeWorkMsg");
      }
    },
    mounted(){
        let _this = this;

      //        初始化微信SDK
//       this.axios.post('http://api.jiejianwork.com/wxserv/wx-pay/jsapi-pay-init',{"url": location.href}).then(res => {
//         // console.log(res.data);
//         let wxJson = res.data;
//         wxJson.jsApiList = [];
//         wx.config(wxJson);
//         wx.ready(() => {
//             setTimeout(() => {
//               // _this.$refs.audio.play();
//               _this.pushMsg = true;
// //              setTimeout(() => {
// //                _this.pushMsg = false;
// //              },2000)
//             },2000);
//         })
//       }).catch(err => {
//         alert(err);
//       })
    }
  }
</script>


<style scoped lang="scss">
  .msgContent {
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
  .bt{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
  }
  .slideMsg{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
  }
</style>
