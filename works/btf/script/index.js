(function($, undefined) {

    var calcHeight = function() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        $('.home-section').width(winWidth).height(winHeight);
        $('#home').addClass('current');
    };

    calcHeight();
    $(window).resize(function() {
        calcHeight();
    });

    var wheelEvent = (function() {
        var isFirefox = /firefox/i.test(navigator.userAgent);
        var mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel';
        return {
            dispath: function(dom, callback) {
                if (document.addEventListener) {
                    dom.addEventListener(mousewheel, callback, false);
                } else {
                    dom.attachEvent('on' + mousewheel, callback);
                }
            },
            getWheelDelta: function(e) {
                return isFirefox ? Math.abs(e.detail) / e.detail * -1 : Math.abs(e.wheelDelta) / e.wheelDelta;
            }
        };
    })();

    var pageScroll = {
        init: function() {
            this.current = 1;
            this.el = $('#wrapper');
            this.isScroll = false;

            wheelEvent.dispath(document, function(e) {
                e && e.preventDefault && e.preventDefault();
                var dir = wheelEvent.getWheelDelta(e);
                pageScroll.scroll(dir);
            });

            $('#indicator li').on('click', function() {
                var index = $(this).index() + 1;
                if (pageScroll.current == index) {
                    return;
                }
                pageScroll.scroll(pageScroll.current - index);
            });

            $('#enter').on('click', function() {
                if (pageScroll.current == 2) {
                    return;
                }
                pageScroll.scroll(pageScroll.current - 2);
            });

            $('#works').on('click', function() {
                if (pageScroll.current == 3) {
                    return;
                }
                pageScroll.scroll(pageScroll.current - 3);
            });

            $('#studio').on('click', function() {
                if (pageScroll.current == 2) {
                    return;
                }
                pageScroll.scroll(pageScroll.current - 2);
            });

            $('#contact').on('click', function() {
                if (pageScroll.current == 4) {
                    return;
                }
                pageScroll.scroll(pageScroll.current - 4);
            });

            $(document).keydown(function(e) {
                if (e.keyCode == 40) {
                    pageScroll.scroll(-1);
                } else if (e.keyCode == 38) {
                    pageScroll.scroll(1);
                }
            });


            $(document).on('touchmove touchcancel', function(e){
                e.preventDefault();
            });

            touch.on(document, 'swipeup', function(e){
                pageScroll.scroll(-1);
            });

            touch.on(document, 'swipedown', function(e){
                pageScroll.scroll(1);
            });


        },

        scroll: function(dir) {
            if (this.isScroll || (this.current == 4 && dir == -1) || (this.current == 1 && dir == 1)) {
                return;
            }
            this.isScroll = true;
            this.current -= dir;
            var top = -1 * (this.current - 1) * 100 + '%';
            this.el.animate({
                top: top
            }, 800, 'swing', function() {
                pageScroll.isScroll = false;
                pageScroll.adjustIndicator();
            });
        },

        adjustIndicator: function() {
            var indicator = $('#indicator li');
            var current = this.current;
            switch (current) {
                case 1:
                    this.aniPage1();
                    break;
                case 2:
                    this.aniPage2();
                    break;
                case 3:
                    this.aniPage3();
                    break;
                case 4:
                    this.aniPage4();
                    break;
                case 5:
                    this.aniPage5();
                    break;
                case 6:
                    this.aniPage6()
                    break;
                case 7:
                    this.aniPage7();
                    break;

            }
            indicator.eq(current - 1).addClass("cur").siblings().removeClass("cur");
        },

        aniPage1: function() {

        },
        aniPage2: function() {
            $('.p2-txt').animate({
                'margin-top': 0,
                'opacity': 1
            }, 1000, function() {
                $('.p2-01').animate({
                    'opacity': 1
                }, 300, function() {
                    $('.p2-02').animate({
                        'opacity': 1,
                        'left': '220px'
                    }).show();

                    $('.p2-03').animate({
                        'opacity': 1,
                        'right': '220px'
                    }).show();

                    setTimeout(function() {
                        $('.p2-04').animate({
                            'opacity': 1,
                            'left': '40px'
                        }).show();

                        $('.p2-05').animate({
                            'opacity': 1,
                            'right': '40px'
                        }).show();

                    }, 300);

                }).show();

            }).show();

        },
        aniPage3: function() {
            $('.p3-txt').animate({
                'margin-left': 0,
                'opacity': 1
            }, 1000, function() {
                $('.p3-01').animate({
                    'opacity': 1
                }, 500, function() {
                    $('.p3-02').animate({
                        'opacity': 1
                    }, 500, function() {
                        $('.p3-03').animate({
                            'opacity': 1
                        }, 500, function() {
                            $('.p3-04').animate({
                                'opacity': 1
                            }, 500).show();

                        }).show();

                    }).show();

                }).show();

            }).show();

        },
        aniPage4: function() {
            $('.p4-02').animate({
                'opacity': 1
            }, 1000, function(){
                $('.p4-01').animate({
                    'opacity': 1
                }, 1000, function(){
                    $('.p4-txt').animate({
                        'margin-right': 0,
                        'opacity': 1
                }, 800).show();
                
                }).show();

            }).show();

        },

    };

    pageScroll.init();




})(jQuery);






    
