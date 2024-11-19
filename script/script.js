//제이쿼리 이벤트라고 검색하면 다양한 이벤트를 볼 수가 있음

//1111111111111111
//첫번째 공지사항 내용(.open-modal)을 선택(클릭)했을 때, 모달 창이 짠 등작//

$(".open-modal").click(function(){
    //$(".modal").css("display","block") 
    $(".modal").show();
})

//닫기 버튼을 클릭했을 때, 모달 창이 사라지게 만드세요

$(".close-modal").click(function(){
    //$(".modal").css("display","none")
    $(".modal").hide();
})





//2222222222222222
//공지사항 버튼을 클릭했을 때, 공지사항 영역이 짠 등작, 갤러리 영역은 사라짐
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();

    //버튼의 색도 바꿔주기
    $(".btn-notice").css("background-color","#5f1c25")
    $(".btn-gal").css("background-color","#ccc")
})


//갤러리 버튼을 클릭했을 때, 갤러리 영역이 짠 등작 , 공지사항 영역은 사라짐
$(".btn-gal").click(function(){
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("background-color","#5f1c25")
    $(".btn-notice").css("background-color","#ccc")
})



//3333333333333333
//메인메뉴안에 있는 li태그한테 마우스를 올리면, sub가 나타난다. (+마우스를 내리면, sub사라짐)
$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
})
$(".gnb>li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
})

//modal창은 우리가 임의로 만든 닫기 버튼이 있는 것이고 팝업창은 위에 url도 있고 표시가 있는 것
