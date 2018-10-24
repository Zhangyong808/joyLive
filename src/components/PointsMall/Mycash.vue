<template>
   <div>
     <!--头部-->
     <div class="topdiv clearfix">
       <img @click="backmy"  class="back" src="../../../static/image/yjt.png" alt="">
       <span class="spjl">我的兑换</span>
     </div>
     <!--兑换部分-->
     <div v-for="(item,index) in arr" style="position:relative;border-bottom: 10px solid lightgrey;">
       <div class="ss">
         <img src="../../../static/image/goodssmall.png" alt="">
       </div>
       <div class="zj" style="position: absolute;right: 2rem;top:2rem;font-size: 3.5rem;">
         <span>共</span><span class="numspan">1</span><span>件商品；</span><span>实付：</span><span class="sumjf" style="color: #fd728c;">{{item.integralNumber}}</span><span>积分</span>
       </div>
       <div class="divdb" style="position: absolute;right:3rem;top:4.5rem;font-size: 3.5rem;color: grey;">查看物流
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "mycash",
        data(){
          return{
            arr:[]
          }
        },
        methods:{
          backmy(){
            this.$router.push('/my');
          },
          aga(){
            history.go(-1)
          }
        },
        mounted(){
          //获取兑换列表
          var personId = localStorage.getItem('personId');
          axios.get('http://wx.baronli.com/api/orders/getOrders?personId='+personId).then((res)=>{
            this.arr = res.data.data;
            for(var i=0;i<this.arr.length;i++){
            };
          });
        }
    }

</script>

<style scoped>
  .topdiv{height: 8rem;width: 100%;line-height: 8rem;justify-content: space-between;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #353535;margin-left: 30%;}
  .back{width:2rem;height:2.8rem;margin-top:2.6rem;margin-bottom:2.3rem;margin-left: 3rem;float: left;}
  .rq{font-size: 2.8rem;margin-left:2.9rem;letter-spacing: 0.2rem;color: #888888;}
  .sffh{font-size: 2.8rem;letter-spacing: 0.2rem;color: #fd728c;margin-left: 20rem;margin-right: 3rem;}
  .shares{width: 3rem;height: 3rem;margin-top: -2%;}
  .ss{background-color:rgb(235,235,235,0.2);margin-top: 3.5rem;overflow: hidden;}
  .ss>img{width: 13.3rem;height: 13.3rem;margin-top: 1rem;}
  .goodsname{font-size: 3.2rem;font-weight: bold;letter-spacing: 0.2rem;color: #353535;}
  .cs{font-size: 2.8rem;letter-spacing: 0.2rem;color: #888888;float: left;margin-left: 26%;margin-top: -10%;}
  .color{margin-left: 39%;}
  .zj{text-align: right;font-size: 2.8rem;letter-spacing: 0.2rem;color: #888888;}
  .divdb{height: 10rem;line-height: 10rem;}
  .delte{width: 3rem;height: 3.6rem;margin-left: 6.9rem;}
  .wl{font-size: 2.8rem;letter-spacing: 0.2rem;color: #888888;margin-left: 20%;}
  .aga{font-size: 2.8rem;letter-spacing: 0.2rem;color: #fd728c;margin-left: 5%;border-radius: 28px;border: solid 2px #fd728c;padding: 1.4rem 4.7rem;}
</style>
