(function($) {

    "use strict";

    var $window = $(window),
        $doc = $(document),
        $owl1 = $('#lionSlider'),
        $owl2 = $('#lionSlider2'),
        $owl3 = $('#lionServices'),
        $owl4 = $('#lionTestimonial'),
        $owl5 = $('#lionTeam'),
        $carousel = $('#carousel'),
        $container = $('#portfolio-container'),
        $menutog = $('#menu-toggle'),
        $scrolltop = $('.scrolltop')

    // Run On Page Load
    $window.on("load", function() {

        //Preloader
        $('#loader-wrapper').fadeOut(1600, function() { $(this).remove(); });

        //Header Slideshow
        $owl1.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
        })

        //Header Slideshow2
        $owl2.owlCarousel({
            items: 1,
            loop: true,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
        })

        //Services slider
        $owl3.owlCarousel({
            items: 3,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                568: {
                    items: 2,
                },
                801: {
                    items: 3,
                }
            }
        })

        //Testimonial Slider
        $owl4.owlCarousel({
            items: 3,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                568: {
                    items: 2,
                },
                801: {
                    items: 3,
                }
            }
        })

        //Testimonial Slider
        $owl5.owlCarousel({
            items: 3,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                568: {
                    items: 2,
                },
                801: {
                    items: 3,
                }
            }
        })

        // portfolio carousel
        $carousel.flipster({
            style: 'carousel',
            spacing: -0.6,
            loop: true,
            nav: true,
            buttons: true,
            itemContainer: 'ul',
            itemSelector: 'li',
            scrollwheel: false,
        })

        // Portfolio Masonry
        $container.isotope({
            masonry: {
                columnWidth: '.portfolio-item'
            },
            itemSelector: '.portfolio-item'
        })
        $('#filters').on('click', 'li', function() {
            $('#filters li').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        })

        //Toggle menu button transition
        $window.scroll(function(event) {
            if ($doc.scrollTop() >= $('#home,#blog-header').height()) {
                $menutog.addClass('dark');
            } else {
                $menutog.removeClass('dark');
            }
            if ($doc.scrollTop() > $('#home').height()) {
                $scrolltop.addClass('show');
            } else {
                $scrolltop.removeClass('show');
            }
        }).trigger('scroll')

        //Sidebar open
        $('#menu-toggle').on('click', function(event) {
            $(this).toggleClass('active');
            $('#menu-left').toggleClass('open');
        })

        //Close responsive nav
        $('#navigation li a').on('click', function() {
            if ($window.width() < 768) {
                $('.navbar-toggle').on('click');
            }
        })

        // Initiate animation on scroll
        new WOW().init()

    })


    // Navigation scroll
    smoothScroll.init()


    // Typing Animation (Typed.js)
    $('#element').typed({
        strings: ["listen", "think", "create"],
        typeSpeed: 0,
        loop: true,
        startDelay: 500,
        backDelay: 3000,
        contentType: 'html'
    })

    // Parallax Hero
    $window.on('mousemove', function(e) {
        var w = $window.width();
        var h = $window.height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".parallax").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    })

    // Show and hide color-switcher
    $(".color-switcher .switcher-button").on('click', function() {
        $(".color-switcher").toggleClass("show-color-switcher", "hide-color-switcher", 800);
    });

    // Color Skins
    $('a.color').on('click', function() {
        var title = $(this).attr('title');
        $('#style-colors').attr('href', 'css/style-' + title + '.css');
        return false;
    });

})(jQuery)
