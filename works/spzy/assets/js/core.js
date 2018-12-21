
$(function(){

    // 初始化评星控件
    init_ui_starbar();

    // 头像悬停显示下拉列表
    $('.user-navbar.logined .navbar-nav > li').on('mouseenter', function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        dropdownMenu.parent().addClass("open");
    });

});

// 初始化评星控件
function init_ui_starbar() {
    $("select.bar-rating-instance[bar-rating-inited!='true']").each(function (idx, el) {
        if (!$.isFunction($(el).barrating))
            return;

        $(el).attr("bar-rating-inited", "true");  // 为了防止重复初始化

        var options = {};
        var theme = $(el).attr('bar-rating-theme') || '';
        if (theme)
            options['theme'] = 'css-stars';

        var initialRating = $(el).attr('bar-rating-initialRating');
        if (initialRating)
            options['initialRating'] = initialRating;

        var readonly = $(el).attr('bar-rating-readonly');
        if (readonly.toLowerCase() == 'true')
            options['readonly'] = true;

        $(el).barrating(options);

        if (readonly.toLowerCase() == 'true') {
            $(el).next('.br-widget').find('a').attr('href', 'javascript:;');
        }
    });
}
