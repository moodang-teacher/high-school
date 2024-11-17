$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const pgTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".pringles",
            // markers: true,
            id: "pringles",
            start: "top 50%", // trigger scroller(viewport)
            end: "bottom 30%",
        },
    });

    pgTL.from(".product-title h2", { y: 50, autoAlpha: 0 });
    pgTL.from(".product-title p", { y: 50, autoAlpha: 0 });
    pgTL.from(".product-wrap figure", { y: 50, autoAlpha: 0 });

    const ideaTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".idea",
            // markers: true,
            id: "pringles",
            start: "top 50%", // trigger scroller(viewport)
            end: "bottom 30%",
        },
    });

    ideaTL.from(".idea-title h2", { y: 50, autoAlpha: 0 });
    ideaTL.from(".idea-title p", { y: 50, autoAlpha: 0 });
    ideaTL.from(".idea-img-wrap li", { y: 50, autoAlpha: 0, stagger: 0.3 });

    const storyTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".story-wrap",
            // markers: true,
            id: "pringles",
            start: "top 50%",
            end: "bottom 0%",
            // scrub: 0.2, // 사용자의 스크롤바를 따라잡기까지 1초
            // pin: true,
        },
    });

    storyTL.from(".story-wrap figure", {
        x: -100,
        autoAlpha: 0,
        duration: 0.5,
    });
    storyTL.from(".story-title h2", { y: -50, autoAlpha: 0 });
    storyTL.from(".story-title strong", { autoAlpha: 0 });
    storyTL.from(".story-title p", { x: -50, autoAlpha: 0 });

    const brandTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".brand-wrap",
            // markers: true,
            id: "pringles",
            start: "top 50%",
            end: "bottom 0%",
            // scrub: 0.2, // 사용자의 스크롤바를 따라잡기까지 1초
            // pin: true,
        },
    });

    brandTL.from(".brand-wrap figure", {
        x: -100,
        autoAlpha: 0,
        duration: 0.5,
    });
    brandTL.from(".brand-title h2", { y: -50, autoAlpha: 0 });
    brandTL.from(".brand-title strong", { autoAlpha: 0 });
    brandTL.from(".brand-title p", { x: 50, autoAlpha: 0 });

    const endTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".end",
            // markers: true,
            id: "pringles",
            start: "top 50%",
            end: "bottom 0%",
        },
    });

    endTL.from(".end-title h2", { x: -100, autoAlpha: 0 });
    endTL.from(".end-title h2 strong", {
        autoAlpha: 0,
        duration: 0.7,
    });
    endTL.from(".end-title p", { y: 30, autoAlpha: 0 });
    endTL.from(".end-wrap figure img", { clipPath: "inset(0 100% 0 0" });
});
