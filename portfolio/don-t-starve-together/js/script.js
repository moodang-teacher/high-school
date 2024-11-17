$(function () {
    // 대상을 변수에 저장+
    const $window = $(window);
    const $dim = $("#trailer .dim");
    const $videoWrap = $(".video-wrap");
    const $video = $(".video iframe");
    const $btnClose = $(".btn-close ");
    const $videoItem = $(".trailer-wrap li");
    const $background = $("#hero .background");
    const wilson = $("#hero .wilson");
    const willow = $("#hero .willow");
    const heroLogo = $("#hero .hero-logo");
    const boss = $(".Gomsol");

    const menuBar = $(".util-menu .menu");
    const menuScreen = $(".menu-screen");
    const hamburger = $("#hamburger");
    const location = $("#header .util-menu");
    const gnb = $(".gnb");

    // change 이벤트를 click 이벤트로 변경
    hamburger.on("click", function () {
        // 체크박스의 상태를 직접 토글
        const isChecked = $(this).prop("checked");
        if (isChecked) {
            menuScreen.addClass("on");
            gnb.addClass("on");
            location.addClass("on");
        } else {
            menuScreen.removeClass("on");
            gnb.removeClass("on");
            location.removeClass("on");
        }
    });

    // 마우스 좌표값
    let x = 0;
    let y = 0;

    // 보정된 값
    let mx = 0;
    let my = 0;

    let raf;
    /** 마우스 좌표를 구하고 시작점을 화면 정중앙으로 세팅하는 함수  */
    function getOffset() {
        // 마우스가 움직이면 좌표를 구하고 시작점을 화면의 정중앙으로 세팅
        $window.on("mousemove", (e) => {
            x = Math.max(-40, Math.min(40, e.pageX - $window.innerWidth() / 2));
            y = Math.max(-40, Math.min(40, e.pageY - $window.innerHeight() / 2));
            // console.log(x, y);
        });
    }
    // 움직임 구현
    function moving() {
        let speed = 0.008;
        // 좌표값 보정
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        // console.log(mx, my);
        // 부드럽게 반복
        raf = requestAnimationFrame(moving);

        // 대상에 적용
        wilson.css({
            transform: `translate3d(${mx * 2}px, ${my * 0.8}px, ${my}px)`,
        });
        willow.css({
            transform: `translate3d(${-mx * 2}px, ${-my * 0.8}px, ${mx}px)`,
        });
        $background.css({
            transform: `translate3d(${mx * 1}px,0px,${mx * 0.05}px)`,
        });
        heroLogo.css({
            transform: `translate(-50%,${my * 0.08 - 50}%)`,
        });
        boss.css({
            transform: `translate(${mx * 0.2 - 50}%,${my * 1}px)`,
        });
    }

    function initAnimation() {
        getOffset();
        moving();
    }

    if ($window.outerWidth() > 1280) {
        initAnimation();
    }

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", function () {
        // console.log($videoItem, $(this));

        // 선택한 li의 data-link 값을 받아서 videoLink 변수에 담기
        let videoLink = $(this).attr("data-link");
        // const videoLink = $(this).data("link");

        // 자동재생 추가
        videoLink += "?autoplay=1";
        // iframe의 src 값으로 videoLink를 전달
        $video.attr("src", videoLink);
        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");
    });
    $btnClose.on("click", () => {
        // 팝업창 닫기
        $dim.fadeOut();
        $videoWrap.removeClass("active");
        // 동영상 속성 삭제
        $video.attr("src", "");
    });
    // scroll-area의 위치값 구하기
    const targetPos = $("#intro").offset().top;
    //스크롤이 발생하면
    $window.on("scroll", function () {
        const scrollTop = $(this).scrollTop();
        // console.log(targetPos, scroll);
        // 스크롤 값이 scroll-area의 위치 값보다 커지면 애니메이션 중지
        if (scrollTop >= targetPos) cancelAnimationFrame(raf);
        // 상단으로 이동하면 애니메이션 실행
        if (scrollTop === 0) initAnimation();
    });

    const introImg = $("#intro figure");
    const introDim = $(".intro-dim ");
    const introVideoWrap = $(".intro-video-wrap");
    const introBtnClose = $(".intro-video-wrap .btn-close");
    const video = $(".intro-video-wrap .video iframe");
    introImg.on("click", () => {
        let videoLink = introImg.attr("data-link");
        videoLink += "?autoplay=1";
        video.attr("src", videoLink);
        introDim.fadeIn();
        introVideoWrap.addClass("active");
    });
    introBtnClose.on("click", () => {
        introDim.fadeOut();
        introVideoWrap.removeClass("active");
    });

    const introTitle = $("#intro .sec-title");
});
