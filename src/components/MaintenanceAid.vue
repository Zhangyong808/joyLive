<template>
    <div>
      <!--头部-->
      <div class="topdiv clearfix">
        <img class="back" src="../../static/image/33176866-BD9E-4847-A2FF-3078ED9B9A48@2x.png" alt="">
        <span class="spback">返回</span>
        <span class="spjl">维保救援</span>
        <img class="share" src="../../static/image/715843DB-B3F1-4FD5-B8C0-EE61598CAEDF@2x.png" alt="">
      </div>
      <!--二维码-->
      <div class="swm">
        <img class="swmimg1" src="../../static/image/ED142E67-7237-4B01-A9C5-F73641072695@2x.png" alt="">
        <img class="swmimg2" src="../../static/image/DC018165-5721-4122-BBAC-6C6B767E198D@2x.png" alt="">
        <p class="swmp">扫描二维码查看救援</p>
      </div>
      <!--小区名称-->
      <div class="swm">
        <p class="xiaoqu">小区名称</p>
        <input class="xiaoquname" type="text" placeholder="在此输入小区名称，按确认键继续">
        <div class="ensure">确认</div>
        <img class="swmimg1s" src="../../static/image/5-2weibaojiuyuan@fuben2x.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "maintenance-aid"
    }
</script>

<style scoped>
  .topdiv{background:#333333;color: white;}
  .spback{font-size: 3.4rem;float:left; margin-left: 1.2rem;margin-top: 2.2rem;}
  .spjl{font-size: 4rem;float:left;margin-top: 1.8rem;margin-left: 25%;}
  .back{width:2.5rem;height:4.2rem;margin-left: 1.7rem;margin-top:2.2rem;margin-bottom:2.3rem;float:left;}
  .share{width:4rem;height:1rem;float:right;margin-right: 3rem;margin-top: 4rem;margin-bottom: 3.8rem;}
  .swm{width: 68.2rem;height: 43.2rem;position: relative;text-align: center;margin-top: 6.2rem;margin-left: 4.5%;}
  .swmimg1{width: 100%;height: 100%;}
  .swmimg1s{width: 100%;height: 30rem;}
  .swmimg2{width: 8.8rem;height: 6.4rem;z-index: 2;position:absolute;left: 29.8rem;
    top: 14.4rem;}
  .swmp{font-family:PingFangSC-Medium;font-size:4rem;color:#ffffff;position: absolute;left:16.2rem;top: 23.2rem;}
  .xiaoqu{font-family:PingFangSC-Medium;font-size:4rem;color:#ffffff;position: absolute;left:26.5rem;top: 2rem;}
  .xiaoquname{position: absolute;left:1rem;top: 8.5rem;background:#ffffff;width:65.8rem;height:7.6rem;font-family:PingFangSC-Regular;font-size:2.8rem;text-align:center;}
  .xiaoquname::placeholder{color: #ccc;font-family:PingFangSC-Regular;font-size:2.8rem;}
  .ensure{background:#ff3b30;width:21.6rem;height:8rem;position: absolute;right:1.5rem;top:20rem;font-family:PingFangSC-Medium;font-size:3.6rem;color:#ffffff;text-align:center;line-height: 8rem;}
</style>
