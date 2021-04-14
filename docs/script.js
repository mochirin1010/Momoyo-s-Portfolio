$(function(){
  $('.menu-btn').click(function() {
    $('.menu').addClass('is-active');
  });
  $('.close-btn').click(function() {
    $('.menu').removeClass('is-active');
  });

  $('.works-ex-1').click(function() {
    $('.works-1').addClass('works-active');
  });
  $('.works-close-btn').click(function() {
    $('.works-1').removeClass('works-active');
  });

  $('.works-ex-2').click(function() {
    $('.works-2').addClass('works-active');
  });
  $('.works-close-btn').click(function() {
    $('.works-2').removeClass('works-active');
  });

  $('.works-ex-3').click(function() {
    $('.works-3').addClass('works-active');
  });
  $('.works-close-btn').click(function() {
    $('.works-3').removeClass('works-active');
  });

  $(".tab li").click(function() {
    var num = $(".tab li").index(this);
    $(".tabContent").removeClass('active');
    $(".tabContent").eq(num).addClass('active');
    $(".tab li").removeClass('active');
  $(this).addClass('active')
  });

  $(window).scroll (function (){
    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > boxOffset - wh + 150 ){
        $(this).addClass(animated);
      }
    });
  });
});