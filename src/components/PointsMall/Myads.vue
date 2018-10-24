<template>
    <div>
      <!--头部-->
      <div class="topdiv clearfix">
        <img @click="backs" class="back" src="../../../static/image/yjt.png" alt="">
        <span class="spjl">我的地址</span>
        <span class="nads" @click="newads">新增地址</span>
      </div>
      <!--地址-->
      <div class="dizhi">
        <span class="name"></span>
        <span class="tel"></span><br>
        <span class="ads"></span>
        <div>
          <span class="editor" @click="editor($event)">编辑</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "myads",
        data(){
          return{
            name:'',
            tel:'',
            arr:[]
          }
        },
        methods:{
          backs(){
            this.$router.push('/my');
          },
          newads(){
            this.$router.push('/newads');
          },
          editor(e){
            var name = e.target.parentNode.parentNode.firstElementChild.innerHTML;
            var tel = e.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
            var ads = e.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            //console.log(ads);
            // localStorage.removeItem('name');
            // localStorage.removeItem('tel');
            localStorage.setItem('name',name);
            localStorage.setItem('tel',tel);
            localStorage.setItem('ads',ads);
            this.$router.push('/editads');
          }
        },
        mounted(){
          var personId = localStorage.getItem('personId');
          //console.log(personId);
          //获取个人信息
          axios.get('http://wx.baronli.com/api/user/personId/'+personId).then((res)=>{
            var _this = this;
            this.arr = res.data['data']['userInfo'];
            //console.log(this.arr.receiverName);
            $('.name').html(this.arr.receiverName);
            $('.tel').html(this.arr.receiverPhone);
            $('.ads').html(this.arr.receiverAddress);
          });
        }
    }
</script>

<style scoped>
  .topdiv{height: 8rem;width: 100%;line-height: 8rem;justify-content: space-between;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #353535;margin-left: 33%;}
  .back{width:2rem;height:3rem;margin-top:2.6rem;margin-bottom:2.3rem;margin-left: 3rem;float: left;}
  .nads{float: right;font-size: 3rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;margin-right: 3rem;margin-top: 0.5rem;}
  .dizhi{position: relative;overflow: hidden;width: 100%;height: 17rem;}
  .name{font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;margin-left: 2.9rem;}
  .tel{font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;margin-left: 2.9rem;}
  .mr{width: 6.9rem;height: 3.7rem;top:7rem;left: 4rem;position:absolute;}
  .ads{width: 25rem;display: inline-block;margin-left: 2.9rem;margin-top: 2.2rem;font-size: 2.6rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;}
  .dizhi>div{float: right;height: 5.7rem;line-height: 5.7rem;float: right;margin-top: -1.5rem;border-left: 1px solid #b2b2b2;}
  .dizhi>div>span{font-family: PingFang-SC-Regular;font-size: 3rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;margin-right: 3.7rem;padding: 2rem 0rem 2rem 3rem;}
</style>
