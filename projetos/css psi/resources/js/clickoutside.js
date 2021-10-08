$(document).click(function(e){

    var userbaractive = $(".userbaractive");
    var userbar = $(".userbar");
    var userbutton = $(".fa-user")

    if(!userbaractive.is(e.target) && !userbutton.is(e.target) && userbar.has(e.target).length === 0)
    {
        userbar.removeClass("userbaractive");
    }

    var notificationbaractive = $(".notificationbaractive");
    var notificationbar = $(".notificationbar");
    var notificationbutton = $(".fa-bell")

    // if the target of the click isn't the container nor a descendant of the container
    if (!notificationbar.is(e.target) && notificationbar.has(e.target).length === 0 && !notificationbutton.is(e.target)) 
    {
        notificationbar.removeClass("notificationbaractive");
    } 

    var shopcartbaractive = $(".shopcartbaractive");
    var shopcartbar = $(".shopcartbar");
    var shopcartbarbutton = $(".fa-shopping-cart")

    if(!shopcartbaractive.is(e.target) && !shopcartbarbutton.is(e.target) && shopcartbar.has(e.target).length === 0)
    {
        shopcartbar.removeClass("shopcartbaractive");
    }
});