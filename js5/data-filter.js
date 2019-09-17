(function($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-portfolio]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $this.addClass('active');

    var $filterportfolio = $this.attr('data-filter');

    if ($filterportfolio == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-portfolio = "' + $filterportfolio + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });

})(jQuery);
