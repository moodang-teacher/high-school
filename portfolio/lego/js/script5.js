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

    document.querySelectorAll(".wishlist-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
        });
    });
    document.querySelectorAll(".wish-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
        });
    });
});
