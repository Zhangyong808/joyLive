<template>
   <div>
     <!--积分底部-->
     <div>
       <!--底部tab切换栏-->
       <ul class="tabul">
         <li>
           <router-link to="/maincontent"><img :src="maincontent" alt=""></router-link>
         </li>
         <li>
           <router-link to="/mall"><img :src="mall" alt=""></router-link>
         </li>
         <li>
           <router-link to="/my"><img :src="my" alt=""></router-link>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
    export default {
      name: "footers",
      props:['maincontent','mall','my'],
      data(){
        return{

        }
      },
    }

</script>

<style scoped>
  .tabul{width: 100%;display:flex;justify-content: space-around;
    position: fixed;bottom: 0;background: whitesmoke;}
  .tabul>li img{width: 4.6rem;height: 7.8rem;}

</style>
