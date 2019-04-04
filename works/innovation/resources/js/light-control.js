
//灯光控制
$(document).ready(function() {
  $(".adjust-row").hide();

  var a = 2;  //接收后台传回的值，用于页面加载的时候默认显示被打开的灯,初始值为0
  var lastLight = $(".light-switch").eq(7);  //获取最后一个灯
  var lastP = lastLight.prev("p").eq(0); //获取最后一个灯上面的文字
  var lastImg = lastLight.parent().find("img").eq(0);  //获取最后一个灯上面的图片

  var imgPath = $(".light-model-row span img").eq(0).attr("src").split("lamp")[0];  //获取第一排图片路径地址
  //alert(imgPath);

  //页面加载时根据后台返回a的结果显示需要打开的灯
  var o_light = $(".light-switch").eq(a-1);
  var o_pp = o_light.prev("p").eq(0);
  var o_img = o_light.parent().find("img").eq(0);
  var o_lightStatus = $(".light-status").find("span").eq(0);
  o_pp.addClass("text-on");
  o_light.addClass("light-on");
  o_lightStatus.text(o_pp.text());
  o_img.attr("src",imgPath+"lamp"+a+".png");
  if(a>=1 && a<=4){
    $(".adjust-row").show();
  }else{
    $(".adjust-row").hide();
  }
  //页面加载时所有灯都不亮的时候全自动打开
  if(a<1 || a>7){
    lastP.addClass("text-on");
    lastLight.addClass("light-on");
    lastImg.attr("src",imgPath+"lamp8.png");
  }

  $(".light-switch").click(function(){
    var x = $(".light-switch").index(this)+1; //获取当前点击元素的索引值
    //alert(x);
    var ppp = $(this).prev("p").eq(0); //获取当前点击元素上面的文字
    var lightImg = $(this).parent().find("img").eq(0); //获取当前点击元素上面的图片
    var imgUrl = lightImg.attr("src");   //获取图片的路径地址
    var lightStatus = $(".light-status").find("span").eq(0); //

    $(".light-switch").not(this).removeClass("light-on");
    $(this).toggleClass("light-on");

    $(".light-model-row span p").not(ppp).removeClass("text-on");
    ppp.toggleClass("text-on");

    //切换当前点击元素上面的图片
    if(x>=1 && x<=8){
      for(i=0;i<8;i++){
        if(i<=4){
          //alert("a");
          $(".light-model-row span img").eq(i).attr("src",imgPath+"lamp.png");
        }else{
          //alert("b");
          var z=0;
          for(y=4;y<=7;y++){
            z++;
            $(".light-model-row span img").eq(y).attr("src",imgPath+"lamp_off"+z+".png");
          }
        }
      }
      lightImg.attr("src",imgPath+"lamp"+x+".png");
    }

    //所有灯都不亮的时候全自动打开
    if($(".light-switch").not(lastLight).hasClass("light-on") == false){
      lastLight.addClass("light-on");
      lastP.addClass("text-on");
      lastImg.attr("src",imgPath+"lamp8.png");
    }

    //第一排灯光模式打开的时候显示对应模式的亮度调节
    if($(this).hasClass("ldtj")){
      var lightText = ppp.text();
      lightStatus.text(lightText);
      $(".adjust-row").stop().slideDown(200);
    }else{
      $(".adjust-row").stop().slideUp(200);
    }
    if($(this).hasClass("light-on") == false){
      $(".adjust-row").stop().slideUp(200);
      lightImg.attr("src",imgPath+"lamp.png"); //灯光图片的重置
    }

  });
  lastLight.click(function(){
    lastImg.attr("src",imgPath+"lamp8.png");
    lastP.addClass("text-on");
    $(this).addClass("light-on");
  });
});
