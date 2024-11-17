// AOS.init();

// // TOP버튼
// const btnTop = document.querySelector(".btn-top");
// const html = document.documentElement;
// const htmlPos = html.scrollHeight / 1.6;

// window.addEventListener("scroll", function () {
//     let scrollTop = window.scrollY;

//     if (scrollTop >= htmlPos) {
//         btnTop.classList.add("active");
//     } else {
//         btnTop.classList.remove("active");
//     }
// });

const btnTop = document.querySelector(".btn-top");

// 스크롤 이벤트 감지
window.addEventListener("scroll", function () {
    if (window.scrollY > 1000) {
        btnTop.classList.add("active");
    } else {
        btnTop.classList.remove("active");
    }
});
