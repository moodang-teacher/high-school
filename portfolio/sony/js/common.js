$(function () {
    // GNB
    const $header = $("#header");
    const $menu = $(".gnb > li");
    const $subMenu = $(".sub-menu");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $header.addClass("active");
        // $(this).find($subMenu).stop().slideDown(duration);
        $subMenu.stop().fadeIn(duration);
    });
    $menu.on("mouseleave", function () {
        $header.removeClass("active");
        $subMenu.stop().fadeOut(duration);
    });

    // SONY PICK
    const pickSlider = new Swiper(".pick-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: "auto",
        spaceBetween: 45,

        navigation: {
            nextEl: ".pick-slider-wrap .button-next",
            prevEl: ".pick-slider-wrap .button-prev",
        },
    });

    const newsSlider = new Swiper(".news-slider", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: ".news-slider-wrap .button-next",
            prevEl: ".news-slider-wrap .button-prev",
        },
    });

    // PROMOTION
    const promoSlider = new Swiper(".promo", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1.5,
        spaceBetween: 40,
        centeredSlides: true,

        navigation: {
            nextEl: ".news-slider-wrap .button-next",
            prevEl: ".news-slider-wrap .button-prev",
        },
    });
    // SERVICE
    const serviceSlider = new Swiper(".service-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        // spaceBetween: 40,

        navigation: {
            nextEl: ".service-slider .next",
            prevEl: ".service-slider .prev",
        },
    });
    // MAIN
    const mainSlider = new Swiper(".main", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 40,
    });

    $(".list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });
    $(".sort-list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    $(".item-list").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    // 탑버튼
    const btnTop = $(".btn-top");
    const $footer = $("#footer");

    $(window).scroll(function () {
        const footerOffset = $footer.offset().top;
        const scrollPos = $(window).scrollTop() + $(window).height();

        if (scrollPos >= footerOffset) {
            btnTop.addClass("white");
        } else {
            btnTop.removeClass("white");
        }
    });

    // 탑버튼 클릭시 부드러운 스크롤
    btnTop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // top banner
    $(".top-banner a").on("click", function (e) {
        e.preventDefault();
        $(".top-banner").slideUp();
    });

    // 스토리 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    const keywords = document.querySelectorAll(".keywords > div");
    const keywordsCon = document.querySelectorAll(".keywords-con > p");
    const keywordsPics = gsap.utils.toArray(".keywords-pic figure");

    keywordsPics.forEach((pic, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: pic,
                // markers: true,
                start: "top 30%",
                end: "bottom 0%",
                scrub: 1,
                // pin: true,

                toggleClass: {
                    targets: [keywords[index], keywordsCon[index]],
                    className: "active",
                },
            },
        })
            .from(pic, {
                // autoAlpha: 0,
                // y: 100,
                // clipPath: "inset(20% 10%)",
                borderRadius: 60,
                width: "80%",
                height: "80%",
                duration: 5,
            })
            .to(".fake", { x: 100, duration: 20 });
    });

    // 모바일 메뉴
    $(".btn-menu").on("click", function (e) {
        e.preventDefault();

        if ($(window).innerWidth() >= 1200) {
            return;
        } else {
            $(".mobile-menu").slideDown();
        }
    });

    $(".btn-close").on("click", function () {
        $(".mobile-menu").slideUp();
    });

    $(window).on("resize", function () {
        $(".mobile-menu").slideUp();
    });
});
