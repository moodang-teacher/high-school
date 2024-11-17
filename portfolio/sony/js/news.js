$(function () {
    const tl = gsap.timeline();
    //main
    tl.from(".header strong", { x: -100, autoAlpha: 0, duration: 1 });
    tl.from(".section-title", { x: -100, autoAlpha: 0, duration: 1 }, ">");

    // const newsTL = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".news",
    //         // markers: true,
    //         start: "top 80%",
    //         end: "bottom 60%",

    //         scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
    //     },
    // });

    // newsTL.from(".news-list ", {
    //     autoAlpha: 0,
    //     y: 30,
    // });
});
