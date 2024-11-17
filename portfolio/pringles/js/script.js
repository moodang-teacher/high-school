const mainSwiper = new Swiper(".main-swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: true,
    speed: 1000, // 기본값
    effect: "slide", // slide, fade, cube, filp, coverflow

    slidesPerView: 1, // 보여질 슬라이드 갯수
    spaceBetween: 50, // 간격 20px

    // allowTouchMove: false /* 마우스 이벤트 막기 */

    // allowTouchMove: false

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});

// .product img 요소를 선택
const productImage = document.querySelector(".product img");

// active 클래스를 추가하고 2초 후 제거하는 함수
function addAndRemoveActive() {
    // active 클래스 추가
    productImage.classList.add("active");

    // 2초 후에 active 클래스 제거
    setTimeout(() => {
        productImage.classList.remove("active");

        // 다시 2초 후에 함수 재실행
        setTimeout(addAndRemoveActive, 2000);
    }, 2000);
}

// 초기 실행
addAndRemoveActive();

const mainText1 = document.querySelector(".visual3 h2");
const mainText2 = document.querySelector(
    ".main-swiper .swiper-wrapper section h1"
);

// Function to add and remove 'active' class
function toggleActive() {
    mainText1.classList.add("active");
    mainText2.classList.add("active");

    // Remove 'active' class after 1 second
    setTimeout(() => {
        mainText1.classList.remove("active");
    }, 4000);
    setTimeout(() => {
        mainText2.classList.remove("active");
    }, 1000);
}

// Initial call to start the cycle
toggleActive();

// Set interval to repeat every 5 seconds
setInterval(toggleActive, 5000);

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    function updateVisibility() {
        const isAnyActive =
            Array.from(tabButtons).some((btn) =>
                btn.classList.contains("active")
            ) ||
            Array.from(tabContents).some((content) =>
                content.classList.contains("active")
            );

        if (!isAnyActive) {
            tabButtons.forEach((btn) => (btn.style.display = "none"));
            tabContents.forEach((content) => (content.style.display = "none"));
        } else {
            tabButtons.forEach((btn) => (btn.style.display = ""));
            tabContents.forEach((content) => (content.style.display = ""));
        }
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) =>
                content.classList.remove("active")
            );

            button.classList.add("active");
            document.getElementById(tabId).classList.add("active");

            updateVisibility();
        });
    });

    // Initial check
    updateVisibility();
});
