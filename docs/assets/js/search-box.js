(function ($) {
  $('#query').typeahead({
    source: ['alpha', 'allpha2', 'alpha3', 'bravo', 'charlie', 'delta', 'epsilon', 'gamma', 'zulu'],
  });

  $('.tt-query').css('background-color', '#fff');
}(jQuery));
