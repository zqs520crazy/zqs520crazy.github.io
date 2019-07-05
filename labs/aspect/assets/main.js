$(document).ready(function(){
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        $('.chrome').hide();
    } else {
        $('.chrome').css({'display':'block', 'position':'absolute', 'right':'40px', 'bottom':'40px'});
    }
    $('input').css({'opacity': '0.3'});
    $('.overlay').hide();
    
    $('.chrome').click(function(){
        $('.overlay').fadeIn();
    });
    $('.close').click(function(){
        $('.overlay').fadeOut();
    });
    
    var ratio = 16 / 9,
        element = 1,
        lastSelected = "width";
    
    function testElementFor( string ) {
        if ( string == "width" ) {
            if ( element == 1 ) ratio = 16 / 9;
            if ( element == 2 ) ratio = 21 / 9;
            if ( element == 3 ) ratio = 4 / 3;
            if ( element == 4 ) ratio = 2;
        }
        else if ( string == "height" ) {
            if ( element == 1 ) ratio = 9 / 16;
            if ( element == 2 ) ratio = 9 / 21;
            if ( element == 3 ) ratio = 3 / 4;
            if ( element == 4 ) ratio = 1 / 2;
        }
    }
    
    $('#1').addClass('current');
    
    $('input').focusin(function(){
        $('section h1').css({'color': '#fff', 'font-weight': 300});
        lastSelected = $(this).attr('name');
        console.log(lastSelected);
        $(this).prev().css({'color': '#5feff1', 'font-weight': 700});
        if ( $(this).val() == "Value") {
            $(this).val("");
            $(this).css({'opacity': '1'});
        }
    });
    $('input').focusout(function(){
        if ( $(this).val() == "") {
            $('section h1').css({'color': '#fff', 'font-weight': 300});
            $('input').val("Value");
            $('input').css({'opacity': '0.3'});
        }
    });
    
    $('li').click(function(){
        element = $(this).attr("id");
        $('li').removeAttr('class');
        $(this).addClass('current');
        if ( $('input').val() != "Value" ) {
            if ( lastSelected == "width" ){
                testElementFor("width");
                var fullValue = $('#width input').val() / ratio;
                $('#height input').val( fullValue.toFixed() );
            }
            else {
                testElementFor("height");
                var fullValue = $('#height input').val() / ratio;
                $('#width input').val( fullValue.toFixed() );
            }
        }
    });
    
    $('#width input').keyup(function(){
        testElementFor("width");
        $('#height input').css({'opacity': '1'});
        var fullValue = $(this).val() / ratio;
        $('#height input').val( fullValue.toFixed() );
    });
    $('#height input').keyup(function(){
        testElementFor("height");
        $('#width input').css({'opacity': '1'});
        var fullValue = $(this).val() / ratio;
        $('#width input').val( fullValue.toFixed() );
    });
});