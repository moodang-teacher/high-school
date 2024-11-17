// document.addEventListener("DOMContentLoaded", function () {
//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });

//   // Newsletter form submission
//   const newsletterForm = document.querySelector(".newsletter-form");
//   if (newsletterForm) {
//     newsletterForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const email = this.querySelector('input[type="email"]').value;
//       alert(`Thank you for subscribing with email: ${email}`);
//       this.reset();
//     });
//   }
// });

// var swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }

$(() => {
	const $menuBtn = $(".mobile-menu-btn, .close-mobile-gnb");
	const $blur = $(".blur");
	const $mobileGNB = $(".mobile-gnb");
	const $logo = $(".logo");
	const $utilMenu = $(".util-menu");

	let swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		direction: "horizontal",
		autoplay: {
			delay: 3000, // 3초마다 슬라이드 변경
			disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 계속
		},
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 50,
		breakpoints: {
			731: {
				slidesPerView: 2,
			},
			1321: {
				slidesPerView: 3,
			},
		},
	});

	$menuBtn.on("click", () => {
		const isMenuOpen = !$mobileGNB.hasClass("active");
		$mobileGNB.toggleClass("active", isMenuOpen);
		$blur.toggleClass("active", isMenuOpen);
		$logo.toggleClass("hide", isMenuOpen);
		$utilMenu.toggleClass("hide", isMenuOpen);
	});
});
