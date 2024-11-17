// 모든 class="click-img" 요소들을 선택
const clickableImages = document.querySelectorAll(".click-img");

// 각 이미지에 클릭 이벤트 리스너 추가
clickableImages.forEach(function (img) {
    img.addEventListener("click", function () {
        window.location.href = "page.html"; // 클릭 시 이동할 페이지
    });
});
