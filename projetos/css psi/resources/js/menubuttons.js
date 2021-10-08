

$(document).ready(function()
{
    $(".fa-bell").click(function() 
    {
        $('div.notificationbar').toggleClass('notificationbaractive')
    });

    $(".fa-shopping-cart").click(function() 
    {
        $('div.shopcartbar').toggleClass('shopcartbaractive')
    });

    $(".fa-user").click(function() 
    {
        $('div.userbar').toggleClass('userbaractive')
    });

    $("#categoriaslista").click(function() 
    {
        $('div.categorias').toggleClass('categoriasactive')
    });

});