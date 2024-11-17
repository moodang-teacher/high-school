const productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    // centeredSlides: true,
    // freeMode: true,
    // pauseOnHover: true,

    breakpoints: {
        400: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },
        1024: { slidesPerView: 3.5, spaceBetween: 30 },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
    },

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

var productsSwiper2 = new Swiper(".products-swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        400: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
    },

    pagination: {
        clickable: true,
    },
});
