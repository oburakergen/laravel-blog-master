require('./bootstrap');

$(document).ready(function() {
    function a() {
        $("body").removeClass("top-panel-closed").addClass("top-panel-opened"), setTimeout(function() {
            $("#panel").one("click", function(a) {
                $("body").hasClass("top-panel-opened") && b()
            })
        }, 1)
    }

    function b() {
        $("body").removeClass("top-panel-opened").addClass("top-panel-closed")
    }

    function g() {
        f.$carouselContainer.find("ol.carousel-indicators").addClass("indicators-fix"), f.$thumbnailsLi.first().addClass("active-thumbnail"), e.backgroundControl ? f.$controls.height(f.$carouselContainer.find(".carousel-inner").height()) : f.$carouselContainer.find(".carousel-control").addClass("controls-background-reset"), e.center && f.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>")
    }

    function h(a) {
        f.$thumbnailsLi.removeClass("active-thumbnail"), f.$thumbnailsLi.eq($(a).index()).addClass("active-thumbnail")
    }

    function i() {
        f.$carouselContainer.on("slide.bs.carousel", function(a) {
            h(a.relatedTarget)
        }), f.$thumbnailsLi.click(function() {
            f.$carouselContainer.carousel($(this).index())
        })
    }

    function m() {
        var a = $(".et-products-navigation .et-swiper-next"),
            b = $(".et-products-navigation .et-swiper-prev"),
            c = $(".et-product-info-slide.swiper-slide-active").data("swiper-slide-index"),
            d = c >= j - 1 ? 0 : c + 1,
            e = c <= 0 ? j - 1 : c - 1,
            f = $('.et-product-info-slide[data-swiper-slide-index="' + e + '"]'),
            g = f.find(".product-title a").first().text(),
            h = f.find(".price").html(),
            i = $('.et-product-info-slide[data-swiper-slide-index="' + d + '"]'),
            k = i.find(".product-title a").first().text(),
            l = i.find(".price").html();
        a.find(".swiper-nav-title").text(g), a.find(".swiper-nav-price").html(h), b.find(".swiper-nav-title").text(k), b.find(".swiper-nav-price").html(l)
    }
    $(".owl-demo").owlCarousel({
        autoPlay: !1,
        items: 4,
        pagination: !1,
        navigation: !0,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 2]
    }), $(".latest-blog, .banner-slider, .hipster-slider-product").owlCarousel({
        autoPlay: !1,
        items: 3,
        pagination: !1,
        navigation: !0,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    }), $(".instagram-slider").owlCarousel({
        autoPlay: !1,
        items: 6,
        pagination: !1,
        navigation: !1,
        itemsTablet: [768, 3],
        itemsMobile: [479, 3]
    }), $(".sidebar-slider").owlCarousel({
        autoPlay: !1,
        items: 2,
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        pagination: !0,
        navigation: !0
    }), $(".owl-quickly, .owl-testimonials, .slider-kids").owlCarousel({
        autoPlay: !1,
        items: 1,
        pagination: !0,
        navigation: !0,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    }), $(".owl-brands").owlCarousel({
        autoPlay: !1,
        items: 5,
        pagination: !1,
        navigation: !0,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    }), $(".category-slider").owlCarousel({
        autoPlay: !1,
        items: 4,
        pagination: !1,
        navigation: !0,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 2]
    }), $(".top-panel-open").click(function() {
        $("body").hasClass("top-panel-opened") ? b() : a()
    }), $(".close-panel").click(function() {
        $("#panel").click()
    }), $(window).scroll(function() {
        var a = $(window).scrollTop();
        a > 150 ? $(".fixed-header").addClass("enabled") : $(".fixed-header").removeClass("enabled")
    }), $(".search-btn").click(function() {
        $(".header-search").hasClass("search-full-width") || $(".header-search").addClass("search-full-width")
    }), $(".close-search").click(function() {
        $(".header-search").removeClass("search-full-width")
    });
    $(window).load(function() {
        console.log('Load Page Item')
        // setTimeout(function() {
        //     $("body").addClass("open_modal"), $(".popup").show()
        // }, 3200), $(".close").click(function() {
        //     $(".popup").hide(), $("body").removeClass("open_modal")
        // })
    });
    window.onload = function() {
        function b(b) {
            b.preventDefault(), a.close()
        }
        var a = new Slideout({
            panel: document.getElementById("panel"),
            menu: document.getElementById("menu"),
            touch: !1,
            side: "right"
        });
        document.querySelector(".js-slideout-toggle").addEventListener("click", function() {
            a.toggle()
        }), $(".toggle-button").on("click", function() {
            a.toggle()
        }), a.on("beforeopen", function() {
            this.panel.classList.add("panel-open")
        }).on("open", function() {
            this.panel.addEventListener("click", b)
        }).on("beforeclose", function() {
            this.panel.classList.remove("panel-open"), this.panel.removeEventListener("click", b)
        })
    }, $(".fa").on("click", function() {
        $(this).parent().parent().hasClass("menu-parent") && $(this).parent().parent().addClass("open-modile-menu")
    }), $(".menu-back").click(function() {
        $(".menu-parent").removeClass("open-modile-menu")
    }), $(window).load(function() {
        $(".footer-instagram").css("opacity", "1")
    });
    var c = $(".footer-instagram"),
        d = $("#panel");
    d.css("marginBottom", c.outerHeight()), $(window).resize(function() {
        d.css("marginBottom", c.outerHeight())
    }), $("#layerslider").layerSlider({
        type: "responsive",
        width: 1920,
        height: 720,
        autoStart: !1,
        pauseOnHover: "enabled",
        showBarTimer: !1,
        navPrevNext: !0,
        showCircleTimer: !1,
        navStartStop: !1,
        navButtons: !0,
        skin: "outline",
        skinsPath: "skins/",
        thumbnailNavigation: !1
    }), $("#layer-boxed").layerSlider({
        type: "responsive",
        width: 1140,
        height: 620,
        autoStart: !1,
        pauseOnHover: "enabled",
        showBarTimer: !1,
        navPrevNext: !0,
        showCircleTimer: !1,
        navStartStop: !1,
        navButtons: !0,
        skin: "outline",
        skinsPath: "skins/",
        thumbnailNavigation: !1
    }), $("#slider-banner").layerSlider({
        type: "responsive",
        width: 750,
        height: 535,
        autoStart: !1,
        pauseOnHover: "enabled",
        showBarTimer: !1,
        navPrevNext: !1,
        showCircleTimer: !1,
        navStartStop: !1,
        navButtons: !0,
        skin: "outline",
        skinsPath: "skins/",
        thumbnailNavigation: !1
    }), $("#layerslider-video").layerSlider({
        type: "fullsize",
        autoStart: !1,
        fillmode: "cover",
        showBarTimer: !1,
        navPrevNext: !0,
        showCircleTimer: !1,
        navStartStop: !1,
        navButtons: !1,
        skin: "outline",
        skinsPath: "skins/",
        thumbnailNavigation: !1
    }), myParaxify = paraxify(".paraxify"), $(window).load(function() {
        function a() {
            $(".menu-parent-item .nav-sublist-dropdown").each(function() {
                var a = 0,
                    b = $(this).parent(),
                    c = b.offset().left - a,
                    e = (b.offset().top, $(this).parent().width()),
                    f = e / 2,
                    g = $(this).outerWidth(),
                    h = c - g / 2,
                    i = 0,
                    j = $("header").outerHeight() / 2;
                h < 0 ? (i = c - 10, f = 0) : i = g / 2, $(this).css({
                    top: j,
                    left: -i,
                    marginLeft: f
                })
            })
        }
        $(window).resize(function() {
            a()
        }), a()
    }), $(".cat-parent .open").click(function() {
        $(".children").toggle("slow/300/fast")
    }), $(".filters-sorting").click(function() {
        $(".filters-sorting").children(".options").toggleClass("opened")
    }), $(".products-per-page").click(function() {
        $(".products-per-page").children(".options").toggleClass("opened")
    }), $(".filters-btn").click(function() {
        $(this).toggleClass("active"), $(".shop-filters-area").slideToggle("slow/300/fast")
    }), $(".quick-view-excerpts h5").click(function() {
        $(".quick-view-excerpts").toggleClass("view-up"), $(".quick-view-info").slideToggle("slow/300/fast")
    }), $(".minus").click(function() {
        var a = $(this).parent().find("input"),
            b = parseInt(a.val()) - 1;
        return b = b < 1 ? 1 : b, a.val(b), a.change(), !1
    }), $(".plus").click(function() {
        var a = $(this).parent().find("input");
        return a.val(parseInt(a.val()) + 1), a.change(), !1
    });
    var e = {
            center: !0,
            backgroundControl: !1
        },
        f = {
            $carouselContainer: $(".thumbnails-carousel").parent(),
            $thumbnailsLi: $(".thumbnails-carousel li"),
            $controls: $(".thumbnails-carousel").parent().find(".carousel-control")
        };
    $.fn.thumbnailsCarousel = function(a) {
        return e = $.extend(e, a), g(), i(), this
    }, $(".thumbnails-carousel").thumbnailsCarousel(), $("#content").infinitescroll({
        navSelector: "#next:last",
        nextSelector: "a#next:last",
        itemSelector: "#content",
        debug: !0,
        dataType: "html",
        maxPage: 3,
        path: function(a) {
            return "load-infinite" + a + ".html"
        }
    }, function(a, b, c) {});
    var j = $(".et-product-info-slide").length,
        k = new Swiper(".et-products-info-slider", {
            paginationClickable: !0,
            direction: "vertical",
            slidesPerView: 1,
            initialSlide: j,
            simulateTouch: !1,
            noSwiping: !0,
            loop: !0,
            onInit: function(a) {
                m()
            }
        });
    new Swiper(".et-products-images-slider", {
        paginationClickable: !0,
        direction: "vertical",
        slidesPerView: 1,
        loop: !0,
        simulateTouch: !1,
        noSwiping: !0,
        prevButton: ".et-products-navigation .et-swiper-prev",
        nextButton: ".et-products-navigation .et-swiper-next",
        onSlideNextStart: function(a) {
            k.slidePrev(), m()
        },
        onSlidePrevStart: function(a) {
            k.slideNext(), m()
        }
    }), new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        slidesPerView: 3,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            }
        },
        paginationClickable: !0,
        spaceBetween: 0,
        pagination: !1,
        loop: !0
    });
    $("#CountDownTimer").TimeCircles({
        time: {
            Days: {
                color: "#d64444"
            },
            Hours: {
                color: "#d64444"
            },
            Minutes: {
                color: "#d64444"
            },
            Seconds: {
                color: "#d64444"
            }
        },
        circle_bg_color: "rgba(255, 255, 255, 0)",
        bg_width: .3,
        fg_width: .03
    }), $("#CountDownTimerWhite").TimeCircles({
        time: {
            Days: {
                color: "#fff"
            },
            Hours: {
                color: "#fff"
            },
            Minutes: {
                color: "#fff"
            },
            Seconds: {
                color: "#fff"
            }
        },
        circle_bg_color: "rgba(255, 255, 255, 0.2)",
        bg_width: .3,
        fg_width: .03
    }), $("#slider-range").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(a, b) {
            $("#amount").val("$" + b.values[0] + " - $" + b.values[1])
        }
    }), $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1))
});
