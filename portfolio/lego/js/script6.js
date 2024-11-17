$(function () {
    // TOP버튼
    const backToTop = document.querySelector(".back-to-top");
    const html = document.documentElement;
    const htmlPos = html.scrollHeight / 2;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop >= htmlPos) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    // 부드럽게 맨 위로 스크롤하는 기능 추가
    backToTop.addEventListener("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600); // 600밀리초 동안 부드럽게 스크롤
    });

    // '''' //
    var swiper = new Swiper(".ideaSwiper", {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 30,
        spaceBetween: 20,
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 1500,
        effect: "slide",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
