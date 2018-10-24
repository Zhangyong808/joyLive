<template>
  <div>
    <!--中部切换内容-->
    <div class="content">
      <ul class="proflow">
        <li @click="show($event)" class="firstli">待处理</li>
        <li @click="show($event)">处理中</li>
        <li @click="show($event)">已完成</li>
      </ul>
      <img class="reddot" src="../../static/image/4FC40C68-901F-45E5-8ABE-075CF750F0BF@2x.png" alt="">
      <!--待处理-->
      <div v-show="bol1" class="diveRepair">
        <!--电梯修理信息-->
        <div class="eRepair" v-for="(item,index) in arr1" >
          <img class="dianti" src="../../static/image/88A980C9-E349-4BA1-9CF8-65450801608D@2x.png" alt="">
          <span class="locate">{{item.locate}}</span>
          <img class="more" src="../../static/image/7CE718DF-28E8-4F63-93C5-4E051B17CB67@2x.png" alt="">
        </div>
      </div>
      <!--处理中-->
      <div v-show="bol2">
        <div class="eRepair" v-for="(item,index) in arr2" >
          <img class="dianti" src="../../static/image/88A980C9-E349-4BA1-9CF8-65450801608D@2x.png" alt="">
          <span class="locate">{{item.locate}}</span>
          <img class="more" src="../../static/image/7CE718DF-28E8-4F63-93C5-4E051B17CB67@2x.png" alt="">
        </div>
      </div>
      <!--已完成-->
      <div v-show="bol3">
        <div class="eRepair" v-for="(item,index) in arr3" >
          <img class="dianti" src="../../static/image/88A980C9-E349-4BA1-9CF8-65450801608D@2x.png" alt="">
          <span class="locate">{{item.locate}}</span>
          <img class="more" src="../../static/image/7CE718DF-28E8-4F63-93C5-4E051B17CB67@2x.png" alt="">
        </div>
      </div>
    </div>
    <!--添加-->
    <div class="divadd" @click="divadd">添加</div>
  </div>
</template>

<script>
    export default {
        name: "repairs-records",
        data() {
          return {
            bol1:true,
            bol2:false,
            bol3:false,
            arr:[],
            arr1:[],
            arr2:[],
            arr3:[]
          }
        },
        methods:{
        show(e){
          var li = document.getElementsByTagName('li');
          for(var i = 0;i < li.length;i++){
            li[i].index = i;
            li[i].style.color="black";
            li[i].style.borderBottom="3px solid transparent";
          }
          e.target.style.color="#ff3b30";
          e.target.style.borderBottom="3px solid #ff3b30";
          if(e.target.innerHTML == "待处理"){
            this.bol1 = true;
            this.bol2 = false;
            this.bol3 = false;
          }
          if(e.target.innerHTML == "处理中"){
            this.bol2 = true;
            this.bol1 = false;
            this.bol3 = false;
          }
          if(e.target.innerHTML == "已完成"){
            this.bol3 = true;
            this.bol2 = false;
            this.bol1 = false;
          }
        },
          divadd(){
            this.$router.push('/repaircontent');
          }
      },
      mounted(){
        this.openId = this.$route.query.openId;
        var params = new URLSearchParams();
        axios.post('http://wx.baronli.com/api/phoneRecord/weChatViewRecordsList?openId='+this.openId+'&page=1&rows=8',params).then(function(res){
          this.arr1 = res.data['data']['content'];
        }.bind(this));
      },
     }
</script>

<style scoped>
  .content{position:relative;}
  .reddot{width: 2rem;height: 2rem;position: absolute;top:1.6rem;right:5.5rem;}
  .proflow{width: 100%;display: flex;justify-content: space-around;text-align: center;margin-bottom: 2.4rem;box-shadow:inset 0 -2px 0 0 #c8c7cc;}
  .proflow>li{list-style-type: none;width: 12.8rem;font-size:3.2rem;padding-bottom: 1.2rem;margin-top: 2rem;}
  .firstli{border-bottom: 3px solid #ff3b30;color:#ff3b30;}
  .eRepair{width: 94.4%;margin-left: 5.6%;height:13.6rem;line-height: 13.6rem;border-bottom:2px solid #c8c7cc;}
  .dianti{border: 1px solid red;background: red;width: 3.4rem;height: 6.8rem;padding: 1.2rem 2.8rem 1rem 2.8rem;margin-left: 1rem;margin-top: 2rem;float: left;border-radius:8px;}
  .locate{font-size:3.2rem;color:#333333;margin-left:2rem;float: left;}
  .more{width: 1.6rem;height: 2.6rem;float: right;margin-top: 5.6rem;margin-right: 2.6rem;}
  .divadd{width: 94.8%;margin-left: 2.6%;bottom: 2rem;text-align: center;color: #fff;font-size: 3.6rem;background:#ff3b30;height: 8rem;line-height: 8rem;position:absolute;bottom: 2rem;}
</style>
