/* $(function () {
  // item1 클릭 이벤트
  $(".item1").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item1").addClass("active");
    $(".item2, .item3, .item4").removeClass("active").css("top", "");
    $(".item-title").show(); // 모든 item-title을 다시 보이게 함
    $(".item-title1").hide(); // item4 클릭 시 .item-title 숨기기
    $(".item1-con").css("display", "flex");

    $(".item2-swiper").css("display", "none");
  });

  // item2 클릭 이벤트
  $(".item2").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item2").addClass("active");
    $(".item1, .item3, .item4").removeClass("active").css("top", "");
    $(".item-title").show(); // 모든 item-title을 다시 보이게 함
    $(".item-title2").hide(); // item4 클릭 시 .item-title 숨기기
    $(".item2-con").css("display", "flex");

    $(".item3-swiper").css("display", "none");
  });

  function updateItem2Position() {
    if (window.innerWidth <= 440) {
      $(".item2").css("top", "5rem");
    } else {
      $(".item2").css("top", "11.8rem");
    }
  }

  // 페이지 로드 시 위치 설정
  updateItem2Position();

  // 윈도우 리사이즈 시 위치 업데이트
  $(window).resize(updateItem2Position);

  // 클릭 이벤트
  $(".item3").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item3").addClass("active");
    $(".item1, .item2, .item4").removeClass("active");

    $(".item-title").show();
    $(".item-title3").hide();
    $(".item-slide .item-con").css("display", "flex");

    $(".item2-swiper").css("display", "none");
  });

  $(function () {
    // 현재 창 너비를 확인하고 조건에 따라 스타일 적용
    function updateItemPositions() {
      if (window.innerWidth <= 440) {
        $(".item2").css("top", "5rem");
        $(".item3").css("top", "10rem ");
        console.log("모바일 위치 적용");
      } else {
        $(".item2").css("top", "11.8rem");
        $(".item3").css("top", "24.6rem");
        console.log("PC 위치 적용");
      }
    }

    // 페이지 로드 시 위치 설정
    updateItemPositions();

    // 윈도우 리사이즈 시 위치 업데이트
    $(window).resize(function () {
      updateItemPositions();
    });

    // item4 클릭 이벤트
    $(".item4").on("click", function (event) {
      event.stopPropagation();
      $(".item-wrap").addClass("click");
      $(".item4").addClass("active");
      $(".item1, .item2, .item3").removeClass("active");

      $(".item-title").show();
      $(".item-title4").hide();
      $(".item-con").css("display", "flex");
      $(".item2-swiper").css("display", "none");
      $(".item3-swiper").css("display", "none");
      console.log("item4 클릭 이벤트 발생");
    });

    // product 섹션 내 클릭 시 이벤트 버블링 방지
    $(".item-wrap").on("click", function (event) {
      event.stopPropagation();
    });
  });
}); */

$(function () {
  // 현재 창 너비를 확인하고 조건에 따라 스타일 적용
  function updateItemPositions() {
    if (window.innerWidth <= 440) {
      $(".item2").css("top", "5rem");
      $(".item3").css("top", "10rem");
      console.log("모바일 위치 적용");
    } else {
      $(".item2").css("top", "11.8rem");
      $(".item3").css("top", "24.6rem");
      console.log("PC 위치 적용");
    }
  }

  // 페이지 로드 시 위치 설정
  updateItemPositions();

  // 윈도우 리사이즈 시 위치 업데이트
  $(window).resize(updateItemPositions);

  // item1 클릭 이벤트
  $(".item1").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item1").addClass("active");
    $(".item2, .item3, .item4").removeClass("active").css("top", "");
    $(".item-title").show();
    $(".item-title1").hide();
    $(".item1-con").css("display", "flex");
    $(".item2-swiper").css("display", "none");
  });

  // item2 클릭 이벤트
  $(".item2").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item2").addClass("active");
    $(".item1, .item3, .item4").removeClass("active").css("top", "");
    $(".item-title").show();
    $(".item-title2").hide();
    $(".item2-con").css("display", "flex");
    $(".item3-swiper").css("display", "none");
  });

  // item3 클릭 이벤트
  $(".item3").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item3").addClass("active");
    $(".item1, .item2, .item4").removeClass("active").css("top", "");
    updateItemPositions(); // item3 클릭 시 위치 업데이트
    $(".item-title").show();
    $(".item-title3").hide();
    $(".item-slide .item-con").css("display", "flex");
    $(".item2-swiper").css("display", "none");
  });

  // item4 클릭 이벤트
  $(".item4").on("click", function (event) {
    event.stopPropagation();
    $(".item-wrap").addClass("click");
    $(".item4").addClass("active");
    $(".item1, .item2, .item3").removeClass("active").css("top", "");
    updateItemPositions(); // item4 클릭 시 위치 업데이트
    $(".item-title").show();
    $(".item-title4").hide();
    $(".item-con").css("display", "flex");
    $(".item2-swiper").css("display", "none");
    $(".item3-swiper").css("display", "none");
    console.log("item4 클릭 이벤트 발생");
  });

  // product 섹션 내 클릭 시 이벤트 버블링 방지
  $(".item-wrap").on("click", function (event) {
    event.stopPropagation();
  });
});

