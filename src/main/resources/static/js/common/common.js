/*!
* 공통 js
*/

//해상도 resize
$(window).resize(function() {
    if ($(window).width() < 768) {
        //해상도 768px 미만일 경우 메뉴 아코디언 hide
        $('.sidebar .collapse').collapse('hide');
    }else if ($(window).width() < 480 && !$(".sidebar").hasClass(
        "toggled")) {
        //해상도 480px 미만일 경우 사이드 메뉴 바 toggle
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $('.sidebar .collapse').collapse('hide');
    }
});

//현재 시간
setInterval("currentTime()", 1000);
function currentTime() {
    let date = new Date();
    document.querySelector("#now").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

$(() => {
    //현재 날짜
    document.querySelector("#currentDate").innerHTML = new Date().toISOString().substring(0, 10);

    //sidebar 메뉴 클릭 시 url 주소를 이용해 active class 추가 & topbar-title 수정
    let url = location.href;
    let getAr0 = url.indexOf("kmapp");
    let getAr1 = url.indexOf("dnsc");

    if(getAr0 !== -1) {
        $('.item-kmapp').addClass("active");
        document.querySelector("#topbar-title").innerHTML = 'KMAPP 분석시스템';
    }else if(getAr1 !== -1){
        $('.item-kmapp').removeClass("active");
        $('.item-dnsc').addClass("active");
        document.querySelector("#topbar-title").innerHTML = 'KMAPP 예측시스템';
    }
});

