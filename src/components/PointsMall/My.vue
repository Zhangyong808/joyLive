<template>
    <div>
      <!--头像-->
      <div class="toubu" style="background-image: url('../../../static/image/tc@2x.png');display: table;width: 100%;" :style ="note">
        <p class="ptx" style="display: table-cell;
vertical-align: middle;text-align: center">
          <img src="../../../static/image/2-1tijiaobaoxiu@2x.png" alt=""><br>
          <span class="names"></span>
        </p>
      </div>
      <!--中部内容部分-->
      <div class="xx" @click="myads">
        <img src="../../../static/image/ads@2x.png" alt="">
        <span>我的地址</span>
      </div>
      <div class="xx" @click="mycash">
        <img src="../../../static/image/dh@2x.png" alt="">
        <span>我的兑换</span>
      </div>
      <div class="xx" @click="mypoints">
        <img src="../../../static/image/jf@2x.png" alt="">
        <span>我的积分</span>
      </div>
      <!--底部-->
      <Footers :maincontent="src1" :mall="src2" :my="src3" ></Footers>
    </div>
</template>

<script>
    import Footers from './Footers'
    export default {
        name: "my",
        components:{Footers},
        data(){
          return{
            src1:"../../../static/image/01.png",
            src2:"../../../static/image/02.png",
            src3:"../../../static/image/03_selected.png",
            note: {
              backgroundImage: "url(" + require("../../../static/image/tc@2x.png") + ")"
            },
          }
        },
        methods: {
          myads() {
            this.$router.push('/myads');
          },
          mycash() {
            this.$router.push('/mycash');
          },
          mypoints() {
            this.$router.push('/mypoints');
          }
        },
       mounted(){
         var personId = localStorage.getItem('personId');
          //console.log(personId);
          //获取个人信息
          axios.get('http://wx.baronli.com/api/user/personId/'+personId).then((res)=>{
            //console.log(res.data);
           //console.log(res.data['data']['userInfo'].receiverAddress);
           $('.names').html(res.data['data']['userInfo'].name);
           //获取总积分
           localStorage.setItem('sumIntergral',res.data['data']['userInfo'].intergral);
         });
       }
    }

</script>

<style scoped>
  .toubu{background-repeat:no-repeat;background-size: cover; margin-bottom: 2rem;height: 45.2rem;}
  .ptx>img{width: 20rem;height: 20rem;border-radius: 50%;}
  .names{font-family: PingFang-SC-Regular;font-size: 3.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #ffffff;}
  .xx{width: 100%;height: 5rem;margin-bottom: 5rem;overflow: hidden;line-height: 5rem;}
  .xx>img{width: 4.2rem;height: 4.4rem;margin-left: 5.8rem;float: left;}
  .xx>span{font-family: PingFang-SC-Regular;font-size: 3.2rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;margin-left: 3rem;}
</style>
