

(function () {
  requirejs.config({
    paths: {
      backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
      bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
      fuelux: '//www.fuelcdn.com/fuelux/3.13.0/js/fuelux.min',
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery',
      moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.16.0/moment-with-locales.min',
      underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
      validator: '//cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.5/validator.min',
    },
    // Bootstrap is a "browser globals" script :-(
    shim: {
      underscore: {
        exports: '_',
      },
      backbone: {
        deps: [
          'underscore',
          'jquery',
        ],
        exports: 'Backbone',
      },
      bootstrap: {
        deps: [
          'jquery',
        ],
      },
      validator: {
        deps: [
          'jquery',
          'bootstrap',
        ],
      },
    },
  });
  // Require all.js or include individual files as needed
  require(['underscore', 'backbone', 'jquery', 'bootstrap', 'fuelux'], (_, Backbone, $) => {
    $('#myDatepicker').datepicker();
  });
}());
