<template>
  <div class="test" ref="wrapper">
    <ul>
      <li>
        <!--时间开始-->
        <div class="times">
          <div class="hour-minus">
            {{hour + ":" + minus}}
          </div>
          <div class="month-week">
            {{month + "月" + day + "日&nbsp;" + "星期" + week}}
          </div>
          <div class="year">
            丁酉年{{CNMonth}}月{{CNDay}}日
          </div>
        </div>
        <!--时间结束-->
        <little-circle @click.native="showNext" v-if='isShowMsg'></little-circle>
        <iphone-msg @click.native="showNext" class='animated bounceIn'></iphone-msg>

        <iphone-msg v-if='isShowSecond' class='animated bounceIn'>您账户8888于07月31日10:30入账工资，人民币30,000【招商银行】</iphone-msg>

        <audio controls="controls" ref="audio" style="display: none">
          <source src="../../static/wmv/4085.mp3" type="audio/mp3">
          Your browser does not support the audio tag.
        </audio>
      </li>
    </ul>
  </div>
</template>

<script>
  import iphoneMsg from './iphoneMsg.vue'   //短信组件
  import littleCircle from './littleCircle.vue'
  import wx from 'weixin-js-sdk'
  import '../../node_modules/animate.css/animate.min.css'
//  import BScroll from 'better-scroll'
//  import '../../node_modules/animate.css/animate.min.css'
  export default {
    name: 'test',
    components:{
      iphoneMsg,
      littleCircle
    },
    data () {
      return {
        hour: '',
        minus: '',
        month: '',
        day: '',
        week: '',
        CNMonth: '',
        CNDay: '15',
        isShowMsg: false,
        isShowSecond: false
      }
    },
    methods:{
      showNext(){
          this.$router.push('/msgContent');
      }
    },
    created(){
      let myDate = new Date();
      let weekDay = ['日', '一', '二', '三', '四', '五', '六'];
      let CNMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
      let CNDay = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一'];
      this.hour = myDate.getHours();
      this.minus = myDate.getMinutes()>10? myDate.getMinutes():('0'+myDate.getMinutes());
      this.month = myDate.getMonth() + 1;
      this.day = myDate.getDate();
      this.week = weekDay[myDate.getDay()];
      this.CNMonth = CNMonth[this.month - 1];
      this.CNDay = CNDay[this.day];
    },
    mounted(){
//      var scroll = {};
      let _this = this;
//      this.$nextTick(() => {
//        setTimeout(() => {
//          console.log(_this.$refs.wrapper);
//          scroll = new BScroll(_this.$refs.wrapper, {
//            startX: 0,
//            startY: 0,
//            snap: true,
//            scrollY: true,
//            preventDefaultException: { tagName: /^(INPUT|LI|TEXTAREA|BUTTON|SELECT|DIV)$/ }
//          });
//        }, 100);
////          setTimeout(() => {
//////            scroll.goToPage('0','1');
////            console.log()
////          },2000);
//      });

      //        初始化微信SDK
      this.axios.post('http://api.jiejianwork.com/wxserv/wx-pay/jsapi-pay-init',{"url": location.href}).then(res => {
        console.log(res.data);
        let wxJson = res.data;
        wxJson.jsApiList = [];
        wx.config(wxJson);
        wx.ready(() => {
          setTimeout(() => {
            _this.$refs.audio.play();
            _this.isShowMsg = true;
          },1000);
          setTimeout(() => {
             _this.$refs.audio.play();
            _this.isShowSecond = true;
          },2000)

            // _this.
            // setTimeout(() => {
            //     _this.$router.push('/msgContent');
            // },7000)
        })
      }).catch(err => {
          alert(err);
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 750px;
    overflow: hidden;
  }

  .test li:first-child {
    overflow: hidden; /*修复margin的bug*/
    background: url(../../static/images/1.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    list-style: none;
    height: 100%;
  }

  .test img {
    display: block;
    width: 100%;
  }

  .test ul {
    height: 100%;
  }

  .times {
    margin: .2rem auto .1rem;
    text-align: center;
    color: #fff;
  }

  .hour-minus {
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    color: #fff;
  }

  .month-week {
    font-size: 20px;
    font-weight: 200;
  }

  .year {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: .3rem;
  }
</style>
