const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pauseOnHover: true,
    speed: 700,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const totalSlides = heroSwiper.slides.length;
document.querySelector(".total-slide").textContent = totalSlides;

heroSwiper.on("slideChange", function () {
    document.querySelector(".current-slide").textContent = this.realIndex + 1;
});

const $btnStop = $(".btn-stop");

let sw = 0;
$btnStop.on("click", function () {
    if (sw === 0) {
        $btnStop.addClass("on active");
        heroSwiper.autoplay.stop();
        sw = 1;
    } else {
        $btnStop.removeClass("on active");
        heroSwiper.autoplay.start();
        sw = 0;
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});

// 3번째 슬라이더
const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
        nextEl: ".btn-news",
        prevEl: ".btn-news-prv",
    },
});
