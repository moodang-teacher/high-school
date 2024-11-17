document.addEventListener("DOMContentLoaded", () => {
    const featureSlider = new Swiper(".feature-slider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: "#feature .pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#feature .btn-next",
            prevEl: "#feature .btn-prev",
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1420: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        on: {
            init: function () {
                updateBackground(this);
            },
            slideChange: function () {
                updateBackground(this);
            },
        },
    });
    var characterSelect = new Swiper(".character-select", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        breakpoints: {
            700: {
                slidesPerView: 5,
            },
            1420: {
                slidesPerView: 6,
            },
        },
        watchSlidesProgress: false,
        allowTouchMove: false,
    });
    var characterScreen = new Swiper(".character-screen", {
        loop: true,
        effect: true,
        navigation: {
            nextEl: ".character-wrap .btn-next",
            prevEl: ".character-wrap .btn-prev",
        },
        thumbs: {
            swiper: characterSelect,
        },
    });
    /** 활성화 되있는 이미지로 배경 적용 함수 */
    function updateBackground(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const backgroundImage = activeSlide.dataset.background;
        document.querySelector("#feature .background").style.backgroundImage = `url(${backgroundImage})`;
    }
    const reviewsSlider = new Swiper(".reviews-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        breakpoints: {
            1280: { slidesPerView: 3 },
        },
        pagination: {
            el: "#reviews .pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#reviews .btn-next",
            prevEl: "#reviews .btn-prev",
        },
    });
});
