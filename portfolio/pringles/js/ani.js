$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const newTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".new-product",
            // markers: true,
            id: "product",
            start: "top 50%", // trigger scroller(viewport)
            end: "bottom 30%",
        },
    });

    newTL.from(".new-product .title", { y: 50, autoAlpha: 0 });
    newTL.from(".text strong", { y: 20, autoAlpha: 0 });
    newTL.from(".text p", { y: 20, autoAlpha: 0 });
    newTL.from(".product figure", { x: -500, duration: 1 });
    newTL.from(".product .video", { y: 50, autoAlpha: 0 });
});
