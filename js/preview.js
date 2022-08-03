! function($) {
    "use strict";

    // Color switcher
    $('.color-switcher .toggle').click(function() {
        $('.color-switcher').toggleClass('open');
    });
    $('.color-switcher').find('.color').each(function() {
        var color = $(this).attr('data-color');

        $(this).click(function() {
            $('#color-option').attr('href', 'css/color/' + color + '.css');
        });
    });

}(window.jQuery);
