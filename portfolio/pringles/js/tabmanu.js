$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".menu-btn > button");
    const $sliders = $(".slider");

    // 처음 세팅
    tabAction(0);

    // 탭메뉴를 클릭했을 때
    $tabMenu.on("click", function (e) {
        // 기본 동작 막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tabAction(index) {
        // 탭메뉴 활성화
        $tabMenu.removeClass("active");
        $tabMenu.eq(index).addClass("active");

        // 인덱스에 해당하는 슬라이더 보이기
        $sliders.hide();
        $sliders.eq(index).show();
    }
});

$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".FAQ-tab-menu > li");
    const $tabCon = $(".FAQ-tab-con-item");

    // console.log($tabMenu, $tabCon);

    // 처음 세팅
    tabAction(0);

    // 탭메뉴를 클릭했을 때
    $tabMenu.on("click", function (e) {
        // a의 기본 동작 막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tabAction(index) {
        // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");

        // 인덱스에 해당하는 $tabCon 보이기
        $tabCon.hide();
        $tabCon.eq(index).show();
    }
});
