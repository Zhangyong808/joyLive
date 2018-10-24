<template>
    <div>
      <!--头部-->
      <div class="topdiv clearfix">
        <img @click="bk" class="back" src="../../../static/image/yjt.png" alt="">
        <span class="spjl">评价</span>
        <span class="tj" id="submit" @click="tj">提交</span>
      </div>
      <div>
        <p class="p1"></p>
        <span class="sp1">工单类型:</span>
        <span class="sp1">维修</span><br>
        <!--<span class="sp1">发起时间：</span><span class="sp2">2018-8-10</span>-->
        <span class="sp1">完成时间：</span><span class="sp2"></span>
      </div>
      <!--上传图片-->
      <!--<div class="container">-->
        <!--<input type="file" id="file_input" multiple/>-->
        <!--<label><img id="add" class="xj" src="../../../static/image/xj@2x.png" alt=""></label>-->
      <!--</div>-->
      <div style="clear:both"></div>
      <div class="bg">
        <label for="" class="yc"><input id="rating" name="serving" value="0" type="txt">
          <input id="taste" name="taste" value="0" type="txt">
          <input id="environment" name="environment" value="0" type="txt">
          <input id="price" name="price" value="1" type="txt"></label>
        <ul class="Star">
          <li><span class="number"></span><span class="we">服务态度</span><span class="Select">
        <a onMouseOver="javascript:setProfix('star_');showStars(1,'rating');"
           onMouseOut="javascript:setProfix('star_');clearStars('rating');"
           href="javascript:setProfix('star_');setStars(1,'rating');">
         <img style="width: 3.9rem;height: 3.7rem;" id="star_1" title="差(1)" src="../../../static/image/icon_star_1.gif"></a>

          <a onMouseOver="javascript:setProfix('star_');showStars(2,'rating');"
             onMouseOut="javascript:setProfix('star_');clearStars('rating');"
             href="javascript:setProfix('star_');setStars(2,'rating');">
           <img style="width: 3.9rem;height: 3.7rem;" id="star_2" title="一般(2)" src="../../../static/image/icon_star_1.gif"></a>

           <a onMouseOver="javascript:setProfix('star_');showStars(3,'rating');"
              onMouseOut="javascript:setProfix('star_');clearStars('rating');"
              href="javascript:setProfix('star_');setStars(3,'rating');">
            <img style="width: 3.9rem;height: 3.7rem;" id="star_3" title="好(3)" src="../../../static/image/icon_star_1.gif"></a>

            <a onMouseOver="javascript:setProfix('star_');showStars(4,'rating');"
               onMouseOut="javascript:setProfix('star_');clearStars('rating');"
               href="javascript:setProfix('star_');setStars(4,'rating');">
            <img style="width: 3.9rem;height: 3.7rem;" id="star_4" title="很好(4)" src="../../../static/image/icon_star_1.gif"></a>

            <a onMouseOver="javascript:setProfix('star_');showStars(5,'rating');"
               onMouseOut="javascript:setProfix('star_');clearStars('rating');"
               href="javascript:setProfix('star_');setStars(5,'rating');">
             <img style="width: 3.9rem;height: 3.7rem;" id="star_5" title="非常好(5)" src="../../../static/image/icon_star_1.gif"></a></span></li>



          <li><span class="number"></span><span class="we">维修水平</span><span class="Select">
        <a onMouseOver="javascript:setProfix('taste_');showStars(1,'taste');"
           onMouseOut="javascript:setProfix('taste_');clearStars('taste');"
           href="javascript:setProfix('taste_');setStars(1,'taste');">
         <img style="width: 3.9rem;height: 3.7rem;" id="taste_1" title="差(1)" src="../../../static/image/icon_star_1.gif"></a>

        <a onMouseOver="javascript:setProfix('taste_');showStars(2,'taste');"
           onMouseOut="javascript:setProfix('taste_');clearStars('taste');"
           href="javascript:setProfix('taste_');setStars(2,'taste');">
         <img style="width: 3.9rem;height: 3.7rem;" id="taste_2" title="一般(2)" src="../../../static/image/icon_star_1.gif"></a>

        <a onMouseOver="javascript:setProfix('taste_');showStars(3,'taste');"
           onMouseOut="javascript:setProfix('taste_');clearStars('taste');"
           href="javascript:setProfix('taste_');setStars(3,'taste');">
        <img style="width: 3.9rem;height: 3.7rem;" id="taste_3" title="好(3)" src="../../../static/image/icon_star_1.gif"></a>

        <a onMouseOver="javascript:setProfix('taste_');showStars(4,'taste');"
           onMouseOut="javascript:setProfix('taste_');clearStars('taste');"
           href="javascript:setProfix('taste_');setStars(4,'taste');">
        <img style="width: 3.9rem;height: 3.7rem;" id="taste_4" title="很好(4)" src="../../../static/image/icon_star_1.gif"></a>

        <a onMouseOver="javascript:setProfix('taste_');showStars(5,'taste');"
           onMouseOut="javascript:setProfix('taste_');clearStars('taste');"
           href="javascript:setProfix('taste_');setStars(5,'taste');">
        <img style="width: 3.9rem;height: 3.7rem;" id="taste_5" title="非常好(5)" src="../../../static/image/icon_star_1.gif"></a> </span></li>
          <li><span class="number"></span><span class="we">维护顾客环境与安全</span><span class="Select">
        <a onMouseOver="javascript:setProfix('environment_');showStars(1,'environment');"
           onMouseOut="javascript:setProfix('environment_');clearStars('environment');"
           href="javascript:setProfix('environment_');setStars(1,'environment');">
        <img style="width: 3.9rem;height: 3.7rem;" id="environment_1" title="差(1)" src="../../../static/image/icon_star_1.gif"></a>

        <a onMouseOver="javascript:setProfix('environment_');showStars(2,'environment');"
           onMouseOut="javascript:setProfix('environment_');clearStars('environment');"
           href="javascript:setProfix('environment_');setStars(2,'environment');">
         <img style="width: 3.9rem;height: 3.7rem;" id="environment_2" title="一般(2)" src="../../../static/image/icon_star_1.gif"></a>

         <a onMouseOver="javascript:setProfix('environment_');showStars(3,'environment');"
            onMouseOut="javascript:setProfix('environment_');clearStars('environment');"
            href="javascript:setProfix('environment_');setStars(3,'environment');">
         <img style="width: 3.9rem;height: 3.7rem;" id="environment_3" title="好(3)" src="../../../static/image/icon_star_1.gif"></a>

         <a onMouseOver="javascript:setProfix('environment_');showStars(4,'environment');"
            onMouseOut="javascript:setProfix('environment_');clearStars('environment');"
            href="javascript:setProfix('environment_');setStars(4,'environment');">
         <img style="width: 3.9rem;height: 3.7rem;" id="environment_4" title="很好(4)" src="../../../static/image/icon_star_1.gif"></a>

         <a onMouseOver="javascript:setProfix('environment_');showStars(5,'environment');"
            onMouseOut="javascript:setProfix('environment_');clearStars('environment');"
            href="javascript:setProfix('environment_');setStars(5,'environment');">
         <img style="width: 3.9rem;height: 3.7rem;" id="environment_5" title="非常好(5)" src="../../../static/image/icon_star_1.gif"></a> </span></li>
          <li><span class="number"></span><span>问题解决和故障排除</span><span class="Select">
         <a onMouseOver="javascript:setProfix('price_');showStars(1,'price');"
            onMouseOut="javascript:setProfix('price_');clearStars('price');"
            href="javascript:setProfix('price_');setStars(1,'price');">
         <img style="width: 3.9rem;height: 3.7rem;" id="price_1" title="差(1)" src="../../../static/image/icon_star_2.gif"></a>

         <a onMouseOver="javascript:setProfix('price_');showStars(2,'price');"
            onMouseOut="javascript:setProfix('price_');clearStars('price');"
            href="javascript:setProfix('price_');setStars(2,'price');">
          <img style="width: 3.9rem;height: 3.7rem;" id="price_2" title="一般(2)" src="../../../static/image/icon_star_1.gif"></a>

          <a onMouseOver="javascript:setProfix('price_');showStars(3,'price');"
             onMouseOut="javascript:setProfix('price_');clearStars('price');"
             href="javascript:setProfix('price_');setStars(3,'price');">
          <img style="width: 3.9rem;height: 3.7rem;" id="price_3" title="好(3)" src="../../../static/image/icon_star_1.gif"></a>

          <a onMouseOver="javascript:setProfix('price_');showStars(4,'price');"
             onMouseOut="javascript:setProfix('price_');clearStars('price');"
             href="javascript:setProfix('price_');setStars(4,'price');">
           <img style="width: 3.9rem;height: 3.7rem;" id="price_4" title="很好(4)" src="../../../static/image/icon_star_1.gif"></a>

           <a onMouseOver="javascript:setProfix('price_');showStars(5,'price');"
              onMouseOut="javascript:setProfix('price_');clearStars('price');"
              href="javascript:setProfix('price_');setStars(5,'price');">
            <img style="width: 3.9rem;height: 3.7rem;" id="price_5" title="非常好(5)" src="../../../static/image/icon_star_1.gif"></a> </span></li>

        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "evaluate",
        data(){
        return{

          }
        },
        methods:{
          bk(){
            window.history.go(-1);
          },
          tj(){
            var personId = localStorage.getItem('personId');
            var gongdanid = localStorage.getItem('gongdanid');
            var serviceAttitude = $('#rating').val();
            var serviceLevel = $('#taste').val();
            var envAndSafe = $('#environment').val();
            var resolveQuestion=$('#price').val();
            axios.get('http://wx.baronli.com/api/report/commitReport?personId='+personId+'&id='+gongdanid+'&serviceAttitude='+serviceAttitude+'&serviceLevel='+serviceLevel+'&envAndSafe='+envAndSafe+'&resolveQuestion='+resolveQuestion+'&generalEvaluate=10&suggestions=ni&picPath=12').then((res)=>{
              console.log(res.data.success);
              if(res.data.success==true){
                this.$router.push('/maincontent');
              }else{
                alert('请重新提交');
                window.location.reload();
              }
            });
          }
        },
        mounted(){
          var alias = localStorage.getItem('alias');
          var completetime = localStorage.getItem('completetime');
          $(".p1").html(alias);
          $(".sp2").html(completetime);
        }
    }
    $(function () {
      var input = document.getElementById("file_input");
      var result;
      var dataArr = []; // 储存所选图片的结果(文件名和base64数据)
      var fd;  //FormData方式发送请求
      var oAdd = document.getElementById("add");
      var oSubmit = document.getElementById("submit");
      var oInput = document.getElementById("file_input");

      if(typeof FileReader==='undefined'){
        // alert("抱歉，你的浏览器不支持 FileReader");
        input.setAttribute('disabled','disabled');
      }else{
        input.addEventListener('change',readFile,false);
      }　　　　　//handler


      function readFile(){
        fd = new FormData();
        var iLen = this.files.length;
        var index = 0;
        for(var i=0;i<iLen;i++){
          if (!input['value'].match(/.jpg|.gif|.png|.jpeg|.bmp/i)){　　//判断上传文件格式
            return alert("上传的图片格式不正确，请重新选择");
          }
          var reader = new FileReader();
          reader.index = i;
          fd.append(i,this.files[i]);
          reader.readAsDataURL(this.files[i]);  //转成base64
          reader.fileName = this.files[i].name;


          reader.onload = function(e){
            var imgMsg = {
              name : this.fileName,//获取文件名
              base64 : this.result   //reader.readAsDataURL方法执行完后，base64数据储存在reader.result里
            }
            dataArr.push(imgMsg);
            result = '<div class="delete" style="position: relative;overflow: hidden;"></div><div class="result" style="width:18.8rem;height:16rem;overflow: hidden;float: left;" ><img src="'+this.result+'" alt="" style="width: 16rem;height: 16rem;float: left;"/><img style="width: 2.8rem;height: 2.8rem;float: right;" src="../../../static/image/del.png" alt=""></div>';
            var div = document.createElement('div');
            div.innerHTML = result;
            div['className'] = 'float';
            div['index'] = index;
            document.getElementsByTagName('body')[0].appendChild(div);  　　//插入dom树
            var img = div.getElementsByTagName('img')[0];
            img.onload = function(){
              var nowHeight = ReSizePic(this); //设置图片大小
              this.parentNode.style.display = 'block';
              var oParent = this.parentNode;
              // if(nowHeight){
              //   oParent.style.paddingTop = (oParent.offsetHeight - nowHeight)/2 + 'rem';
              // }
            }

            div.onclick = function(){
              this.remove();                  // 在页面中删除该图片元素
              delete dataArr[this.index];  // 删除dataArr对应的数据

            }
            index++;
          }
        }
      }

      //提交评价(保存评价)
      function send(){
        var submitArr = [];
        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i]) {
            submitArr.push(dataArr[i]);
          }
        }
      }

      oAdd.onclick=function(){
        oInput.value = "";   // 先将oInput值清空，否则选择图片与上次相同时change事件不会触发
        oInput.click();
      }


      oSubmit.onclick=function(){
        if(!dataArr.length){
          return alert('请先选择文件');
        }
        send();
      }
      function ReSizePic(ThisPic) {
        var RePicWidth = 130; //这里修改为您想显示的宽度值

        var TrueWidth = ThisPic.width; //图片实际宽度
        var TrueHeight = ThisPic.height; //图片实际高度

        if(TrueWidth>TrueHeight){
          //宽大于高
          var reWidth = RePicWidth;
          ThisPic.width = reWidth;
          //垂直居中
          var nowHeight = TrueHeight * (reWidth/TrueWidth);
          return nowHeight;  //将图片修改后的高度返回，供垂直居中用
        }else{
          //宽小于高
          var reHeight = RePicWidth;
          ThisPic.height = reHeight;
        }
      }
    })
