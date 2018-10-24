<template>
    <div>
      <!--头部-->
      <div style="background: #FFFFFF;">
        <!--输入框-->
        <div style="position:relative;">
          <input @blur="handle" @focus="handco" type="text" placeholder="" style="width: 92%;height: 6.4rem;background-color: rgba(178,178,178,0.15);border-radius: 32px;margin-left: 4%;margin-top: 1rem;color:black;font-size: 3.6rem;padding-left:1rem;" >
          <img class="fdj" style="position: absolute;margin-left: -45%;margin-top: 2.3rem;width: 4rem;height: 4rem;" src="../../../static/image/fdj.png" alt="">
        </div>
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/image/banner@2x.png" /></div>
            <div class="swiper-slide"><img src="../../../static/image/banner@2x.png" /></div>
            <div class="swiper-slide"><img src="../../../static/image/banner@2x.png" /></div>
          </div>
        </div>
        <!--积分显示-->
        <ul class="jfxs">
          <li>
            <p class="sumIntergral" style="font-size: 6.4rem;color: #fd728c;font-weight: bold;">0</p>
            <p style="font-size: 2.4rem;letter-spacing: 0.1rem;color: #fd728c;">当前积分</p>
          </li>
          <li>
            <img src="../../../static/image/xian2x.png" alt="">
          </li>
          <li>
            <p style="font-size: 6.4rem;color: #3f79f6;font-weight: bold;">0</p>
            <p style="font-size: 2.4rem;letter-spacing: 0.1rem;color: #3f79f6;">本月积分</p>
          </li>
        </ul>
        <!--商品展示-->
        <div class="allgoods">
         <!--一件商品-->
          <div class="goods" v-for="(item,index) in arr">
            <label for="" style="display: none">{{item.id}}</label>
            <img style="width: 20.3rem;height: 20.3rem;" :src="item.picture" alt="">
            <p class="goodsname" style="font-size: 2.6rem;color: #353535;font-weight: bold;">{{item.name}}</p>
            <span class="jf" style="font-size: 4rem;color: #fd728c;margin-right: 1.2rem;">{{item.price}}</span><span style="font-size: 2.6rem;color: #b2b2b2;">积分</span><br>
            <p class="ljdh" @click="goodsdetail($event)">立即兑换</p>
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
        name: "mall",
        components:{Footers},
        data(){
          return{
            src1:"../../../static/image/01.png",
            src2:"../../../static/image/02_selected.png",
            src3:"../../../static/image/03.png",
            arr:[]
          }
        },
        methods:{
          //跳转页面
          goodsdetail(e){
            //按照商品id去查询商品详情
            var goodsId = e.target.parentNode.firstElementChild.innerHTML;
            localStorage.setItem('goodsId',goodsId);
            this.$router.push('/goodsdetail');
          },
          //聚焦事件
          handco(){
            //发送数据请求获取商品信息
            $('.fdj').css('marginLeft','-15%');
          },
          //失去焦点
          handle(){
            $('.fdj').css('marginLeft','-45%');
            $('input').val('');
          }
        },
        mounted(){
          var personId = localStorage.getItem('personId');
          //获取个人积分
          axios.get('http://wx.baronli.com/api/user/personId/'+personId).then((res)=>{
            $('.sumIntergral').html(res.data['data']['userInfo'].intergral);
            localStorage.setItem('sumIntergral',res.data['data']['userInfo'].intergral);
          });
          //获取商品列表
          axios.get('http://wx.baronli.com/api/goods/getGoods').then((res)=>{
            this.arr = res.data.data;
            for(var i=0;i<this.arr.length;i++){
              //console.log(this.arr[i]);
            }
          });
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 1500, //可选选项，自动滑动
            speed: 800,
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows : true
            },
          })
        }
    }
</script>

<style scoped>
     input:focus{outline:none;}
    .swiper-container,.swiper-wrapper{width: 100%;margin-top: 1rem;}
    .swiper-slide{width: 82%;height: 25.9rem;}
    .swiper-slide>img {width: 100%;height: 100%;}
    .jfxs{display: flex;justify-content: space-around;margin-top: 4.1rem;background-color: #fff;border-radius: 68px;}
    .jfxs>li{list-style-type: none;text-align: center;}
    .jfxs>li>img{width: 0.5rem;height: 4.2rem;margin-top: 1.8rem;}
    .allgoods{display: flex;justify-content: space-around;flex-wrap: wrap;margin-top: 5.3rem;}
    .goods{text-align: center;width: 38%;}
    .ljdh{width: 100%;height: 5.6rem;border-radius: 28px;border: solid 2px #fd728c;font-size: 2.8rem;font-weight: normal;letter-spacing: 0.2rem;color: #fd728c;text-align: center;line-height: 5.6rem;}
</style>
