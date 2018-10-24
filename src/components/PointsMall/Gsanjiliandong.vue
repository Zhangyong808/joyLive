<template>
  <div class="divwrap">
    <VDistpicker
      type="mobile"
      :province="getListData.province"
      :city="getListData.city"
      :area="getListData.district"
      @province="onChangeProvince"
      @city="onChangeCity"
      @area="onChangeArea">
    </VDistpicker>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    components: { VDistpicker },
    data() {
      return{
        getListData: {
          province: '',
          city: '',
          district: ''  //这个参数名后端返回的和插件定义的不一样
        },
      }
    },
    methods: {
      onChangeProvince(data) {
        this.getListData.province = data.value;
      },
      onChangeCity(data) {
        this.getListData.city = data.value;
      },
      onChangeArea(data) {
        this.getListData.district = data.value;
        console.log(this.getListData.province+this.getListData.city+this.getListData.district);
      },

    }
  }

</script>

<style scoped>
  .divwrap{
    height: 60rem;
    overflow-y: auto;
    width: 100%;
    font-size: 2.8rem;
  }
  .divwrap>>>.distpicker-address-wrapper{
    color: #999;
    font-size: 2.8rem;
  }
  .divwrap>>>.distpicker-address-wrapper .active{
    color: red;
    font-size: 2.8rem;
  }
  .divwrap>>>.address-header{
    width: 100%;
    /*background: red;*/
    color:black;
    font-size: 2.8rem;
  }
  .divwrap>>>.address-header .active{
    color: black;
    font-size: 2.8rem;
    border-bottom:transparent solid 1px;
  }
  .divwrap>>>.address-container .active{
    color: #000;
    font-size: 2.8rem;
  }
</style>
