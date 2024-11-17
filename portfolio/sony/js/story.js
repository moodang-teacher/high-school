$(function () {
    const tl = gsap.timeline();

    //main
    tl.from(".header strong", { x: -100, autoAlpha: 0, duration: 1 });
    tl.from(".section-title", { x: -100, autoAlpha: 0, duration: 1 }, ">");

    // tl.from(".vision-con h2", { autoAlpha: 0, duration: 1 });
    // tl.from(".vision-con figure", { x: -50, autoAlpha: 0, stagger: 0.15 }, "-=0.4");
    // tl.from(".message h2", { x: -50, autoAlpha: 0, duration: 1 });

    // tl.from(".messsage-con p", {
    //     y: -50,
    //     autoAlpha: 0,
    //     stagger: 1,
    //     duration: 1,
    // });
    // tl.from(".messsage-con strong", {
    //     y: -50,
    //     autoAlpha: 0,
    //     stagger: 1,
    //     duration: 1,
    // });

    //vision
    const visionTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".vision",
            // markers: true,
            start: "top 30%",
            end: "bottom 0%",

            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    visionTL.from(".vision-con h2 ", {
        autoAlpha: 0,
        y: -30,
    });
    visionTL.from(".figure figure", {
        autoAlpha: 0,

        clipPath: "inset(0 100% 0 0",
    });

    //message
    const ceoMessageTL = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".ceo-message",
                // markers: true,
                start: "top 40%",
                end: "bottom 20%",

                scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
            },
        },
        ">"
    );

    ceoMessageTL.from(".message h2 ", {
        autoAlpha: 0,
        x: -50,
        duration: 1,
    });
});
