<template>
     <div>
       <!--头部-->
       <div class="tou">
         <ul class="proflow">
           <li @click="show($event)" class="firstli">全部</li>
           <li @click="show($event)">未评价</li>
           <li @click="show($event)">已评价</li>
         </ul>
         <img v-show="bol1" class="circle1" src="../../../static/image/circle.png" alt="">
         <img v-show="bol2" class="circle2" src="../../../static/image/circle.png" alt="">
         <img v-show="bol3" class="circle3" src="../../../static/image/circle.png" alt="">
         <!--全部-->
         <div v-show="bol1" class="bg">
           <div class="orderDetails" v-for="(item,index) in arr1"><!--小区--><p>{{item.alias}}</p><label style="display: none" for="">{{item.id}}</label><!--详情--><ul class="details"><li><span>完成时间</span><span>{{item.completetime}}</span></li><li><span>工单类型</span><span class="status"></span></li><li><span>维保员</span><span>{{item.name}}</span></li><li><span>电梯编号</span><span>{{item.elevatorNumber}}</span></li></ul><!--操作--><div class="handle"><span class="gopj" @click="goevaluate($event)">去评价</span><span class="line">｜</span><span class="moredet"  @click="moredet($event)">详情</span></div></div>
           <div class="orderDetails" v-for="(item,index) in arr2">
             <!--小区-->
             <p>{{item.alias}}</p>
             <label style="display: none" for="">{{item.id}}</label>
             <!--详情-->
             <ul class="details">
               <li>
                 <span>完成时间</span>
                 <span>{{item.completetime}}</span>
               </li>
               <li>
                 <span>工单类型</span>
                 <span class="status"></span>
               </li>
               <li>
                 <span>维保员</span>
                 <span>{{item.name}}</span>
               </li>
               <li>
                 <span>电梯编号</span>
                 <span>{{item.elevatorNumber}}</span>
               </li>
             </ul>
             <!--操作-->
             <div class="handle">
               <span class="del">已评价</span>
               <span class="line">｜</span>
               <span class="moredet" @click="moredets($event)">详情</span>
             </div>
           </div>
         </div>
         <!--未评价-->
         <div v-show="bol2" class="bg" id="#tab2" >
           <div class="orderDetails" v-for="(item,index) in arr1"><!--小区--><p>{{item.alias}}</p><label style="display: none" for="">{{item.id}}</label><!--详情--><ul class="details"><li><span>完成时间</span><span>{{item.completetime}}</span></li><li><span>工单类型</span><span class="status"></span></li><li><span>维保员</span><span>{{item.name}}</span></li><li><span>电梯编号</span><span>{{item.elevatorNumber}}</span></li></ul><!--操作--><div class="handle"><span class="gopj" @click="goevaluate($event)">去评价</span><span class="line">｜</span><span class="moredet"  @click="moredet($event)">详情</span></div></div>
         </div>
         <!--已评价-->
         <div v-show="bol3" class="bg" >
           <!--已评价详情-->
           <div class="orderDetails" v-for="(item,index) in arr2">
             <!--小区-->
             <p>{{item.alias}}</p>
             <label style="display: none" for="">{{item.id}}</label>
             <!--详情-->
             <ul class="details">
               <li>
                 <span>完成时间</span>
                 <span>{{item.completetime}}</span>
               </li>
               <li>
                 <span>工单类型</span>
                 <span class="status"></span>
               </li>
               <li>
                 <span>维保员</span>
                 <span>{{item.name}}</span>
               </li>
               <li>
                 <span>电梯编号</span>
                 <span>{{item.elevatorNumber}}</span>
               </li>
             </ul>
             <!--操作-->
             <div class="handle">
               <span class="del">已评价</span>
               <span class="line">｜</span>
               <span class="moredet" @click="moredets($event)" >详情</span>
             </div>
           </div>
         </div>
       </div>
       <!--底部-->
       <Footers :maincontent="src1" :mall="src2" :my="src3" ></Footers>
     </div>
</template>

