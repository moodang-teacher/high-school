const cardSwiper = new Swiper(".card-swiper", {
    // Optional parameters

    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1300,
    },
    speed: 500,
    effect: "slide", // slide, fade, cube, filp, coverflow

    spaceBetween: 75, // 간격 75px
    breakpoints: {
        // max-width 기준으로 변경
        1024: {
            slidesPerView: 3,
            spaceBetween: 75, // 1024px 초과에서 간격 75px
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20, // 550px 초과 1024px 이하에서 간격 20px
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10, // 550px 이하에서 간격 10px
        },
    },
});

let player;
const mainVideoElement = document.getElementById("mainVideo");
const figures = document.querySelectorAll(".sub-video figure");
let currentlyEnlarged = null;

function loadYouTubePlayer(videoId) {
    if (player) {
        player.loadVideoById(videoId);
    } else {
        player = new YT.Player("mainVideo", {
            height: "360",
            width: "640",
            videoId: videoId,
            playerVars: {
                playsinline: 1,
            },
        });
    }
}

function enlargeFigure(figure) {
    if (currentlyEnlarged) {
        currentlyEnlarged.classList.remove("active");
    }
    figure.classList.add("active");
    currentlyEnlarged = figure;
}

figures.forEach((figure) => {
    figure.addEventListener("click", () => {
        const thumbnail = figure.querySelector(".thumbnail");
        const videoId = thumbnail.getAttribute("data-id");
        if (!player) {
            mainVideoElement.textContent = "";
            loadYouTubePlayer(videoId);
        } else {
            player.loadVideoById(videoId);
        }
        enlargeFigure(figure);
    });
});

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {}
