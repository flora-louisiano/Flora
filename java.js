$(function(){
        var stickyHeaderTop = $('.left').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.left').css({position: 'fixed', top: '0px'});
                        $('.sticky').css('display', 'block');
                } else {
                        $('.left').css({position: 'static', top: '0px'});
                        $('.sticky').css('display', 'none');
                }
        });
  });