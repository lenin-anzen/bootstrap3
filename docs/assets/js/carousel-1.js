(function ($) {
  // Function to animate slider captions 
  function doAnimations(elems) {
    // Cache the animationend event in a variable
    const animEndEv = 'webkitAnimationEnd animationend';
    elems.each(function () {
      let $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, () => {
        $this.removeClass($animationType);
      });
    });
  }
  // Variables on page load 
  let $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    // Initialize carousel 
  $myCarousel.carousel();
  // Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);
  // Pause carousel  
  $myCarousel.carousel('pause');
  // Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', (e) => {
    const $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });
  $('#carousel-example-generic').carousel({
    interval: 3000,
    pause: 'false',
  });
}(jQuery));
