$(document).ready(function(){
 
    // if($(".Adv_bar").prop("checked")){
    //     // alert($(this).prop("checked"));
    //     // $("input[name=price_check]").each(function(){
    //     // if($(this).val() == Selected) {
    //     //   $(this).prop("checked", true);
    //     // }else {
    //     //   $(this).prop("checked", false);
    //     // }
    //     // });
    // }
    // $(".Adv_bar").eq(0).click({
    //     alert();
    // });
    $('.Adv_bar').eq(0).css('background-color','rgba(11, 171, 177, 0.815)');
    $('.Adv_bar').eq(0).click(function () {
        $('.slide_1').css('margin-left', '0%' );
        $('.slide_2').css('margin-left', '0%' );
        $('.slide_3').css('margin-left', '0%' );
        $('.Adv_bar').eq(0).css('background-color','rgba(11, 171, 177, 0.815)');
        $('.Adv_bar').eq(1).css('background-color','#6e6d6d');
        $('.Adv_bar').eq(2).css('background-color','#6e6d6d');
      });
     $('.Adv_bar').eq(1).click(function () {
        $('.slide_1').css('margin-left', '-100%' );
        $('.slide_2').css('margin-left', '-100%' );
        $('.slide_3').css('margin-left', '-100%' );
        $('.Adv_bar').eq(1).css('background-color','rgba(11, 171, 177, 0.815)');
        $('.Adv_bar').eq(0).css('background-color','#6e6d6d');
        $('.Adv_bar').eq(2).css('background-color','#6e6d6d');
        });
    $('.Adv_bar').eq(2).click(function () {
        $('.slide_1').css('margin-left', '-200%' );
        $('.slide_2').css('margin-left', '-200%' );
        $('.slide_3').css('margin-left', '-200%' );
        $('.Adv_bar').eq(2).css('background-color','rgba(11, 171, 177, 0.815)');
        $('.Adv_bar').eq(0).css('background-color','#6e6d6d');
        $('.Adv_bar').eq(1).css('background-color','#6e6d6d');
        });
    // if($(".Adv_bar").eq(0).prop("checked"){
    //     alert();
    // }

});