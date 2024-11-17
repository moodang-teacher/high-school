//gnb
// 햄버거 메뉴 클릭 시 gnb 메뉴 토글
document.querySelector(".hamburger-menu").addEventListener("click", function () {
    document.querySelector(".gnb").classList.toggle("active");
});

// 각 네비게이션 항목 클릭 시 메뉴를 닫고 페이지로 이동
document.querySelectorAll(".gnb ul li a").forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        document.querySelector(".gnb").classList.remove("active");
    });
});
