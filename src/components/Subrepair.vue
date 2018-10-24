<template>
    <div>
      <!--二维码-->
      <div class="swm">
        <img class="swmimg1" src="../../static/image/2-1tijiaobaoxiu@2x.png" alt="">
        <img class="swmimg2" src="../../static/image/DC018165-5721-4122-BBAC-6C6B767E198D@2x.png" alt="">
        <p class="swmp">扫描二维码标签</p>
      </div>
      <!--手动输入-->
      <div class="swm" @click="manualEntry">
        <img class="swmimg1" src="../../static/image/55E16027-2E11-4B5D-B5B5-1B9B7B73399C@2x.png" alt="">
        <img class="swmimg2" src="../../static/image/B61BD592-06AF-44C0-A3FF-52A37E296FF7@2x.png" alt="">
        <p class="swmp2">手动输入</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "subrepair",
        data(){
          return{

          }
        },
        methods:{
          manualEntry(){
            this.$router.push('/repaircontent');
          }
        }
    }
</script>

<style scoped>
  .swm{width: 91%;height: 43.2rem;position: relative;text-align: center;margin-top: 6.2rem;margin-left: 4.5%;}
  .swmimg1{width: 100%;height: 100%;}
  .swmimg2{width: 8.8rem;height: 6.4rem;z-index: 2;position:absolute;left: 43%;
    top: 14.4rem;}
  .swmp{font-family:PingFangSC-Medium;font-size:4rem;color:#ffffff;position: absolute;left: 32%;top: 23.2rem;}
  .swmp2{font-family:PingFangSC-Medium;font-size:4rem;color:#ffffff;position: absolute;left: 40%;top: 23.2rem;}
</style>
