// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const slides = document.querySelectorAll(".slide");
//     const pagination = document.querySelector(".pagination");

//     let currentIndex = 0;

//     // 페이지네이션 숫자 생성
//     slides.forEach((_, index) => {
//         const pageNumber = document.createElement("div");
//         pageNumber.classList.add("page-number");
//         pageNumber.textContent = index + 1;
//         if (index === 0) pageNumber.classList.add("active");
//         pageNumber.addEventListener("click", () => {
//             goToSlide(index);
//             window.scrollTo(0, 0); // 화면을 HTML 상단으로 스크롤
//         });
//         pagination.appendChild(pageNumber);
//     });

//     function updatePageNumbers() {
//         document.querySelectorAll(".page-number").forEach((number, index) => {
//             number.classList.toggle("active", index === currentIndex);
//         });
//     }

//     function goToSlide(index) {
//         currentIndex = index;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//         updatePageNumbers();
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".menu-btn .button");
//     const sliders = document.querySelectorAll(".slider-container .slider");

//     buttons.forEach((button) => {
//         button.addEventListener("click", function () {
//             const category = this.getAttribute("data-category");

//             // 모든 버튼에서 active 클래스 제거
//             buttons.forEach((btn) => btn.classList.remove("active"));
//             // 클릭된 버튼에 active 클래스 추가
//             this.classList.add("active");

//             // 모든 슬라이더 숨기기
//             sliders.forEach((slider) => slider.classList.remove("active"));
//             // 해당 카테고리의 슬라이더 표시
//             const activeSlider = document.querySelector(
//                 `.slider[data-category="${category}"]`
//             );
//             if (activeSlider) {
//                 activeSlider.classList.add("active");
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider-container .slider");
    const pagination = document.querySelector(".pagination");
    const buttons = document.querySelectorAll(".menu-btn .button");

    let currentSliderIndex = 0;

    function createPagination(slider) {
        const slides = slider.querySelectorAll(".slide");
        pagination.innerHTML = ""; // 기존 페이지네이션 초기화

        slides.forEach((_, index) => {
            const pageNumber = document.createElement("div");
            pageNumber.classList.add("page-number");
            pageNumber.textContent = index + 1;
            if (index === 0) pageNumber.classList.add("active");
            pageNumber.addEventListener("click", () => {
                goToSlide(slider, index);
                window.scrollTo(0, 0);
            });
            pagination.appendChild(pageNumber);
        });
    }

    function updatePageNumbers(slider) {
        const slides = slider.querySelectorAll(".slide");
        const pageNumbers = pagination.querySelectorAll(".page-number");
        slides.forEach((slide, index) => {
            const isActive = slide.classList.contains("active");
            pageNumbers[index].classList.toggle("active", isActive);
        });
    }

    function goToSlide(slider, index) {
        const slides = slider.querySelectorAll(".slide");
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        slider.style.transform = `translateX(-${index * 100}%)`;
        updatePageNumbers(slider);
    }

    // 초기 페이지네이션 생성
    createPagination(sliders[0]);

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            sliders.forEach((slider) => slider.classList.remove("active"));
            const activeSlider = document.querySelector(
                `.slider[data-category="${category}"]`
            );
            if (activeSlider) {
                activeSlider.classList.add("active");
                createPagination(activeSlider);
                currentSliderIndex = index;
            }
        });
    });
});
