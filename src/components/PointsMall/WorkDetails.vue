<template>
    <div>
     <!--头部-->
      <div class="topdiv clearfix">
        <img @click="back" class="back" src="../../../static/image/yjt.png" alt="">
        <span class="spjl">工单详情</span>
      </div>
      <!--详情内容-->
      <div class="xqnr">
        <div>
          <ul>
            <li>
              <span id="xq"></span>
              <!--<span id="pj">未评价</span>-->
            </li>
            <!--<li>-->
              <!--<span>完成时间</span>-->
              <!--<span class="sp2"></span>-->
            <!--</li>-->
            <li>
              <span>工单类型</span>
              <span>维修</span>
            </li>
            <li>
              <span>维保员</span>
              <span>王胜利</span>
            </li>
            <li>
              <span>电梯编号</span>
              <span class="en"></span>
            </li>
            <li>
              <span>维保单位</span>
              <span>XXXXXX</span>
            </li>
            <li>
              <span>发起时间</span>
              <span>2018-8-10</span>
            </li>
            <li>
              <span>完成时间</span>
              <span class="sp2"></span>
            </li>
            <li>
              <span>工单操作内容</span>
              <div class="blue">
                <div class="triangle"></div>
                <span>故障性质</span>
                <span class="a">维修</span><br>
                <span class="a">故障描述</span><br>
                <span class="b">这里是故障的详细描述这里是故障的详细描述这里是故障的详细描述这里是故障的详细描述这里是故障的详细描述这里是故障的详细描述</span><br>
                <span class="a">保障人员</span>
                <span  class="b">王胜利</span><br>
                <span class="a">处理结果</span>
                <span class="res b">故障已排除</span>
              </div>
            </li>
          </ul>
        </div>
        <!--点击跳转评价页面-->
        <p class="pj" @click="evaluate">评价晒图赢积分</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "work-details",
        data(){
          return{
           arr:[]
          }
        },
        methods:{
          back(){
            this.$router.push('/MainContent');
          },
          evaluate(){
            this.$router.push('/evaluate');
            window.location.reload();
          }
        },
        mounted(){
          var alias = localStorage.getItem('alias');
          var completetime = localStorage.getItem('completetime');
          var elevatorNumber = localStorage.getItem('elevatorNumber');
          $("#xq").html(alias);
          $(".sp2").html(completetime);
          $(".en").html(elevatorNumber);
          //$(".numspan").html(numspan);
          // $(".sumjf").html(numspan*jf);
          // var personId = localStorage.getItem('personId');
          //var gongdanid = localStorage.getItem('gongdanid');
          //console.log(gongdanid);
          //获取工单详情
         // axios.get('http://wx.baronli.com/api/report/getReportById='+gongdanid).then((res)=>{
            //var _this = this;
            //this.arr = res.data['data']['content'];
           // console.log(res.data);
            // for(var i=0;i<this.arr.length;i++){
            //   //console.log(this.arr1[i].reportCategory);
            //   console.log(this.arr[i].id);
            //   localStorage.setItem('gongdanid',this.arr2[i].id);
            // }
          //});
        }
    }
</script>

<style scoped>
  .topdiv{text-align: center;height: 8rem;width: 100%;line-height: 8rem;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #353535;}
  .back{width:2rem;height:3rem;margin-left: 1.7rem;margin-top:2.4rem;margin-bottom:2.3rem;float:left;}
  .xqnr{background: #F8F8F7;padding-top: 2.3rem;padding-bottom: 3rem;}
  .xqnr>div{width: 92%;background:#ffffff;margin-left: 4%;padding-top: 2.3rem;padding-bottom: 0.3rem;}
  #xq{font-family: PingFang-SC-Bold;font-size: 3.4rem;font-weight: bold;letter-spacing: 0.2rem;color: #353535;margin-left: -1.5rem;}
  #pj{font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #fd728c;float: right;margin-top: 0.3rem;}
  .xqnr>div>ul>li{margin-bottom: 3.3rem;padding-right: 4rem;padding-left: 4rem;}
  .xqnr>div>ul>li>span:nth-child(1){font-family: PingFang-SC-Light;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;}
  .xqnr>div>ul>li>span:nth-child(2){font-family: PingFang-SC-Regular;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;float: right;}
  .blue{background-color: #e8efff;opacity: 0.5;position:relative;margin-top: 2.6rem;padding: 2.9rem 2.8rem;}
  .blue>span:nth-of-type(odd){font-size: 2.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;}
  .blue>span:nth-of-type(even){font-family: PingFang-SC-Regular;font-size: 2.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;float: right;}
  .pj{font-family: PingFang-SC-Medium;font-size: 3.4rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #ffffff;border-radius: 43px;background: #3f79f6;width: 92%;margin-left: 4%;text-align: center;height: 8.6rem;line-height: 8.6rem;margin-top: 5rem;}
  .triangle {width:0;height:0;border: 2rem solid #f3f7ff;border-top-color: black;border-top: none;border-left-color: transparent;border-right-color: transparent;position:absolute;left: 1.5rem;top:-2rem;}
  /*.b{margin-bottom: 0.1rem;}*/
</style>
