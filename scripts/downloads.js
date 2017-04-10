$(function(){
    $(".collapse-link").on("click", function(){
        var collapse_id = $(this).data("collapse-id");
        $("#" + collapse_id).collapse("toggle");
    });
});