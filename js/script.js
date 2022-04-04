$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
    );
});

function opennav() {
    var nav = document.getElementById("navbarSupportedContent");
    nav.style.height = "0";
}