$('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(300);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(300);
});


(function ($) {


    function doAnimations(elems) {

        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    var $myCarousel = $('#carousel-example-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    $myCarousel.carousel();

    doAnimations($firstAnimatingElems);

    $myCarousel.carousel('pause');


    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);


WebFontConfig = {
    google: {
        families: ['Open+Sans:400,300,600,700:latin,cyrillic']
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

$(function () {
    $('#form').validator({
        feedback: {
            success: 'glyphicon-thumbs-up',
            error: 'glyphicon-thumbs-down'
        }
    });
});