</script>

<style scoped>
  .topdiv{text-align: center;height: 8rem;width: 100%;line-height: 8rem;}
  .spjl{font-family: PingFang-SC-Bold;font-size: 3.6rem;font-weight: bold;letter-spacing: 2px;color: #353535;margin-left: 3rem;}
  .back{width:2rem;height:3rem;margin-left: 1.7rem;margin-top:2.4rem;margin-bottom:2.3rem;float:left;}
  .tj{font-family: PingFang-SC-Regular;font-size: 3.2rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #3f79f6;float: right;margin-top: 0.3rem;margin-right: 2.3rem;}
  .p1{font-family: PingFang-SC-Bold;font-size: 3.4rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;margin-bottom: 4.2rem;margin-left: 2.9rem;}
  .sp1{font-family: PingFang-SC-Light;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #888888;display: inline-block;margin-bottom: 3.3rem;margin-left: 2.9rem;}
  .sp2{font-family: PingFang-SC-Regular;font-size: 2.8rem;font-weight: bold;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;}
  .float{float:right;width : 20rem;height: 20rem;overflow: hidden;border: 1px solid #CCCCCC;border-radius: 10px;padding: 0.5rem;margin: 0.5em;}
  img{position: relative;}
  .result{width: 20rem;height: 20rem;text-align: center;box-sizing: border-box;}
  #file_input{display: none;}
  .delete{width: 20rem;height:20rem;position: absolute;text-align: center;z-index: 10;font-size: 3rem;background-color: rgba(255,255,255,0.8);color: #777;opacity: 0;transition-duration:0.7s;-webkit-transition-duration: 0.7s;top:0;left: 0;}
  .delete:hover{cursor: pointer;opacity: 1;}
  .xj{width: 12.8rem;height: 7.8rem;}
  .bg{width: 100%;position: fixed;bottom:0;}
  .Star{width: 100%;margin: 0;padding: 0;}
  .Star>li{list-style-type: none;font-family: PingFang-SC-Light;font-size: 2.8rem;font-weight: normal;font-stretch: normal;letter-spacing: 0.2rem;color: #353535;margin-left: 3rem;margin-right: 1rem;margin-bottom: 4.3rem;}
  .Select{float:right;}
  .yc{display: none};
</style>