<script>
    import Footers from './Footers'
    export default {
        name: "main-content",
        components:{Footers},
        data(){
          return{
            bol1:true,
            bol2:false,
            bol3:false,
            src1:"../../../static/image/01_selected.png",
            src2:"../../../static/image/02.png",
            src3:"../../../static/image/03.png",
            arr:[],//全部
            arr1:[],//待评价
            arr2:[] //已评价
          }
        },
      methods:{
        show(e){
          var li = document.getElementsByTagName('li');
          for(var i = 0;i < li.length;i++){
            li[i].index = i;
            li[i].style.color="#888";
            li[i].style.fontSize="3rem";
            li[i].style.fontWeight="normal";
          }
          e.target.style.color="#333";
          e.target.style.fontSize="3.6rem";
          e.target.style.fontWeight="bold";
          if(e.target.innerHTML == "全部"){
            this.bol1 = true;
            this.bol2 = false;
            this.bol3 = false;
          }
          if(e.target.innerHTML == "未评价"){
            this.bol2 = true;
            this.bol1 = false;
            this.bol3 = false;
          }
          if(e.target.innerHTML == "已评价"){
            this.bol3 = true;
            this.bol2 = false;
            this.bol1 = false;
          }
        },
        //查看详情
        moredet(e){
          //存储点击获取到的信息
          var alias=e.target.parentNode.parentNode.firstElementChild.innerHTML;
          var gongdanid=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
          var completetime=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
          var elevatorNumber=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerHTML;
          //console.log(elevatorNumber);
          localStorage.setItem('alias',alias);
          localStorage.setItem('completetime',completetime);
          localStorage.setItem('elevatorNumber',elevatorNumber);
          localStorage.setItem('gongdanid',gongdanid);
          this.$router.push('/workdetails');
        },
        moredets(e){
          //存储点击获取到的信息
          var alias=e.target.parentNode.parentNode.firstElementChild.innerHTML;
          var gongdanid=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
          var completetime=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
          var elevatorNumber=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerHTML;
          //console.log(elevatorNumber);
          localStorage.setItem('alias',alias);
          localStorage.setItem('completetime',completetime);
          localStorage.setItem('elevatorNumber',elevatorNumber);
          localStorage.setItem('gongdanid',gongdanid);
          this.$router.push('/workdetailss');
        },
        //去评价
        goevaluate(e){
          var alias=e.target.parentNode.parentNode.firstElementChild.innerHTML;
          var completetime=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
          var gongdanid=e.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
          localStorage.setItem('alias',alias);
          localStorage.setItem('completetime',completetime);
          localStorage.setItem('gongdanid',gongdanid);
          this.$router.push('/evaluate');

        }
      },
      mounted(){
        //获取到personId
        var personId = localStorage.getItem('personId');
        var personName = localStorage.getItem('personName');
        //get请求 待处理维修工单
        axios.get('http://wx.baronli.com/api/report/getReportByStatusAndCategory?personId='+personId+'&reportStatus=10&reportCategory=10').then((res)=>{
          var _this = this;
          this.arr1 = res.data['data']['content'];
          for(var i=0;i<this.arr1.length;i++){
          };
        });
        //已完成维修工单
        axios.get('http://wx.baronli.com/api/report/getReportByStatusAndCategory?personId='+personId+'&reportStatus=20&reportCategory=10').then((res)=>{
          //console.log(res.data)
          var _this = this;
          this.arr2 = res.data['data']['content'];
          //console.log(this.arr2);
          for(var i=0;i<this.arr2.length;i++){
            if(this.arr2[i].status==20){
            }else if(this.arr2[i].status==10){
              $('.status').html('维修');
            }else if(this.arr2[i].status==30){
              $('.status').html('困人');
            }
          }
        });

      }
    }
</script>

<style scoped>
  .tou{position: relative;}
  .proflow{width: 100%;display: flex;justify-content: space-around;text-align: center;color: #888;font-size: 3rem;}
  .proflow>li{list-style-type: none;width: 12.8rem;padding-bottom: 1.2rem;margin-top: 2rem;}
  .firstli{font-size: 3.6rem;font-weight: bold;font-stretch: normal;color: #333;}
  .circle1,.circle2,.circle3{width: 2.5rem;height: 2.5rem;}
  .circle1{position:absolute;top: 4.3rem;left:18%;}
  .circle2{position:absolute;top: 4.3rem;left:53.3%;}
  .circle3{position:absolute;top: 4.3rem;left:86.8%;}
  .orderDetails{border: 1px solid white;width: 92%;background-color: #ffffff;border-radius: 8px;margin-left: 4%;margin-bottom: 2.7rem;}
  .orderDetails>p{font-family: PingFang-SC-Bold;font-size: 3.4rem;font-weight: bold;color: #353535;margin-top: 3rem;margin-left: 2rem;letter-spacing: 0.2rem;}
  .details{width: 96%;background-color: #e8efff;opacity: 0.5;margin-left: 2%;margin-top: 1.7rem;padding-top: 1.7rem;padding-bottom: 0.1rem;}
  .details>li{display: flex;justify-content: space-between;margin-bottom: 2rem;}
  .details>li>span:nth-child(1){font-family: PingFang-SC-Light;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;margin-left: 2.6rem;}
  .details>li>span:nth-child(2){font-family: PingFang-SC-Regular;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: black;margin-right: 2.6rem;}
  .handle{height: 9rem;line-height: 9rem;text-align: center;}
  .del{margin-right: 14rem;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #b2b2b2;}
  .gopj{margin-right: 14rem;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #FF687E;}
  .moredet{margin-left: 14rem;font-family: PingFang-SC-Regular;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #3f79f6;}
  .line{width: 0.4rem;height: 2.7rem;color: #b2b2b2;}
  .bg{background: #F8F8F7;padding-top: 2.9rem;padding-bottom: 1rem;}
</style>
