$(document).ready(function(){
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop()
		if (scrollTop > 0) {
			$(".cb").show()
			$(".cb div").animate({top: 0}, 1000)
		} else {
			$(".cb").hide()
		}
	})
	$(".cb div").mouseenter(function() {
		$(".cb").animate({opacity: 0.2}, 1000)
	})
	$(".cb div").mouseleave(function() {
		$(".cb").animate({opacity: 1}, 1000)
	})
});