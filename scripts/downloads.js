var SHOW_LINKS_MESSAGE = "Show downloads/links";
var HIDE_LINKS_MESSAGE = "Hide downloads/links";

$(function(){
    $(".collapse-link").on("hide.bs.collapse", function(){
        console.log('test');
        $(this).text(SHOW_LINKS_MESSAGE);
    });

    $(".collapse-link").on("show.bs.collapse", function(){
        $(this).text(HIDE_LINKS_MESSAGE);
    });

    $("#sidebar_toggle").on("click", function() {
        if ($("#sidebar_container").position().left == 0){
            $("#sidebar_container").css({left: "-250px"});
        } else {
            $("#sidebar_container").css({left: 0});
        }
        
    });
});