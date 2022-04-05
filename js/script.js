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
});

function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
}

$(document).ready(function () {
    $('#send').click(function() {
        var c = 0;
        if ($('#name-input').val().length === 0) {
            $('#name-err').html("Name is required!");
        }
        else {
            $('#name-err').html('');
            c++;
        }
        if ($('#email-input').val().length === 0) {
            $('#email-err').html("Email is required!");
        }
        else {
            $('#email-err').html('');
            c++
        }
        if ($('#msg-input').val().length === 0) {
            $('#msg-err').html("Please enter some Message!");
        }
        else {
            $('#msg-err').html('');
            c++
        }
        if (c>=3) {
            $('#name-input').val('');
            $('#email-input').val('');
            $('#msg-input').val('');
            $('#submitted').html('Message Recived! Thank You :)');
        }
        else {
            $('#submitted').html('');
        }
    });
})

$(document).ready(function() {
    todayDate();
    $('#navbar-toggle').click(opennav);
});