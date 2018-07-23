$(document).ready(function() {

 /*sticky navigation */
$('.js--who-we-are').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
},{
    offset: '30px'
});

 /* navigation scrolls */
 $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        }
    });
});
 /*sticky animations*/
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '100%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInRight');
}, {
    offset: '100%'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.js--wp-6').waypoint(function(direction) {
    $('.js--wp-6').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});

$('.js--wp-7').waypoint(function(direction) {
    $('.js--wp-7').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.js--wp-8').waypoint(function(direction) {
    $('.js--wp-8').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});

$('.js--wp-9').waypoint(function(direction) {
    $('.js--wp-9').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.js--wp-10').waypoint(function(direction) {
    $('.js--wp-10').addClass('animated pulse');
}, {
    offset: '50%'
});

/*Mobile nav menu*/
$('.js--mobile-nav-icon').click(function() {
    const nav = $('.js--main-nav');
    const icon = $('.js--mobile-nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('fa-bars')) {
        icon.addClass('fa-times');
        icon.removeClass('fa-bars');
    } else {
        icon.addClass('fa-bars');
        icon.removeClass('fa-times');
    }
});

});