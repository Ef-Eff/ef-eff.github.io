$(() => {

  const $nav = $('nav');
  const $header = $('header');
  const $body = $('body');
  const $navAnchor = $('nav a');
  const $about = $('#about');
  const $yahtzee = $('#yahtzee');
  const $gamingMeetups = $('#gaming-meetups');
  const $betBucket = $('#bet-bucket');
  const $twitterTrends = $('#twitter-trends');


  $(window).scroll(stickyNavScroll).trigger('scroll');

  function stickyNavScroll() {
    if( $(this).scrollTop() > $header.height() + 50) {
      $nav.addClass('main-nav-scrolled bg');
    } else {
      $nav.removeClass('main-nav-scrolled bg');
    }
    changeColor();
  }

  $navAnchor.on('click', scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $body.animate({
      scrollTop: $(section).offset().top
    }, 1000);
  }

  function scrollToTop() {
    $body.animate({
      scrollTop: 0
    }, 2500);
  }

  $('footer button').on('click', scrollToTop);

  function changeColor() {
    if( $(this).scrollTop() >= $twitterTrends.offset().top - ($twitterTrends.offset().top * 0.125)) {
      $navAnchor.css('color', 'rgb(246,246,246)');
      $('.twitter').css('color', 'rgb(80,175,255)');
    } else if( $(this).scrollTop() >= $betBucket.offset().top - ($betBucket.offset().top * 0.2)) {
      $navAnchor.css('color', 'rgb(246,246,246)');
      $('.betbucket').css('color', '#00848b');
    } else if( $(this).scrollTop() >= $gamingMeetups.offset().top - ($gamingMeetups.offset().top * 0.2)) {
      $navAnchor.css('color', 'rgb(246,246,246)');
      $('.gaming').css('color', 'yellow');
    } else if( $(this).scrollTop() >= $yahtzee.offset().top - ($yahtzee.offset().top * 0.2)) {
      $navAnchor.css('color', 'rgb(246,246,246)');
      $('.yahtzee').css('color', 'rgb(240,0,0)');
    } else if ( $(this).scrollTop() >= $about.offset().top) {
      $navAnchor.css('color', 'rgb(246,246,246)');
      $('.about').css('color', 'orange');
    } else {
      $navAnchor.css('color', 'rgb(246,246,246)');
    }
  }





});
