(function ($) {
  $('#myCarousel').carousel({
    interval: 4000,
  });
  let clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function () {
    clickEvent = true;
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  }).on('slid.bs.carousel', (e) => {
    if (!clickEvent) {
      const count = $('.nav').children().length - 1;
      const current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      const id = parseInt(current.data('slide-to'));
      if (count == id) {
        $('.nav li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
}(jQuery));