const tinyflowSlider = new Swiper(".tinyflow-slider", {
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  virtualTranslate: true,
  loopPreventsSliding: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".tinyflow-slider__pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return `<button type="button" aria-label="pagination ${
        index + 1
      }" class="tinyflow-slider__pagination__btn ${className}" style="--_progress: 0%;"></button>`;
    },
  },
  navigation: {
    nextEl: ".arrow--next",
    prevEl: ".arrow--prev",
  },
  on: {
    slideChange: function () {
      // 모든 카드의 overlay를 기본 빨간색으로 설정
      this.slides.forEach((slide) => {
        const overlay = slide.querySelector(".overlay");
        const textWrap = slide.querySelector(".text-wrap");
        if (overlay) {
          overlay.style.opacity = "1"; // 모든 슬라이드의 overlay를 보이게 설정
          overlay.style.backgroundColor = "rgba(255, 0, 0, 1)"; // 기본 빨간색으로 설정
        }
        if (textWrap) {
          textWrap.style.zIndex = "0"; // 모든 text-wrap의 z-index를 0으로 설정
        }
      });

      // 활성 슬라이드의 overlay는 투명하게 설정
      const activeSlide = this.slides[this.activeIndex];
      const activeOverlay = activeSlide.querySelector(".overlay");
      const activeTextWrap = activeSlide.querySelector(".text-wrap");
      if (activeOverlay) {
        activeOverlay.style.opacity = "0"; // 활성 슬라이드는 투명하게 설정
      }
      if (activeTextWrap) {
        activeTextWrap.style.zIndex = "1"; // 활성 슬라이드의 text-wrap z-index를 1로 설정
      }

      // 다음 슬라이드의 overlay 색상 설정 (초록색)
      const nextSlide = this.slides[this.activeIndex + 1];
      if (nextSlide) {
        const nextOverlay = nextSlide.querySelector(".overlay");
        if (nextOverlay) {
          nextOverlay.style.backgroundColor = "rgba(180, 0, 0, 1)"; // 다음 슬라이드는 초록색으로 설정
        }
      }
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 현재 활성화된 item2와 swiper 슬라이더를 추적하는 변수
let activeItem = null;

// 모든 item2 요소에 대해 클릭 이벤트 설정
document.querySelectorAll(".item2").forEach(function (item) {
  item.addEventListener("click", function () {
    // 클릭된 item2 내부의 swiper 슬라이더 요소 선택
    const swiperElement = this.querySelector(".swiper.mySwiper.item-swiper");

    // 현재 클릭된 item2가 이전에 클릭된 item2와 다른 경우만 처리
    if (activeItem && activeItem !== this) {
      // 이전 활성화된 item2의 swiper 슬라이더 숨기기
      const activeSwiper = activeItem.querySelector(
        ".swiper.mySwiper.item-swiper"
      );
      if (activeSwiper) activeSwiper.style.display = "none";
    }

    // 현재 클릭된 item2의 swiper 슬라이더를 보이도록 설정
    if (
      swiperElement.style.display === "none" ||
      swiperElement.style.display === ""
    ) {
      swiperElement.style.display = "flex";
      activeItem = this; // 현재 활성 item2로 업데이트
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const item3 = document.querySelector(".item3");
  const item3Swiper = document.querySelector(".item3-swiper");
  const item3Con = document.querySelector(".item-con.item3-con");
  const otherItems = document.querySelectorAll(".item1, .item2, .item4");

  function toggleItem3ActiveState() {
    if (item3.classList.contains("active")) {
      item3Swiper.style.display = "flex";
      item3Con.style.display = "flex";
    } else {
      item3Swiper.style.display = "none";
      item3Con.style.display = "none";
    }
  }

  // 초기 상태에 따라 display 설정
  toggleItem3ActiveState();

  // .item3 클릭 시 한 번만 active 적용
  item3.addEventListener("click", function () {
    if (!item3.classList.contains("active")) {
      // 이미 active인 경우 클릭 시 무시
      item3.classList.add("active");
      toggleItem3ActiveState();
    }
  });

  // 다른 아이템 클릭 시 .item3의 active 해제
  otherItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item3.classList.contains("active")) {
        item3.classList.remove("active");
        toggleItem3ActiveState();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const item4 = document.querySelector(".item4");
  const item4Swiper = document.querySelector(".item4-swiper");
  const item4Con = document.querySelector(".item-con.item4-con");
  const otherItems = document.querySelectorAll(".item1, .item2, .item3");

  function toggleItem4ActiveState() {
    if (item4.classList.contains("active")) {
      item4Swiper.style.display = "flex";
      item4Con.style.display = "flex";
    } else {
      item4Swiper.style.display = "none";
      item4Con.style.display = "none";
    }
  }

  // 초기 상태에 따라 display 설정
  toggleItem4ActiveState();

  // .item4 클릭 시 한 번만 active 적용
  item4.addEventListener("click", function () {
    if (!item4.classList.contains("active")) {
      // 이미 active인 경우 클릭 시 무시
      item4.classList.add("active");
      toggleItem4ActiveState();
    }
  });

  // 다른 아이템 클릭 시 .item4의 active 해제
  otherItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item4.classList.contains("active")) {
        item4.classList.remove("active");
        toggleItem4ActiveState();
      }
    });
  });
});
