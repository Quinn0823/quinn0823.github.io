let title = document.querySelector(".title");
let subTitle = document.querySelector(".subtitle");
let fadeAndMove = [
    {
        opacity: 0,
        transform: `translateY(-20px)`,
    },
    {
        opacity: 1,
        transform: `translateY(0px)`,
    },
];

let titleTiming = {
    duration: 2000,
    easing: "ease-in-out",
};

const titleChange = title.animate(fadeAndMove, titleTiming);

let expand = [
    {
        letterSpacing: "-0.5em",
        opacity: 0,
    },
    {
        letterSpacing: "initial",
        opacity: 1,
    },
];

let subTitleTiming = {
    duration: titleChange.effect.getComputedTiming().duration / 2,
    easing: "ease-in-out",
};

const subTitleChange = subTitle.animate(expand, subTitleTiming);
subTitleChange.pause();

document.addEventListener("click", () => {
    // idle, running, paused, finished
    if (subTitleChange.playState !== "finished") {
        subTitleChange.play();
    }
});