<template>
  <div>
    <!--头部-->
    <div class="topdiv clearfix">
      <img class="back" src="../../static/image/33176866-BD9E-4847-A2FF-3078ED9B9A48@2x.png" alt="">
      <span class="spback">返回</span>
      <span class="spjl">提交报修</span>
      <img class="share" src="../../static/image/715843DB-B3F1-4FD5-B8C0-EE61598CAEDF@2x.png" alt="">
    </div>
    <!--二维码-->
    <div class="swm" @click="binding">
      <img class="swmimg1" src="../../static/image/CDCB82EC-4E4E-4CEC-B47C-C0A753E7CC77@2x.png" alt="">
      <img class="swmimg2" src="../../static/image/F1FAD2E8-7309-4BE2-B25D-DD676350630D@2x.png" alt="">
      <p class="swmp" >已有平台账户前往绑定</p>
    </div>
    <!--查看实时数据-->
    <div class="swm">
      <img class="swmimg1" src="../../static/image/55E16027-2E11-4B5D-B5B5-1B9B7B73399C@2x.png" alt="">
      <img class="swmimg2s" src="../../static/image/DC018165-5721-4122-BBAC-6C6B767E198D@2x.png" alt="">
      <p class="swmp" @click="">扫描二维码查看实时数据</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "joylivebefore",
        data(){
          return{
           arr:[]
          }
        },
        methods:{
          binding(){
            this.$router.push('/joylive');
          }
        }
    }
</script>

<style scoped>
  .topdiv{background:#333333;color: white;}
  .spback{font-size: 3.4rem;float:left; margin-left: 1.2rem;margin-top: 2.2rem;}
  .spjl{font-size: 4rem;float:left;margin-top: 1.8rem;margin-left: 25%;}
  .back{width:2.5rem;height:4.2rem;margin-left: 1.7rem;margin-top:2.2rem;margin-bottom:2.3rem;float:left;}
  .share{width:4rem;height:1rem;float:right;margin-right: 3rem;margin-top: 4rem;margin-bottom: 3.8rem;}
  .clearfix:after{content:"";height:0;line-height:0;display:block;visibility:hidden;clear:both;}
  .clearfix{zoom:1;}
  .swm{width: 68.2rem;height: 43.2rem;position: relative;text-align: center;margin-top: 6.2rem;margin-left: 4.5%;}
  .swmimg1{width: 100%;height: 100%;}
  .swmimg2{width: 8.8rem;height: 2.4rem;z-index: 2;position:absolute;left: 29.8rem;top: 14.4rem;}
  .swmimg2s{width: 8.8rem;height: 6.4rem;z-index: 2;position:absolute;left: 29.8rem;top: 14.4rem;}
  .swmp{font-family:PingFangSC-Medium;font-size:4rem;color:#ffffff;position: absolute;left: 20.8%;top: 23.2rem;}

</style>
