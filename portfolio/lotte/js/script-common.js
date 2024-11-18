document.addEventListener("DOMContentLoaded", function () {
    const businessImg = document.querySelector(".business-menu figure img");

    // 페이지 로드 시 이미지 확대 효과
    businessImg.style.transform = "scale(1.2)";
    businessImg.style.transition = "transform 0.5s ease-out";
});
