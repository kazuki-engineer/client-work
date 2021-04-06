$(function(){

/*   //スムーススクロール
  $('#to-top').on('click',function(){
    $('html,body').animate({scrollTop:0},1500);
  });
  $(window).scroll(function(){
    let sc = $(this).scrollTop();
    // スクロールの量を取得
    $('.sc').html(sc);
    if(sc > 500){
      $('.scroll').fadeIn();
    }else{
      $('.scroll').fadeOut();
    }
  }); */

/*   //ハンバーガーメニュー
  $('#btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#g-nav').toggleClass('slide');
  }); */

  //フッター部分
  var today = new Date();
  var thisYear = today.getFullYear();
  document.getElementById('fullyear').innerHTML = thisYear;

/*   //ビューポートの取得
  var vh=window.innerHeight;
  document.getElementById('box').style.height=vh+'px';
  // $('#box').css('height',$(window).height()); */
  
});