gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
    smooth: 2,
    effects: true
})
gsap.from(".hero", {
    opacity: 0,
    duration: 1.5
})

gsap.from("picture:nth-child(2)", {
    y: 100,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -100,
    duration: 1
})

gsap.from(".card1, .card2, .card3", {
    opacity: 0,
    y: 60,
    filter: "blur(20px)",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 85%",
        end: "100% 70%",
        scrub: true,

    }
})

gsap.from(".obrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(20px)",
    stagger: .1,
    scrollTrigger: {
        trigger: ".obrigado ul",
        start: "0% 80%",
        end: "100% 50%",
        scrub: 3,

    }

})



gsap.from("footer", {
    y: -200,
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        end: "100% 100%",
        scrub: true,
        invalidadeOnRefresh: true
    }
})


const split = SplitText.create(".textosplit", {
    type: "lines,words,chars",
    mask: "lines",
})

gsap.from(split.chars, {
    y: 40,
    opacity: 0,
    duration: .3,
    stagger: 0.03,
})

const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preloader", {
            opacity: 0,
            onComplete() {
                gsap.to("#preloader", {
                    display: "none"
                })
            }
        })
    }
});

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
})

tl.to("#preloader path", {
    fill: "rgb(141, 22, 22)",
    duration: .5,
    strokeDashoffset: 0
})