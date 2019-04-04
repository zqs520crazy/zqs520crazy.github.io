
//通用js

$(document).ready(function() {
  //左侧导航高度设置控制js
  var rightHeight = $(".right-con").height()+10;
  //alert(rightHeight);
  $(".left-con").height(rightHeight);

  //点击删除按钮后的弹窗
  $(".dialog-delete-btn").click(function(){
    var deleteBox = "<div class='dialog-bg'>"
                    +"<div class='dialog-delete-box dialog-box'>"
                    +"<h2>警告</h2>"
                    +"<p>确定进行删除操作？删除后数据将不可恢复！</p>"
                    +"<a href='javascript:void(0)' class='dialog-ok-btn'>确定</a>"
                    +"<div class='dialog-cancel-btn'></div>"
                    +"</div>"
                    +"</div>"
    $(".con-wrapper").append(deleteBox);

    $(".dialog-cancel-btn").click(function(){
      $(".dialog-delete-box, .con-wrapper>.dialog-bg").remove();
    })

  });

  //首页部分js
  $(".marquee-row a").click(function(){
    $(this).parent().fadeOut(200);
    //$(this).parent().css("display","none");
  });
  $(".search-btn").click(function(){
	//alert("aaa");
    $(".search-result-wrapper").fadeIn(200);
  });
  $(".map_marker, .result-row").click(function(){
    $(".search-result-wrapper").fadeOut(200);
    $(".road-detail-wrapper").fadeIn(200);
  });

  //过去七天车流量、雨量、温度切换
  function showChart(i){
    $(".chart-box").eq(i).addClass("cur").siblings(".chart-box").removeClass("cur");
    $(".chart-box").eq(i).show().siblings(".chart-box").hide();
  }
    var chartLength = $(".chart-box").length;
    //alert(chartLength);
    $(".statistics-row .next-btn").click(function(){
        var x = $(".statistics-row").find(".cur").index()-1;
        //alert(x);
		    showChart(x);
        if(x==chartLength){
          x=0;
          showChart(x);
        }
    });
    $(".chart-yl").hide();
    $(".chart-wd").hide();
    $(".statistics-row .pre-btn").click(function(){
      var x = $(".statistics-row").find(".cur").index();
      //alert(x);
      showChart(x);
      if(x==4){
        x=1;
        showChart(x);
      }
      if(x==3){
        x=0;
        showChart(x);
      }
    });

  //删除预警联系人部分js
	$(".delete-contact").click(function(){
		$(this).parent().remove();
	});

  //添加联系人的全选js
  var checkBox = $("input:checkbox");
  $("#checkAll").click(function(){
    for(i = 1; i < checkBox.length; i++){
      if(checkBox[0].checked){
        checkBox[i].checked = true;
      }else{
				checkBox[i].checked = false;
			}
    }
  });

  //表格的隔行背景色js
  $(".table-wrapper > table > tbody >tr:even").css("background","#fff");//奇数行
  $(".table-wrapper > table > tbody >tr:odd").css("background","#f7f8f8");//偶数行

  // 气象统计切换js
  $(".weather-hidden").hide();
  $(".weather-tab li").click(function(){
    $(this).siblings().removeClass("select");
    $(this).addClass("select");
    var num = $(this).index();
    var weatherBox = $(".weather-trend-box");
    weatherBox.eq(num).show();
    weatherBox.eq(num).siblings().hide();
  });

  //表单数据判断js
  $(".email-input").keydown(function(){
		if(!$(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
			$(this).next("span").css("display","block");
		}else{
			$(this).next("span").css("display","none");
		}
	});
  $(".phone-input").blur(function(){
    if(!$(this).val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/)){
      $(this).next("span").css("display","block");
    }else{
      $(this).next("span").css("display","none");
    }
  });
  $(".pwd-input-again").blur(function(){
    var newPwd = $(".pwd-input").val();
    var newPwd2 = $(this).val();
    if(newPwd!=newPwd2){
      $(this).next("span").css("display","block");
    }else{
      $(this).next("span").css("display","none");
    }
  });


});

//解决placeholder的兼容问题
$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
