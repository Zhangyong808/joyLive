<template>
    <div>
      <!--具体方位及描述-->
      <div class="threeinp">
        <div>
          <label>小区名</label><input class="address"  type="text" placeholder="在此输入小区名(xx小区xx栋)"><br>
        </div>
        <div>
          <label>设备号</label><input class="eleNumber" type="text" placeholder="在此输入设备号"><br>
        </div>
        <div>
         <label>手机号</label><input class="phone" type="text" placeholder="在此输入手机号">
        </div>
        <div>
          <label>故障描述</label><br>
          <textarea class="faultDescription" style="border-bottom: 1px solid #c8c7cc;width: 99%;height: 35rem;font-size:3.2rem;" placeholder="在此填写电梯故障描述"></textarea>
        </div>
      </div>
      <!--报修-->
      <div class="divrep" @click="repairs">报修</div>
    </div>
</template>

<script>
    export default {
        name: "repair-content",
        data(){
          return{
            arr:[]
          }
        },
        methods:{
          repairs(){
              // if($('.address').val()){
              var params = new URLSearchParams();
              this.openId = this.$route.query.openId;
              this.userId = this.$route.query.userId;
              //console.log(this.openId)//666
              params.append("userId", this.userId);
              params.append("openId", this.openId);
              params.append('address',$('.address').val());
              params.append('eleNumber',$('.eleNumber').val());
              params.append('phone',$('.phone').val());
              params.append('faultDescription',$('.faultDescription').val());
              params.append('trapped','no');
              params.append('liftStopped','yes');
              //判断手机号是否正确
              if(!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test($('.phone').val()))){
              alert("手机号码有误,请重填");
              }else {
                axios.post('http://wx.baronli.com/api/phoneRecord/weChatAddRepairRecord?openId='+this.openId,params).then(function(res){
                }.bind(this));
                this.$router.push('/repairrecords');
              }
          }
        }
    }
</script>

<style scoped>
  .threeinp{width: 95%;margin-left: 4.2%;}
  .threeinp>div{border-bottom:1px solid #c8c7cc;height: 8.8rem;line-height: 8.8rem;width: 100%;}
  .threeinp>div>label{font-family:PingFangSC-Regular;font-size:3.4rem;color:#333333;margin-right: 3.8rem;}
  .threeinp>div>input{height: 4.5rem;font-size: 3.2rem;margin-bottom: 1rem;width: 77%;color:black;}
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {font-family:PingFangSC-Regular;font-size:3.2rem;color:#ccc;}
  .divrep{width: 94.8%;margin-left: 2.6%;position: fixed;bottom: 2rem;text-align: center;color: #fff;font-size: 3.6rem;background:#ff3b30;height: 8rem;line-height: 8rem;}
</style>
