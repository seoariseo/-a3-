$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".main > li").find(".sub").stop().slideUp();
    })


    // 슬라이드 이미지 영역
    $(".fade li").eq(0).siblings().hide();

    var i =0;
    setInterval(function(){
        i= (i+1) % 3;

        $(".fade li").eq(i).fadeIn().siblings().fadeOut();

    }, 3000)//setInterval


    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on");
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});
        
    })///click


        $(".p_up").click(function(){
            $(".pop").show();

        })

        $(".close").click(function(){
            $(".pop").hide();
        })


})