$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 40,
        },
        500
    );
});

function opennav() {
    var nav = document.getElementById("navbarSupportedContent");
    nav.style.height = "0";
}


$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
    console.log($('#navbar').height());
});

function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
}