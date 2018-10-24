<template>
   <div>
     <!--获取信息人员还有工单数-->
     <ul class="ulone">
       <li>
         <p>今日工单</p>
         <span class="todayOrderNumber">190</span><span>单</span>
       </li>
       <li>
         <p>在线员工</p>
         <span class="onlineWorkerNumber">12</span><span>名</span>
       </li>
     </ul>
     <ul class="ultwo">
       <li>
         <p>困人数</p>
         <span class="tiringOrderNumber">5</span><span>个</span>
       </li>
       <li>
         <p>维修单数</p>
         <span class="repairOrderNumber">15</span><span>单</span>
       </li>
       <li>
         <p >维保单数</p>
         <span class="maintenanceOrderNumber">188</span><span>单</span>
       </li>
       <li>
         <p>完成率</p>
         <span class="percentageComplete">99</span><span>%</span>
       </li>
     </ul>
     <!--图表-->
     <div id="container" style="width:100%;height:400px"></div>
   </div>
</template>

<script>
    export default {
        name: "cloudmanagement",
        data(){
          return{
            arr:[]
          }
        },
        methods:{

        },
        mounted(){
          var chart = Highcharts.chart('container', {
            //  chart: {
            //      spacing : [40, 0 , 40, 0]
            //  },
            title: {
              floating:true,
              text: '',
              style: {
                fontSize: "3rem"
              }
            },
            // tooltip: {
            //   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            // },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                    color: ['#A52A2A','#BEBEBE'],
                    fontSize:'2.5rem'
                  }
                },
                point: {
                  style: {
                    color: ['#A52A2A','#BEBEBE'],
                    fontSize:'2.5rem'
                  },
                  events: {
                  }
                },
              }
            },
            series: [{
              type: 'pie',
              innerSize: '80%',
              name: '所占比',
              data: [
                {name:'马达',   y: 35.0},
                ['变频器',  28.8],
                {
                  name: 'cop',
                  y: 12.8,
                  sliced: true,
                  selected: true,
                  // url: 'http://www.hcharts.cn'
                },
                ['轿顶模块', 8.5],
                ['门机', 6.2],
                ['控制柜', 8.7]

              ]
            }],
            //处理右下角标识及右上角打印功能
            credits: {
              enabled: false     //不显示LOGO
            },
            exporting:{
              enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
            }


          }, function(c) { // 图表初始化完毕后的会掉函数

          });
          var params = new URLSearchParams();
        }
    }
    $(function () {

    })
</script>

<style scoped>
  .ulone{display: flex;justify-content: space-around;margin-top: 6rem;}
  .ultwo{margin-top:4rem;border-top: 1px solid #d8d8d8;display: flex;justify-content: space-around;padding-top: 3.2rem;}
  .ulone>li,.ultwo>li{text-align: center;height: 8.9rem;line-height: 4rem;}
  .ulone>li>p,.ultwo>li>p{font-size:3rem;color:#909094;margin-bottom: 1rem;}
  .ulone>li>span:nth-child(2),.ultwo>li>span:nth-child(2){font-size:4.8rem;color:#3f3b3e;}
  .ulone>li>span:nth-child(1),.ultwo>li>span:nth-child(1){font-size:3rem;color:#3f3b3e;}
</style>
