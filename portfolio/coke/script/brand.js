document.querySelectorAll(".drink-type li").forEach((item) => {
  item.addEventListener("click", function () {
    const selectedType = item.getAttribute("data-type");

    // 모든 섹션을 숨기고 visible 클래스 제거
    document.querySelectorAll(".brand-sec").forEach((section) => {
      section.classList.add("hidden");
      section.classList.remove("visible");
    });

    // 선택된 섹션만 보이도록 설정 및 margin-bottom 적용
    const selectedSection = document.querySelector(`.brand-sec.${selectedType}`);
    if (selectedSection) {
      selectedSection.classList.remove("hidden");
      selectedSection.classList.add("visible");
    }
  });
});

// 전체 보기 버튼 클릭 시 모든 섹션을 다시 표시하며 margin-bottom 제거
function showAll() {
  document.querySelectorAll(".brand-sec").forEach((section) => {
    section.classList.remove("hidden", "visible");
  });
}
