$(document).ready(function() {
    $(".burger-menu").click(function(e) {
        $(this).toggleClass("menu-on");
        $('.burger-list').fadeToggle('burger-list-active');
        $('.burger__elem').click(function(e) {
            $(".burger-menu").toggleClass("menu-on");
            $('.burger-list').fadeToggle('burger-list-active');
        });
    });
});