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

    // wish버튼 //
    document.querySelectorAll(".wishlist-btn").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });
    document.querySelectorAll(".new-wish").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });

    // 모든 wishlist-btn에 대해 클릭 이벤트 추가
    document.querySelectorAll(".wishlist-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
            // 찜하기 기능을 여기에 추가
        });
    });

    document.querySelectorAll(".new-wish").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
            // 찜하기 기능을 여기에 추가
        });
    });

    // //

    var swiper = new Swiper(".newSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: "slide",
        slidesPerView: 1,
        spaceBetween: 50,
    });

    // //
});
