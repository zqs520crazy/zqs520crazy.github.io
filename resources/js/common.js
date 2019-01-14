
//通用js

$(document).ready(function() {

  //

});


//WORKS和LABS页面的打字效果
function showOne(obj, speed) {
    //split() 方法用于把一个字符串分割成字符串数组。
    var texts = obj.html().split(""); 
    //字符串数组中单个字符用于显示的时间  (2/3个speed) / 字符个数
    var s = speed * 2 / 3 / texts.length; 
    obj.html("").show();
    for (var i = 0; i < texts.length; i++) {
        (function (index) {
            setTimeout(function () {
                obj.append(texts[index]);
                //如果字符全部显示完成 就隐藏
                if (index == texts.length - 1) { 
                    //字符串数组中所有字符用于隐藏的时间  1/3个speed
                    obj.fadeOut(speed / 3); 
                }
            }, s * index); //字符依次显示
        }(i));
    };
};
//所有p元素循环
function showAll(obj, speed) {
    obj.each(function (index, element) {
        setTimeout(function () {
            showOne($(element), speed);
        }, speed * index)
    })
};
//定时器 
function setTimer(obj, speed) {
    showAll(obj, speed);
    return setInterval(function () {
        showAll(obj, speed);
    }, speed * obj.length);
}

var p = $("#oDiv").find("p");
var speed = 4000;
setTimer(p, speed);
