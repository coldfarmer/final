$(document).ready(function(){
    $('.imgvdeo').click(function () {
        scroll(0,0);
        $('.imgvdeo').css('background-color','rgba(100,100,100,0.7)');
        $('.game_intro').css('background-color','');
        $('.Adv_bar').css('background-color','');
        $('.evaluation').css('background-color','');
        $('.Adv_bar').css('background-color','');
    });
    
    $('.game_intro').click(function () {
        scroll(0,600);
        $('.imgvdeo').css('background-color','');
        $('.game_intro').css('background-color','rgba(100,100,100,0.7)');
        $('.Adv_bar').css('background-color','');
        $('.evaluation').css('background-color','');
        $('.Adv_bar').css('background-color','');
    });
    $('.data').click(function () {
         scroll(0,1200);
        $('.imgvdeo').css('background-color','');
        $('.game_intro').css('background-color','');
        $('.system').css('background-color','');
        $('.evaluation').css('background-color','');
        $(this).css('background-color','rgba(100,100,100,0.7)');
    });
    $('.system').click(function () {
    scroll(0,1600);
        $('.imgvdeo').css('background-color','');
        $('.game_intro').css('background-color','');
        $('.system').css('background-color','rgba(100,100,100,0.7)');
        $('.evaluation').css('background-color','');
        $('.data').css('background-color','');
    });
    $('.evaluation').click(function () {
        scroll(0,2000);
        $('.imgvdeo').css('background-color','');
        $('.game_intro').css('background-color','');
        $('.system').css('background-color','');
        $('.evaluation').css('background-color','rgba(100,100,100,0.7)');
        $('.data').css('background-color','');
    });

    // a = $(window).height(); //瀏覽器窗口高度
    // var group = $(".product_list");  
    // $(window).scroll(function(){
    //     b = $(window).scrollTop(); //頁面滾動的高度
    //     c = group.offset().top; //元素距離文檔（document）頂部的高度
        
    //     if(b>c){
    //         $('.product_list').css('position', 'fixed').css('top',18);      
    //     }
    //     if(b<c){
    //         $('.product_list').css('position', 'relative');
    //     }
    // });


    // var pos =  $('.product_list').offset();// offset() 獲得div1當前的位置，左上角座標(x,y)
    // $(window).scroll(function () { //滾動條滾動事件
    //   // alert();
    //     // if ($(this).scrollTop() > pos.top ) {
    //     //     $('#top_list').css('top', $(this).scrollTop() - pos.top);
    //     // } else if ($(this).scrollTop() <=  pos.top ) {
    //     //     $('#top_list').css('top',0).css('position', 'relative');
    //     // }
    //     　if($(this).scrollTop() > pos){      
    //         $('#top_list').css('top', $(this).scrollTop() - pos.top);
    //       }else if ($(this).scrollTop() <= 10) {
    //          $('#top_list').css('top',0).css('position', 'relative');
    //       }
    // });



}); 
