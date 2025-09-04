const init = async () => {
    await import("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js");
    // await import("./tweenmax.js");

    // document.addEventListener("DOMContentLoaded", () => {
    const $bigBall = document.querySelector(".unisale__cursor-ball--big");
    const $smallBall = document.querySelector(".unisale__cursor-ball--small");
    const $hoverables = document.querySelectorAll(".hoverable");

    document.body.addEventListener("mousemove", onMouseMove);

    // Listeners
    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener("mouseenter", onMouseHover);
        $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
        TweenMax.to($bigBall, 0.4, {
            x: e.clientX - 15,
            y: e.clientY - 15,
        });
        TweenMax.to($smallBall, 0.1, {
            x: e.clientX - 3,
            y: e.clientY - 3,
        });
    }

    // Hover an element
    function onMouseHover() {
        TweenMax.to($bigBall, 0.3, {
            scale: 1.5,
        });
    }
    function onMouseHoverOut() {
        TweenMax.to($bigBall, 0.3, {
            scale: 1,
        });
    }
    // });
};

init();
