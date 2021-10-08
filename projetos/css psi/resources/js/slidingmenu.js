$(document).ready(function()
{
    $(".fa-bars").click(function() 
    {
        $('div.slidingmenu').toggleClass('slidingclosed')
        $('div.inactivedim').toggleClass('activedim')

    });
    $(".inactivedim").click(function() 
    {
        $('div.slidingmenu').toggleClass('slidingclosed')
        $('div.inactivedim').toggleClass('activedim')

    });
});
