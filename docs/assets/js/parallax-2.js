'use sctrict';

(function ($) {
  let scroll_start = 0;
  const startchange = $('#startchange');
  const offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('.navbar-default').css('background-color', '#ffffff');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
}(jQuery));
