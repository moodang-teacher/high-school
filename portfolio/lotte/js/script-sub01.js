const tabMenuItems = document.querySelectorAll(".tab-menu li a");
const tabContents = document.querySelectorAll(".tab-con-item");

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 5, // 한 번에 5개 슬라이드 보이기
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// 탭 메뉴 클릭 이벤트
tabMenuItems.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();

        // 모든 탭 스타일 초기화
        tabMenuItems.forEach((item) => {
            item.style.backgroundColor = ""; // 배경색 초기화
            item.style.color = ""; // 글자색 초기화
            item.parentElement.classList.remove("on");
        });

        // 클릭된 탭 스타일 변경
        this.style.backgroundColor = "#ed1c24"; // 배경색 변경
        this.style.color = "#fff"; // 글자색 흰색으로 변경
        this.parentElement.classList.add("on");

        // 모든 컨텐츠 숨기기
        tabContents.forEach((content) => {
            content.style.display = "none";
        });

        // 선택된 컨텐츠만 보이기
        tabContents[index].style.display = "flex";
    });

    // 페이지 로드 시 첫 번째 탭 기본 선택
    document.addEventListener("DOMContentLoaded", function () {
        tabMenuItems[0].style.backgroundColor = "#ed1c24";
        tabMenuItems[0].style.color = "#fff";
        tabMenuItems[0].parentElement.classList.add("on");

        // 첫 번째 탭 콘텐츠만 보이도록 설정
        tabContents.forEach((content, index) => {
            content.style.display = index === 0 ? "flex" : "none";
        });
    });
});
