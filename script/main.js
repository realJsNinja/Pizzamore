var pizza = {};
pizza.minAnnoyWidth = 960;

/*
    "Borrowed" from http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
*/
pizza.viewport = function()
{
    var e = window, a = 'inner';
    if ( !( 'innerWidth' in window ) ) { a = 'client'; e = document.documentElement || document.body; }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}



