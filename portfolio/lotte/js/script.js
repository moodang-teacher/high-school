const prizeSlider = new Swiper(".prize-slider", {
    loop: true,
    autoplay: {
        delay: 2000, // 즉시 재생
        disableOnInteraction: false,
    },
    speed: 1200, // 슬라이드 속도를 더 느리게 하여 부드럽게 조정

    slidesPerView: 4,
    spaceBetween: 25,

    allowTouchMove: true,
    cssMode: false,

    navigation: {
        nextEl: ".prize-slider-button-next",
        prevEl: ".prize-slider-button-prev",
    },

    on: {
        init: function () {
            const totalSlides = this.slides.length;
            const visibleSlides = Math.ceil(this.params.slidesPerView);

            for (let i = 0; i < visibleSlides; i++) {
                this.appendSlide(this.slides[i].cloneNode(true));
            }
        },
    },
});
