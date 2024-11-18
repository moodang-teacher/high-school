$(function () {
    const mobileNav = $(".mobile-nav");
    $(".menu-btn").on("click", function () {
        mobileNav.addClass("active");
    });
    $(".close-area").on("click", function () {
        if (mobileNav.hasClass("active")) {
            mobileNav.removeClass("active");
        }
    });
    $(".mobile-gnb li").on("click", function () {
        $(this).children("a").toggleClass("active");
        $(this).find(".mobile-gnb-sub").toggleClass("active");
    });
    const topSlider = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: true,
        speed: 1000 /* 기본값 300 */,
        effect: "slide" /* slide, fade, cube, flip, coverflow */,

        slidesPerView: 1 /* 캐러셀 만들기, 보여질 슬라이드 개수, 소수점 가능 */,
        spaceBetween: 20 /* 간격 20px */,
        centeredSlides: true,

        // If we need pagination
        pagination: {
            el: ".top-slider-wrap .pagination",
            clickable: true,
        },
    });
});
