<template>
  <div>
    <!--头部-->
    <div class="topdiv clearfix">
      <img @click="backmyads"  class="back" src="../../../static/image/yjt.png" alt="">
      <span class="spjl">编辑地址</span>
      <span class="nads" @click="save">保存</span>
    </div>
    <!--新增内容-->
    <div class="newadd">
      <input type="text" placeholder="" class="name rname"><br>
      <input class="phone tel rphone" type="text" placeholder=""><br>
      <!--<input class="zx" type="text" placeholder="选择地址"><br>-->
      <div class="zx ads rads" @click="zx">
        <!--<img class="rjt" src="../../../static/image/rjt.png" alt="">-->
      </div>
      <input class="adss radsd" type="text" placeholder=""><br>
      <!--<div>-->
        <!--<span>设为默认地址</span>-->
        <!--<label><input class="ads" type="checkbox" id="label" v-model="ckeckVal" @click="clickMe" placeholder="请选择地址"></label>-->
      <!--</div>-->
    </div>
    <!--<p class="del" @click="del">删除该地址</p>-->
    <!--三级联动-->
    <div class="divwrap">
      <VDistpicker type="mobile" :province="getListData.province" :city="getListData.city" :area="getListData.district" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></VDistpicker>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: "editads",
    components: { VDistpicker },
    data() {
      return {
        names: this.$route.query.names,
        ckeckVal: false,
        getListData: {
          province: '',
          city: '',
          district: ''  //这个参数名后端返回的和插件定义的不一样
        },
      }
    },
    mounted(){
      var name = localStorage.getItem('name');
      var tel = localStorage.getItem('tel');
      var ads = localStorage.getItem('ads');
      var radsd = localStorage.getItem('radsd');
      //console.log(ads);
      $(".name").val(name);
      $(".tel").val(tel);
      $(".ads").text(ads);
      $('.adss').val(radsd);
    },
    methods: {
      //删除
      del(){

      },
      backmyads() {
        this.$router.push('/myads');
      },
      //保存按钮
      save() {
        //console.log($('.zx').text());
        //判断是否默认
        var that = this;
        //console.log(that.ckeckVal);

        //编辑确认修改,并提交给后台
        //获取到personId
        var personId = localStorage.getItem('personId');

        var receiverName=$('.rname').val();
        var receiverPhone=$('.rphone').val();
        var receiverAddress=$('.rads').text();
        var radsd=$('.radsd').val();
        //存储详细地址
        localStorage.setItem('radsd',radsd);
        var params = new URLSearchParams();
        params.append('receiverName',receiverName);
        params.append('receiverPhone',receiverPhone);
        params.append('receiverAddress',receiverAddress);
        params.append('radsd',radsd);
        if((receiverName=='')||(receiverPhone=='')||(receiverAddress=='')){
          alert('请输入完整所有信息');
        }else{
          axios.post('http://wx.baronli.com/api/user/changeUserAddress/'+personId+'/'+receiverName+'/'+receiverPhone+'/'+receiverAddress,params).then(function(res){
            console.log();
            if(res.data.description=='成功'){
              alert('保存成功!')
              this.$router.push('/myads');
            }
          }.bind(this));
        }


      },
      //是否默认
      clickMe() {},
      //选择地址
      zx(){
        if(!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test($('.phone').val()))){
          alert("手机号码有误,请重新填写");
        }else {
          $('.divwrap').css('display','block');
          $('.zx').html('');
        }

      },
      //地址
      onChangeProvince(data) {
        this.getListData.province = data.value;
      },
      onChangeCity(data) {
        this.getListData.city = data.value;
      },
      onChangeArea(data) {
        this.getListData.district = data.value;
        //console.log(this.getListData.province+this.getListData.city+this.getListData.district);
        $('.zx').html(this.getListData.province+this.getListData.city+this.getListData.district);
        $('.zx').css('color','black');
        $('.divwrap').css('display','none');
      },
    }
  }
</script>

<style scoped>
  .topdiv{height: 8rem;width: 100%;line-height: 8rem;justify-content: space-between;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #353535;margin-left: 30%;}
  .back{width:2rem;height:2.8rem;margin-top:2.6rem;margin-bottom:2.3rem;margin-left: 3rem;float: left;}
  .nads{float: right;font-family: PingFang-SC-Regular;font-size: 3.2rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.2rem;color: #3f79f6;margin-right: 4.1rem;}
  .newadd{margin-bottom: 10rem;}
  .newadd>input{width:96%;height: 10rem;font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;border-bottom: 1px solid #b2b2b2;padding-left: 3rem;}
  .newadd>input::placeholder{font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #b2b2b2;}
  .newadd>div{position:relative;}
  .newadd span{font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;left: 2.8rem;position:absolute;top: 2.5rem;}
  #label{width: 2.5rem;height: 2.5rem;right: 3.8rem;position:absolute;top: 2.5rem;}
  .zx{height: 10rem;border-bottom: 1px solid #b2b2b2;line-height: 10rem;color: black;padding-left: 2.9rem;font-size: 3rem;}
  .rjt{width: 1.3rem;height: 2.5rem;float: right;margin-right: 4.2rem;margin-top: 3.8rem;}
  .divwrap{height: 60rem;overflow-y: auto;width: 100%;font-size: 2.8rem;display: none;z-index: 10;}
  .divwrap>>>.distpicker-address-wrapper{color: #999;font-size: 2.8rem;}
  .divwrap>>>.distpicker-address-wrapper .active{color: red;font-size: 2.8rem;}
  .divwrap>>>.address-header{width: 100%;color:black;font-size: 2.8rem;background: lightgray;}
  .divwrap>>>.address-header .active{color: black;font-size: 2.8rem;border-bottom:transparent solid 1px;}
  .divwrap>>>.address-container .active{color: #000;font-size: 2.8rem;}
  .del{font-family: PingFang-SC-Regular;font-size: 2.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #fd728c;margin-left: 2.8rem;}
</style>
