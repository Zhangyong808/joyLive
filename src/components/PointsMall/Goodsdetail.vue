<template>
   <div>
     <!--轮播图-->
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide"><img src="" /></div>
         <div class="swiper-slide"><img src="" /></div>
         <div class="swiper-slide"><img src="" /></div>
       </div>
       <div class="swiper-pagination" style="width: 7.5rem;background-color: #353535;border-radius: 16px;border: solid 1px #b2b2b2;font-size: 2.2rem;letter-spacing: 0.1rem;color: #ffffff;line-height: 3.2rem;position: absolute;left: 83%;"></div>
       <img @click="tuoyuan" class="tuoyuan" src="../../../static/image/tuoyuan.png" alt="">
     </div>
     <!--商品信息-->
     <div class="gnews">
       <p class="goodsnames" style="font-family: PingFang-SC-Medium;font-size: 3.4rem;font-weight: bold;letter-spacing: 0.2rem;color: #353535;margin-left: 2.7rem;"></p>
       <span class="jfs" style="font-size: 5.6rem;font-weight: bold;letter-spacing: 0.3rem;color: #fd728c;margin-right: 1rem;margin-left: 2.7rem"></span><span style="font-size: 2.6rem;letter-spacing: 0.2rem;color: #b2b2b2;">积分</span><span class="num"></span><span class="kc">库存:</span>
     </div>
     <!--底部-->
     <div class="bot">
       <span @click="duihuan">立即兑换</span>
     </div>
     <!--隐藏与显示-->
     <div class="gg">
       <p @click="ljdh" class="ljdh" style="z-index: 10">立即兑换</p>
     </div>
   </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        name: "goodsdetail",
        data(){
          return{
            arr:[]
          }
        },
        methods:{
          //兑换
          duihuan(){
            var personId = localStorage.getItem('personId');
            axios.get('http://wx.baronli.com/api/user/personId/'+personId).then((res)=>{
              //获取总积分
              //console.log(res.data['data']['userInfo'].intergral);
              //立即兑换,获取总积分判断是否足够用
              if(res.data['data']['userInfo'].intergral<$('.jfs').text()){
                alert('积分不够');
              }else{
                //传给后台数据
                var goodsId = localStorage.getItem('goodsId');
                //console.log(goodsId);
                axios.get('http://wx.baronli.com/api/orders/makeOrder?personId='+personId+'&id='+goodsId).then((res)=>{

                  //console.log(res.data);
                  var sumIntergral = sumIntergral - $('.jfs').text();
                  localStorage.setItem('sumIntergral',sumIntergral);
                  //判断返回是否为真,真的话就跳转路径
                  if(res.data.success==true){
                    this.$router.push('/mycash');
                  }
                })

              }

            });

          },
          tuoyuan(){
            this.$router.push('/mall');
          },
          jian(){
            if($('.numspan').text()==1){
              alert('不能减少了');
            }else {
              var a=$('.numspan').text();
              a--;
              $('.numspan').text(a);
            }
          },
          jia(){
              var a=$('.numspan').text();
              a++;
              $('.numspan').text(a);

          },
          ljdh(){
            $('.gg').css('display','none');
          },
          ggcome(){
            $('.gg').css('display','block');
            var goodsname = localStorage.getItem('goodsname');
            var jf = localStorage.getItem('jf');
            $(".goodsname").html(goodsname);
            $(".jf").html(jf);
          },
          hid(){
            $('.gg').css('display','none');
          }
        },
        mounted(){
          //获取商品详情 ,首先取到商品的id  /api/goods/getGoodsInfo/{id}
          var id = localStorage.getItem('goodsId');
          axios.get('http://wx.baronli.com/api/goods/getGoodsInfo/'+id).then((res)=>{
              this.arr = res.data.data;
              //console.log(this.arr);
              $('.goodsnames').html(this.arr.name);
              $('.jfs').html(this.arr.price);
              $('.num').html(this.arr.stock);
              $('.swiper-slide>img').attr('src',this.arr.picture);
          })

          var mySwiper = new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          autoplay: 1500, //可选选项，自动滑动
          speed: 800,
          effect : 'slide',
          slidesPerView: 1,
          paginationType : 'fraction',
          })
          $('.c').click(function () {
              $('.c').css({color: 'black',background:'#F4F4F4'});
              $(this).css({color: '#3f79f6',background:'rgb(193,210,248)'});
              localStorage.setItem('color',$(this).text());
            }
          );
      }
    }
</script>

<style scoped>
  .swiper-container,.swiper-wrapper{width: 100%;position: relative;}
  .swiper-slide{width: 100%;height: 64.6rem;}
  .swiper-slide>img{width: 100%;height: 100%;}
  .tuoyuan{position: absolute;top: 1.3rem;left: 1.6rem;width: 5.2rem;height: 5.2rem;z-index: 2;}
  .gnews{margin-top: 1rem;}
  .kc,.num{font-size: 2.8rem;letter-spacing: 0.2rem;color: #b2b2b2;float: right;margin-top: 1rem;margin-right: 2.2rem;}
  .guige{padding-left:2.7rem;font-size: 3rem;font-weight: normal;letter-spacing: 0.2rem;color: #353535;height: 9rem;line-height: 9rem;border-bottom: 1px solid #b2b2b2;border-top: 1px solid #b2b2b2;margin-top: 4rem;}
  .bot{width: 100%;height: 9.8rem;background-color: #FFFFFF;line-height: 9.8rem;position: fixed;bottom: 0;}
  .bot>span{display: inline-block;height: 9.8rem;background: #3f79f6;width: 100%;float: right;text-align: center;font-size: 3.6rem;font-weight: bold;letter-spacing: 0.2rem;color: #ffffff;}
  .bot>img{margin-left: 7.4rem;}
  .gg{background: #fff;z-index:10;display: none;width: 100%;height: 65rem;position: absolute;bottom: 0;z-index: 10;}
  .colors>span{margin-right:3%;display: inline-block;width: 12.6rem;height: 6.4rem;background-color: #F4F4F4;border-radius: 32px;border: solid 2px #b2b2b2;text-align: center;line-height: 6.4rem;font-size: 3rem;}
  .colors>span:nth-child(1){margin-left: 2.6rem;background-color: #c1d2f8;color:#3f79f6;}
  .numchange{height: 6.4rem;margin-top: 2.8rem;position: relative;}
  .numchange>span{position: absolute;left: 6.5rem;}
  .jian{position: absolute;left: 2.7rem;top:2.8rem;width: 2.7rem;height: 0.7rem;}
  .jia{position: absolute;left: 20.5rem;top:2rem;width: 2.7rem;height: 2.7rem;}
  .ljdh{width: 22.9rem;height: 7.2rem;background: #5085F7;border-radius: 36px;font-size: 3.2rem;letter-spacing: 0.2rem;color: #ffffff;text-align: center;line-height: 7.2rem;margin-left: 30%;margin-top: 1rem;}
</style>
