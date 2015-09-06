/***************** Waypoints ******************/

$(document).ready(function() {
    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeOut');
    }, {
        offset: '75%'
    });
    $('.wp1').waypoint(function() {
        $(this).toggleClass('animated FadeIn');
    }, {
        offset: '80%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
});

/***************** Smooth Scrolling ******************/

$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

});