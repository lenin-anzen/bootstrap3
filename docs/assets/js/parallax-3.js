(function ($) {
  $('#myCarousel').carousel({
    interval: 3000,
  });
  // handles the carousel thumbnails
  $('[id^=carousel-selector-]').hover(function () {
    const id_selector = $(this).attr('id');
    // console.log(id_selector);
    let id = id_selector.substr(id_selector.length - 1);
    // console.log(id);
    id = parseInt(id);
    $('#myCarousel').carousel(id - 1);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
    // console.log(this);
  });
  // when the carousel slides, auto update
  $('#myCarousel').on('slid.bs.carousel', (e) => {
    let id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(`[id=carousel-selector-${id}]`).addClass('selected');
  });
  $('.bg-1').parallax({
    speed:	0.15,
  });

  $('.my-background-video').bgVideo({
    fullScreen: false, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
    fadeIn: 500, // Milliseconds to fade video in/out (0 for no fade)
    pauseAfter: 120, // Seconds to play before pausing (0 for forever)
    fadeOnPause: false, // For all (including manual) pauses
    fadeOnEnd: true, // When we've reached the pauseAfter time
    showPausePlay: true, // Show pause/play button
    pausePlayXPos: 'right', // left|right|center
    pausePlayYPos: 'top', // top|bottom|center
    pausePlayXOffset: '15px', // pixels or percent from side - ignored if positioned center
    pausePlayYOffset: '15px', // pixels or percent from top/bottom - ignored if positioned center
  });
}(jQuery));
