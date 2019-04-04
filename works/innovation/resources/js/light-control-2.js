
//灯光控制
$(document).ready(function() {
  $(".adjust-row-2").hide();

  var a = 3;  //接收后台传回的值，用于页面加载的时候默认显示被打开的灯,初始值为0
  var lastLight = $(".light-switch-2").eq(7);  //获取最后一个灯
  var lastP = lastLight.prev("p").eq(0); //获取最后一个灯上面的文字
  var lastImg = lastLight.parent().find("img").eq(0);  //获取最后一个灯上面的图片

  var imgPath = $(".light-model-row-2 span img").eq(0).attr("src").split("lamp")[0];  //获取第一排图片路径地址
  //alert(imgPath);

  //页面加载时根据后台返回a的结果显示需要打开的灯
  var o_light = $(".light-switch-2").eq(a-1);
  var o_pp = o_light.prev("p").eq(0);
  var o_img = o_light.parent().find("img").eq(0);
  //var o_lightStatus = $(".light-status-2").find("span").eq(0);
  o_pp.addClass("text-on-2");
  o_light.addClass("light-on-2");
  //o_lightStatus.text(o_pp.text());
  o_img.attr("src",imgPath+"lamp"+a+".png");
  if(a>=1 && a<=4){
    $(".adjust-row-2").show();
  }else{
    $(".adjust-row-2").hide();
  }
  //页面加载时所有灯都不亮的时候全自动打开
  if(a<1 || a>7){
    lastP.addClass("text-on-2");
    lastLight.addClass("light-on-2");
    lastImg.attr("src",imgPath+"lamp8.png");
  }

  $(".light-switch-2").click(function(){
    var x = $(".light-switch-2").index(this)+1; //获取当前点击元素的索引值
    //alert(x);
    var ppp = $(this).prev("p").eq(0); //获取当前点击元素上面的文字
    var lightImg = $(this).parent().find("img").eq(0); //获取当前点击元素上面的图片
    var imgUrl = lightImg.attr("src");   //获取图片的路径地址
    //var lightStatus = $(".light-status-2").find("span").eq(0); //

    $(".light-switch-2").not(this).removeClass("light-on-2");
    $(this).toggleClass("light-on-2");

    $(".light-model-row-2 span p").not(ppp).removeClass("text-on-2");
    ppp.toggleClass("text-on-2");

    //切换当前点击元素上面的图片
    if(x>=1 && x<=8){
      for(i=0;i<8;i++){
        if(i<=4){
          //alert("a");
          $(".light-model-row-2 span img").eq(i).attr("src",imgPath+"lamp.png");
        }else{
          //alert("b");
          var z=0;
          for(y=4;y<=7;y++){
            z++;
            $(".light-model-row-2 span img").eq(y).attr("src",imgPath+"lamp_off"+z+".png");
          }
        }
      }
      lightImg.attr("src",imgPath+"lamp"+x+".png");
    }

    //所有灯都不亮的时候全自动打开
    if($(".light-switch-2").not(lastLight).hasClass("light-on-2") == false){
      lastLight.addClass("light-on-2");
      lastP.addClass("text-on-2");
      lastImg.attr("src",imgPath+"lamp8.png");
    }

    //第一排灯光模式打开的时候显示对应模式的亮度调节
    /* if($(this).hasClass("ldtj-2")){
      //var lightText = ppp.text();
      //lightStatus.text(lightText);
      $(".adjust-row-2").stop().slideDown(200);
    }else{
      $(".adjust-row-2").stop().slideUp(200);
    }
    if($(this).hasClass("light-on-2") == false){
      $(".adjust-row-2").stop().slideUp(200);
      lightImg.attr("src",imgPath+"lamp.png"); //灯光图片的重置
    } */
	/* if($(this).hasClass("dg-ldtj")){
		$(".adjust-row-2").stop().slideDown(200);
    }else{
      $(".adjust-row-2").stop().slideUp(200);
    } */
    if($(this).hasClass("light-on-2") == false){
      $(".adjust-row-2").stop().slideUp(200);
      lightImg.attr("src",imgPath+"lamp.png"); //灯光图片的重置
    }
  });
  
  
  
  $(".dg-ldtj").click(function(){
	var x = $(".dg-ldtj.light-on").length;
	var y = $(".dg-ldtj.light-on-2").length;
	
    
	if(x+y>0){
		$(".adjust-row-2").stop().slideDown(200);
	}else{
		$(".adjust-row-2").stop().slideUp(200);
	}
  });
  
  lastLight.click(function(){
    lastImg.attr("src",imgPath+"lamp8.png");
    lastP.addClass("text-on-2");
    $(this).addClass("light-on-2");
  });
});
