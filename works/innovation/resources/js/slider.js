
$(function(){
  var step = 1; //定义滑动数值；

  //默认数值时滑块的位置
  var srs_num = $(".srs-num").find("span");
  var srsnumLength = $(".srs-num").find("span").length;
  var trackWidth = $(".srs-track").width(); //获取滑条的宽度
  var thumbWidth = $(".srs-thumb").width(); //获取滑块的宽度

  for(i=0; i<srsnumLength; i++ ){
    var myNum = parseInt(srs_num.eq(i).text());
    var myThumb =$(".srs-thumb").eq(i);
    var myBar = $(".srs-bar").eq(i);

    if($(".srs-minus").eq(i).hasClass("step-5")){
      var myLeft = (trackWidth-thumbWidth)/49*(myNum/5-1)+"px";
      var myWidth = myNum/245*100+"%";
      myThumb.css("left",myLeft);
      myBar.css("width",myWidth);
    }
    if($(".srs-minus").eq(i).hasClass("step-1")){
      var myLeft = (trackWidth-thumbWidth)/249*(myNum-1)+"px";
      var myWidth = myNum/250*100+"%";
      myThumb.css("left",myLeft);
      myBar.css("width",myWidth);
    }
    if($(".srs-minus").eq(i).hasClass("step-zdy")){
      var myLeft = (trackWidth-thumbWidth)*(myNum/100);
      var myWidth = myNum+"%";
      myThumb.css("left",myLeft);
      myBar.css("width",myWidth);
    }

  }

  //var srsNum = parseInt($(".srs-num").eq(6).find("span").text());
  //alert(srsNum);

  //点击加按钮
  $(".srs-plus").click(function(){
    var trackWidth = $(this).nextAll(".srs-track").eq(0).width();  //获取滑条的宽度
    var o_thumb = $(this).nextAll(".srs-track").eq(0).find(".srs-thumb").eq(0); //找到滑块
    var thumbWidth = o_thumb.width(); //获取滑块的宽度
    var thumbLeft = o_thumb.position().left;
    var o_srsBar = $(this).nextAll(".srs-track").eq(0).find(".srs-bar").eq(0); //找到蓝色条元素
    var o_srsNum = $(this).nextAll(".srs-num").eq(0).find("span").eq(0); //显示当前数值的元素
    var srsNum = parseInt(o_srsNum.text());

    if($(this).hasClass("step-5")){
      maxNum = 250;
      minNum = 5;
      step = 5;
      var stepWidth = (trackWidth-thumbWidth) / 49;
      var goLeft = thumbLeft + stepWidth + "px";
      var barWidth = thumbLeft + stepWidth + (thumbWidth/2) +"px";

      if(srsNum >= maxNum){
        o_srsNum.text(maxNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width",goLeft);
      }else{
        o_srsNum.text(srsNum + step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
    if($(this).hasClass("step-1")){
      maxNum = 250;
      minNum = 1;
      step = 1;
      var stepWidth = (trackWidth-thumbWidth) / 249;
      var goLeft = thumbLeft + stepWidth + "px";
      var barWidth = thumbLeft + stepWidth + (thumbWidth/2) +"px";

      if(srsNum >= maxNum){
        o_srsNum.text(maxNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width",goLeft);
      }else{
        o_srsNum.text(srsNum + step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
    if($(this).hasClass("step-zdy")){
      maxNum = 100;
      minNum = 0;
      //var stepWidth = (trackWidth-thumbWidth) / 14;

      if(srsNum>=40){
        step = 10;
        var goLeft = (trackWidth-thumbWidth)*(srsNum+10)/100+"px";
        var barWidth = srsNum+10+"%";
      }else{
        step = 5;
        var goLeft = (trackWidth-thumbWidth)*(srsNum+5)/100+"px";
        var barWidth = srsNum+5+"%";
      }

      if(srsNum >= maxNum){
        o_srsNum.text(maxNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width","100%");
      }else{
        o_srsNum.text(srsNum + step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
	});

  //点击减按钮
  $(".srs-minus").click(function(){
    var trackWidth = $(this).nextAll(".srs-track").eq(0).width();  //获取滑条的宽度
    var o_thumb = $(this).nextAll(".srs-track").eq(0).find(".srs-thumb").eq(0); //找到滑块
    var thumbWidth = o_thumb.width(); //获取滑块的宽度
    var thumbLeft = o_thumb.position().left;
    var o_srsBar = $(this).nextAll(".srs-track").eq(0).find(".srs-bar").eq(0); //找到蓝色条元素
    var o_srsNum = $(this).nextAll(".srs-num").eq(0).find("span").eq(0); //显示当前数值的元素
    var srsNum = parseInt(o_srsNum.text());

    if($(this).hasClass("step-5")){
      maxNum = 250;
      minNum = 5;
      step = 5;
      var stepWidth = (trackWidth-thumbWidth) / 49;
      var goLeft = thumbLeft - stepWidth + "px";
      var barWidth = thumbLeft - stepWidth + (thumbWidth/2) +"px";

      if(srsNum <= minNum){
        o_srsNum.text(minNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width",goLeft);
      }else{
        o_srsNum.text(srsNum - step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
    if($(this).hasClass("step-1")){
      maxNum = 250;
      minNum = 1;
      step = 1;
      var stepWidth = (trackWidth-thumbWidth) / 249;
      var goLeft = thumbLeft - stepWidth + "px";
      var barWidth = thumbLeft - stepWidth + (thumbWidth/2) +"px";

      if(srsNum <= minNum){
        o_srsNum.text(minNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width",goLeft);
      }else{
        o_srsNum.text(srsNum - step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
    if($(this).hasClass("step-zdy")){
      maxNum = 100;
      minNum = 0;
      //var stepWidth = (trackWidth-thumbWidth) / 14;

      if(srsNum>=50){
        step = 10;
        var goLeft = (trackWidth-thumbWidth)*(srsNum-10)/100+"px";
        var barWidth = srsNum-10+"%";
      }else{
        step = 5;
        var goLeft = (trackWidth-thumbWidth)*(srsNum-5)/100+"px";
        var barWidth = srsNum-5+"%";
      }

      if(srsNum <= minNum){
        o_srsNum.text(minNum);
        o_thumb.css("left",thumbLeft);
        o_srsBar.css("width","0%");
      }else{
        o_srsNum.text(srsNum - step);
        o_thumb.css("left",goLeft);
        o_srsBar.css("width",barWidth);
        //alert(o_srsBar.length);
      }
    }
	});

	//拖动事件

  var isMove = false;
  var lastX = 0;

  $('.srs-thumb').on('mousedown', handlerDown);
  $('.srs-track').on('mouseup', handlerUp);

  function handlerDown(e) {
    e.preventDefault();
    console.log('down');
    isMove = true;
    lastX = e.pageX;
    $(this).parents('.slider-wrap').find('.srs-thumb').on('mousemove', handlerMove);
  }
  function handlerMove(e) {
    e.preventDefault();
    console.log('move');
    var o_minus = $(this).parents(".slider-box").find(".srs-minus"); //减按钮
    var o_plus = $(this).parents('.slider-box').find('.srs-plus'); //加按钮
    if (isMove) {
      console.log(e.pageX, lastX);
      if (e.pageX - lastX < 0) {
        o_minus.click();
      }
      else if (e.pageX - lastX > 0) {
        o_plus.click();
      }
    }
  }
  function handlerUp(e) {
    e.preventDefault();
    console.log('up');
    isMove = false;
    $(this).parents('.slider-wrap').find('.srs-thumb').off('mousemove', handlerMove);
  }

});
