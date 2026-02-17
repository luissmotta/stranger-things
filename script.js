gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function initDesktop() {
    const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
    });

    gsap.from(".hero", { opacity: 0, duration: 1.2 });

    gsap.from("picture:nth-child(2)", { y: 100, duration: 1 });
    gsap.from("picture:nth-child(1)", { y: -100, duration: 1 });

    gsap.from(".card1, .card2, .card3", {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".cards",
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
        },
    });

    gsap.from(".obrigado ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(20px)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".obrigado ul",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 3,
        },
    });

    gsap.from("footer", {
        y: -200,
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
        },
    });

    const split = SplitText.create(".textosplit", {
        type: "lines,words,chars",
        mask: "lines",
    });

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
    });
}

function initMobile() {
    const split = SplitText.create(".textosplit", {
        type: "lines,chars",
        mask: "lines",
    });

    gsap.from(split.chars, {
        y: 18,
        opacity: 0,
        duration: 0.25,
        stagger: 0.015,
    });

    gsap.from(".card1, .card2, .card3", {
        opacity: 0,
        y: 28,
        filter: "blur(10px)",
        stagger: 0.12,
        scrollTrigger: {
            trigger: ".cards",
            start: "top 85%",
            once: true,
        },
    });

    gsap.from(".obrigado ul li", {
        opacity: 0,
        x: 18,
        filter: "blur(10px)",
        stagger: 0.05,
        scrollTrigger: {
            trigger: ".obrigado ul",
            start: "top 85%",
            once: true,
        },
    });
}

function initAnimations() {
    if (window.innerWidth >= 768) {
        initDesktop();
    } else {
        initMobile();
    }
}

const tl = gsap.timeline();

tl.to("#preloader path", { duration: 1, strokeDashoffset: 0 });
tl.to("#preloader path", { fill: "rgb(141, 22, 22)", duration: 0.5 });

tl.add(() => {
    initAnimations();
    requestAnimationFrame(() => ScrollTrigger.refresh());
}, ">");

tl.to("#preloader", { opacity: 0, duration: 0.15 }, "<");
tl.set("#preloader", { display: "none" });
