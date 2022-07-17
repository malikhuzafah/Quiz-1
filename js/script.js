$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 40,
    },
    500
  );
});

function opennav() {
  var nav = document.getElementById("navbarSupportedContent");
  nav.style.height = "0";
}

function todayDate() {
  var d = new Date();
  var n = d.getFullYear() + "  ";
  return (document.getElementById("date").innerHTML = n);
}

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  $("#send").click(function () {
    var c = 0;
    if ($("#name-input").val().length === 0) {
      $("#name-err").html("Name is required!");
    } else {
      $("#name-err").html("");
      c++;
    }
    if ($("#email-input").val().length === 0) {
      $("#email-err").html("Email is required!");
    } else {
      $("#email-err").html("");
      c++;
    }
    if ($("#msg-input").val().length === 0) {
      $("#msg-err").html("Please enter some Message!");
    } else {
      $("#msg-err").html("");
      c++;
    }
    if (c >= 3) {
      $("#name-input").val("");
      $("#email-input").val("");
      $("#msg-input").val("");
      $("#submitted").html("Message Recived! Thank You :)");
    } else {
      $("#submitted").html("");
    }
  });
  todayDate();
  $("#navbar-toggle").click(opennav);
  $(".nav-link").click(function () {
    $("#navbarSupportedContent").removeClass("show");
  });
});

// $(function () {
//   $.ajax({
//     url: "../data/data.json",
//     method: "GET",
//     success: (res) => {
//       $("#portfolioTiles").empty();
//       for (var i = 0; i < res.length; i++) {
//         $("#portfolioTiles").append(
//           '<div class="gallery_product col-lg-4 col-md-6 col-sm-6 col-xs-6 filter ' +
//             res[i].filter +
//             '" align="center"><a class="project-link link-secondary" href="' +
//             res[i].link +
//             '" target="_blank"><div class="portfolio-image-container img-fluid"><img src="' +
//             res[i].image +
//             '" class="portfolio-image img-fluid"><div class="overlay"><div class="overlay-text"><p class="h4">' +
//             res[i].name +
//             '</p><button class="my-btn-2 btn"><strong>Code</strong></button></div></div></div></a><div class="container text-center"><a href="' +
//             res[i].link +
//             '"class="portfolio-item-link" target="_blank"><p class="portfolio-item-title h3"><strong>' +
//             res[i].main +
//             '</strong></p><p class="h6 blockquote-footer">' +
//             res[i].sub +
//             "</p></a></div></div>"
//         );
//       }
//     },
//     error: (err) => {
//       console.log(err);
//     },
//   });
// });
