<template>
    <div>
      <!--头部-->
      <div class="toubu">
        <div class="topdiv clearfix">
          <img @click="jf" class="back" src="../../../static/image/zuojt.png" alt="">
          <span class="spjl">我的积分</span>
        </div>
        <div>
          <p class="sumIntergral">18</p>
          <span class="nowjf">当前积分</span>
        </div>
      </div>
      <div class="c"></div>
      <ul class="uls">
        <li>
          <span class="type">评价</span>
          <span class="rq">2018-8-10</span>
          <span class="fs high">+50</span>
        </li>
        <li>
          <span class="type">购物</span>
          <span class="rq">2018-8-10</span>
          <span class="fs low">-100</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "mypoints",
        data(){
          return{

          }
        },
        methods:{
          jf(){
            this.$router.push('/my');
          }
        },
        mounted(){
          //总积分
          var personId = localStorage.getItem('personId');
          //获取个人积分
          axios.get('http://wx.baronli.com/api/user/personId/'+personId).then((res)=>{
            //获取总积分
            //console.log(res.data['data']['userInfo'].intergral);
            $('.sumIntergral').html(res.data['data']['userInfo'].intergral);
            localStorage.setItem('sumIntergral',res.data['data']['userInfo'].intergral);
          });
        }
    }

</script>

<style scoped>
  .toubu{background-image:url(../../../static/image/tcs@2x.png); background-repeat:no-repeat; background-size:100% 100%;height: 45.2rem;}
  .topdiv{height: 8rem;width: 100%;line-height: 8rem;justify-content: space-between;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #ffffff;margin-left: 33%;}
  .back{width:2rem;height:3rem;margin-top:2.6rem;margin-bottom:2.3rem;margin-left: 3rem;float: left;}
  .toubu>div:nth-child(2){text-align: center;margin-top: 9rem;}
  .nowjf{font-family: PingFang-SC-Regular;font-size: 2.4rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.6rem;color: #fefefe;}
  .sumIntergral{font-family: FetteEngschrift;font-size: 16rem;font-weight: normal;font-stretch: normal;letter-spacing: 3.8rem;color: #ffffff;text-shadow:30px 10px 3px rgba(255, 255, 255, 0.4);}
  .c{width: 100%;height: 2rem;background-color: #b2b2b2;opacity: 0.25;}
  .low{font-family: PingFang-SC-Bold;font-size: 4rem;font-weight: bold;font-stretch: normal;letter-spacing: 1rem;color: #fd728c;}
  .high{font-family: PingFang-SC-Bold;font-size: 4rem;font-weight: bold;font-stretch: normal;letter-spacing: 1rem;color: #2269db;}
  .uls>li{border-bottom: 1px solid #b2b2b2;height:16rem;position: relative;overflow: hidden;}
  .type{position: absolute;left: 2.9rem;top:5.1rem;font-size: 3.2rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.8rem;color: #353535;}
  .rq{position: absolute;left: 2.9rem;top:9.9rem;font-family: PingFang-SC-Regular;font-size: 2.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0rem;color: #888888;}
  .fs{position: absolute;right: 5.2rem;top:6.9rem;}
</style>
