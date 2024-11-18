document.addEventListener("DOMContentLoaded", function () {
    const gridPics = document.querySelectorAll(".tidings-grid-pic figure img");

    // 이미지 내부만 확대되는 효과 함수
    function applyZoomInEffect(element, zoomIn) {
        const container = element.parentElement; // 이미지가 포함된 figure 요소
        if (zoomIn) {
            container.style.overflow = "hidden"; // 확대된 부분이 벗어나지 않게 설정
            element.style.transform = "scale(1.1)"; // 이미지 확대 (1.2 -> 1.05로 줄임)
            element.style.transition = "transform 0.3s ease-in-out"; // 부드럽게 확대/축소
        } else {
            element.style.transform = "scale(1)"; // 원래 크기로 돌아옴
        }
    }

    // 이미지 호버 효과
    gridPics.forEach((img) => {
        img.addEventListener("mouseover", function () {
            applyZoomInEffect(this, true); // 마우스를 올리면 확대
        });

        img.addEventListener("mouseout", function () {
            applyZoomInEffect(this, false); // 마우스를 떼면 원래 크기로
        });
    });
});
