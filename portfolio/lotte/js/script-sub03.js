const tabMenuItems = document.querySelectorAll(".tab-employment li"); // <a> 대신 <li> 클릭 이벤트
const tabContents = document.querySelectorAll(".tab-con-menu");

// 탭 메뉴 클릭 이벤트
tabMenuItems.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();

        // 모든 탭 스타일 초기화
        tabMenuItems.forEach((item) => {
            item.style.backgroundColor = ""; // 배경색 초기화
            item.style.color = ""; // 글자색 초기화
            item.classList.remove("on");
        });

        // 클릭된 탭 스타일 변경
        tab.style.backgroundColor = "#ed1c24"; // 배경색 변경
        tab.style.color = "#fff"; // 글자색 흰색으로 변경
        tab.classList.add("on");

        // 모든 컨텐츠 숨기기
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });

        // 선택된 컨텐츠만 보이기
        tabContents[index].classList.add("active");
    });
});

// 페이지 로드 시 첫 번째 탭 기본 선택
document.addEventListener("DOMContentLoaded", function () {
    tabMenuItems[0].style.backgroundColor = "#ed1c24";
    tabMenuItems[0].style.color = "#fff";
    tabMenuItems[0].classList.add("on");

    // 첫 번째 탭 콘텐츠만 보이도록 설정
    tabContents.forEach((content, index) => {
        content.classList.remove("active");
        if (index === 0) {
            content.classList.add("active");
        }
    });
});
