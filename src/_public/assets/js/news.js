if (document.title == "News" && ($(window).width() >= 768)) {
    document.querySelector('body').classList.add('is-news');
  }
  else{
    document.querySelector('body').classList.remove('is-news');
  }

  $(window).resize(function() {
    if (document.title == "News" && ($(window).width() <= 767)) {
      document.querySelector('body').classList.remove('is-news');
    }else{
      document.querySelector('body').classList.add('is-news');
    }
  });
