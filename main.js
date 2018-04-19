$(document).ready(function () {
    // Menu-toggle button
    $(document).ready(function () {
        $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
        });
    });
    // Scrolling Effect
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });
    // Gallery
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    let $button = $('#menu-btn');
    $('.menu-icon').on('click', function (e) {
        e.preventDefault();
        if ($button.hasClass('open')) {
            $button.removeClass('open');
            $button.addClass('close');
        } else {
            $button.removeClass('close');
            $button.addClass('open');
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        if ($button.hasClass('open')) {
            $button.removeClass('open');
            $button.addClass('close');
            $("nav ul").toggleClass("showing");
        }
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });
});
