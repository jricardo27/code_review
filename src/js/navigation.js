/* global $ location */

// Menu height.
const topOffset = 160;


$(function () {
    $('.navbar a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            && location.hostname === this.hostname) {

            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate(
                    {scrollTop: target.offset().top - topOffset + 20}, 500);
                return false;
            }
        }
    });

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
        const hash = $(this).find('li.active a').attr('href');

        if(hash !== '#home') {
            $('header nav').addClass('small-menu');
        } else {
            $('header nav').removeClass('small-menu');
        }
    });

    // Activate ScrollSpy.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: topOffset
    });
});
