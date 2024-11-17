// Swiper 인스턴스를 저장할 변수
let swiper = null;

// 미디어 쿼리 설정
const mediaQuery = window.matchMedia("(max-width: 900px)");

// Swiper 초기화 함수
function initializeSwiper() {
    // 만약 이미 swiper가 초기화되어 있다면, 먼저 swiper를 제거
    if (swiper !== null) {
        swiper.destroy(true, true); // 기존 인스턴스를 완전히 제거
    }

    // 화면 크기에 따른 Swiper 설정
    if (mediaQuery.matches) {
        // 600px 이하일 때
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1, // 한 개의 슬라이드만 표시
            spaceBetween: 20, // 슬라이드 간격 20px
            loop: true,
            speed: 500,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        // 600px 초과일 때
        swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto", // 자동 슬라이드 크기
            spaceBetween: 40, // 슬라이드 간격 40px
            loop: true,
            speed: 500,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

// 페이지 로드시 Swiper 초기화
initializeSwiper();

// 화면 크기 변화 감지 시 Swiper 재초기화
mediaQuery.addListener(initializeSwiper);
