;(function($){
    $(document).ready(function(){
        $("#newsletter").fancybox({
            'transitionIn'	:	'fade',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600,
            'speedOut'		:	200
        }).trigger("click");
    });
})(jQuery);