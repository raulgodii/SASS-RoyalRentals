$(document).on("click", ".header-nav-hamburger-lines", function() {
    $(".header-nav").toggleClass("open");
    $("body").toggleClass("fixed-position");
});

$(document).on("click", ".header-nav-link", function() {
    $(".header-nav").removeClass("open");
    $("body").removeClass("fixed-position");
});