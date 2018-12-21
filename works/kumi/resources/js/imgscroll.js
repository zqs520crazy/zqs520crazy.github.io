
//轮播代码：
$(function(){
	var t = n = count = 0;
	$(function(){
		count = $("#bannerMain a").size();
		for (var i = 1; i < count+1; i++) {
			var newsli="<li>"+i+"</li>"
			$('#bannerBtn').append(newsli);
		};
		$("#bannerBtn li").eq(0).addClass('cc');
		$("#bannerMain a:not(:first)").hide();
		$("#bannerBtn li").click(function() {
			$(this).addClass("cc").siblings("li").removeClass("cc");
			var i = $(this).text() - 1;
			n = i;
			if (i >= count) return;
			$("#bannerMain a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		});
		t = setInterval("showAuto()", 2000);
		$("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 2000);});	       
	})
});
function showAuto(){
	n = n >= (count - 1) ? 0 : n + 1;
	$("#bannerBtn li").eq(n).trigger("click").addClass("cc").siblings("li").removeClass("cc");;
}














