$(document).mouseup(function(e){
    var shopcartbarbaractive = $(".shopcartbarbaractive");
    var shopcartbarbar = $(".shopcartbarbar");
    var shopcartbarbutton = $(".fa-shopping-cart")

    if(!shopcartbarbaractive.is(e.target) && !shopcartbarbutton.is(e.target))
    {
        shopcartbarbar.removeClass("shopcartbarbaractive");
    }
});