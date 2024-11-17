const visualSlide = new Swiper(".visual-slide", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
    speed: 1000,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});
// Swiper 초기화 함수
function initializeArtistSwiper() {
    const artistSwiper = new Swiper(".artist-swiper", {
        // Optional parameters
        loop: true,
        autoplay: true,
        speed: 1000,
        spaceBetween: 16,

        slidesPerView: getSlidesPerView(), // 초기 slidesPerView 설정

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },
    });

    return artistSwiper;
}

// 화면 크기에 맞게 slidesPerView 값을 계산하는 함수
function getSlidesPerView() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1325) {
        return 5; // 1325px 이상일 때 5개
    } else if (windowWidth >= 770) {
        return 3; // 770px ~ 1324px 사이일 때 3개
    } else {
        return 1; // 770px 이하일 때 1개
    }
}

// Swiper 초기화
let artistSwiper = initializeArtistSwiper();

// 화면 크기 변경 시 Swiper 업데이트
window.addEventListener("resize", function () {
    const newSlidesPerView = getSlidesPerView();

    // 슬라이드 수가 변경되면 Swiper 업데이트
    artistSwiper.params.slidesPerView = newSlidesPerView;
    artistSwiper.update(); // Swiper 업데이트
});

// new production 슬라이드
const updateSwiper = () => {
    const screenWidth = window.innerWidth;
    let slidesPerView;

    if (screenWidth <= 490) {
        slidesPerView = 2; // 490px 이하
    } else if (screenWidth <= 770) {
        slidesPerView = 3; // 770px 이하
    } else if (screenWidth <= 1325) {
        slidesPerView = 4; // 1325px 이하
    } else {
        slidesPerView = 6; // 기본값
    }

    const swiper = new Swiper(".newproduction-slide", {
        slidesPerView: slidesPerView,
        spaceBetween: 10,
        speed: 1000,
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

// 페이지 로드 시 및 창 크기 조정 시 스와이퍼 업데이트
window.addEventListener("load", updateSwiper);
window.addEventListener("resize", updateSwiper);

// 모달 recent news
// Modal 1
const thumbnail1 = document.querySelector(".videoThumbnail1");
const modal1 = document.getElementById("videoModal1");
const iframe1 = document.getElementById("videoIframe1");
const closeModal1 = document.getElementById("closeModal1");

thumbnail1.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe1.src = videoUrl;
    modal1.style.display = "flex";
});

closeModal1.onclick = function () {
    modal1.style.display = "none";
    iframe1.src = ""; // Clear video src
};

window.onclick = function (event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
        iframe1.src = "";
    }
};

// Modal 2
const thumbnail2 = document.querySelector(".videoThumbnail2");
const modal2 = document.getElementById("videoModal2");
const iframe2 = document.getElementById("videoIframe2");
const closeModal2 = document.getElementById("closeModal2");

thumbnail2.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe2.src = videoUrl;
    modal2.style.display = "flex";
});

closeModal2.onclick = function () {
    modal2.style.display = "none";
    iframe2.src = "";
};

window.onclick = function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
        iframe2.src = "https://www.youtube.com/embed/nm2fR-CB2SU";
    }
};

// Modal 3
const thumbnail3 = document.querySelector(".videoThumbnail3");
const modal3 = document.getElementById("videoModal3");
const iframe3 = document.getElementById("videoIframe3");
const closeModal3 = document.getElementById("closeModal3");

thumbnail3.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe3.src = videoUrl;
    modal3.style.display = "flex";
});

closeModal3.onclick = function () {
    modal3.style.display = "none";
    iframe3.src = "";
};

window.onclick = function (event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
        iframe3.src = "";
    }
};

// Modal 4
const thumbnail4 = document.querySelector(".videoThumbnail4");
const modal4 = document.getElementById("videoModal4");
const iframe4 = document.getElementById("videoIframe4");
const closeModal4 = document.getElementById("closeModal4");

thumbnail4.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe4.src = videoUrl;
    modal4.style.display = "flex";
});

closeModal4.onclick = function () {
    modal4.style.display = "none";
    iframe4.src = "";
};

window.onclick = function (event) {
    if (event.target === modal4) {
        modal4.style.display = "none";
        iframe4.src = "";
    }
};

// 비파인드
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const videoFrame = document.getElementById(`video-frame${popupId.charAt(popupId.length - 1)}`);
    const thumbnail = document.querySelector(`img[data-video][onclick*="${popupId}"]`);

    if (thumbnail) {
        const videoSrc = thumbnail.dataset.video;
        videoFrame.src = videoSrc.replace("watch?v=", "embed/"); // Convert to embed URL
    }

    popup.style.display = "flex"; // Show popup
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const videoFrame = document.getElementById(`video-frame${popupId.charAt(popupId.length - 1)}`);

    videoFrame.src = ""; // Stop the video
    popup.style.display = "none"; // Hide popup
}

// Close popup when clicking outside of the iframe
window.onclick = function (event) {
    const popups = document.getElementsByClassName("popup");
    for (let popup of popups) {
        if (event.target == popup) {
            closePopup(popup.id);
        }
    }
};
// pagenation
const paginationItems = document.querySelectorAll(".pagination-item");
paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        changePage(index + 1);
    });
});

function changePage(pageNumber) {
    console.log(`Page changed to: ${pageNumber}`);
    // Update active class and display items for the selected page
    paginationItems.forEach((item, index) => {
        item.classList.remove("active");
        if (index === pageNumber - 1) {
            item.classList.add("active");
        }
    });
}
