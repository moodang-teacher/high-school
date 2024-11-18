const productSlider = new Swiper(".product-slider", {
    loop: true,
    autoplay: true,

    slidesPerView: "auto", //모바일일 경우에는 자동으로 슬라이드 갯수 조정
    spaceBetween: 20, // 간격 20px
    centeredSlides: false, //첫번째 슬라이드를 가운데로
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    // Responsive breakpoints
    breakpoints: {
        1024: {
            slidesPerView: 3, //모바일일 경우에는 3개의 슬라이드 보이도록
            spaceBetween: 30, // 간격 20px
        },
    },
});

const reviewSlider = new Swiper(".review-slider", {
    loop: true,
    autoplay: true,

    slidesPerView: 2.5, //보여질 슬라이드 갯수
    spaceBetween: 15, // 간격 20px
    centeredSlides: false, //첫번째 슬라이드를 가운데로
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        668: {
            spaceBetween: 30, // 간격 20px
            //   slidesPerView: 2, //보여질 슬라이드 갯수
        },
        1024: {
            // 간격 20px
        },
    },
});

const seriesSlider = new Swiper(".series-slider", {
    loop: true,
    autoplay: true,

    slidesPerView: "auto", //보여질 슬라이드 갯수
    spaceBetween: 12, // 간격 20px
    centeredSlides: false, //첫번째 슬라이드를 가운데로
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        668: {
            spaceBetween: 24, // 간격 20px
        },

        1024: {
            slidesPerView: 3, //보여질 슬라이드 갯수
            spaceBetween: 30, // 간격 20px
        },
    },
});
