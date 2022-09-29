jQuery(function ($) {
  $(".c-header__itemnavbar").click(function(){
    $(".c-header__side").addClass("c-active");
    $('body').css("overflow","hidden");
  });

  $(".c-header__btnclose").click(function(){
    $(".c-header__side").removeClass("c-active");
    $('body').removeAttr( 'style');
  });

  $(".c-header__terserwrapclose").click(function(){
    $(".c-header__side").removeClass("c-active");
    $('body').removeAttr( 'style');
  });

  $(".c-post__contactphone").click(function(){
    if($(window).width() <= 767){
      window.location.assign('tel:089-847-1411');
    }
  });

  $(".c-backtotop").click(function () {
    $("html, body").animate({
      scrollTop: 0},1500);
      return false;
  }); 

  var path = window.location.href;
    $('.c-gnav li a').each(function(){
        if(this.href === path){
            $(this).parent().addClass('is-active');
        }
    });

    var th = $('.c-news__table table tbody tr th');
    th.on('click', function(e){
    e.preventDefault();
    let href = $(this).parent('tr').find('td a').attr('href');
    window.location.href = href;
});
  //   if(($('main').hasClass("is-news")) && ($(window).width() >= 768)){
  //     $(".c-header").css('position', 'relative');
  //     $(".c-header__pc").css('margin-top','0');
  //     $(".c-header__partner").css('display','none');
  //     $(".c-header__navi").css('height','85px');
  //     $(".c-header__logo").css('width','17%');
  //     $(".c-header__logo").css('margin-left','0');
  //     $(".c-header__btncontact a").css('padding','34px 38px 35px');
  //     $(".c-gnavlistlink").css('height','85px');
  //   }
  //   $(window).resize(function() {
  //     if(($('main').hasClass("is-news")) && ($(window).width() <= 767)){
  //     $(".c-header").removeAttr('style');
  //     $(".c-header__pc").removeAttr('style');
  //     $(".c-header__partner").removeAttr('style');
  //     $(".c-header__navi").removeAttr('style');
  //     $(".c-header__logo").removeAttr('style');
  //     $(".c-header__logo").removeAttr('style');
  //     $(".c-header__btncontact a").removeAttr('style');
  //     $(".c-gnavlistlink").removeAttr('style');
  //   }
  //   else{
  //     $(".c-header").css('position', 'relative');
  //     $(".c-header__pc").css('margin-top','0');
  //     $(".c-header__partner").css('display','none');
  //     $(".c-header__navi").css('height','85px');
  //     $(".c-header__logo").css('width','17%');
  //     $(".c-header__logo").css('margin-left','0');
  //     $(".c-header__btncontact a").css('padding','34px 38px 35px');
  //     $(".c-gnavlistlink").css('height','85px');
  //   }
  // });

  // if (document.title == "News") {
  //   document.querySelector('body').classList.add('is-news');
  // }

  // $(window).resize(function() {
  //   if (document.title == "News" && ($(window).width() <= 767)) {
  //     document.querySelector('body').classList.remove('is-news');
  //   }else{
  //     document.querySelector('body').classList.add('is-news');
  //   }
  // });
});

