// Code written or adapted by Alex Bradley for High Line

/////////////////////////
//Navbar change on scroll
/////////////////////////

$(function() {
    var navbar = $(".navbar-fixed-top");
    var logo = $(".nav-logo");
    var src1 = "./assets/img/HighLineMark.png"
    var src2 = "./assets/img/HighLineFull.png"
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            navbar.removeClass("bg-light navbar-light").addClass('bg-dark navbar-dark');
        } else {
            navbar.removeClass('bg-dark navbar-dark').addClass("bg-light navbar-light");
        }
        if (scroll >= 300) {
            logo.attr('src', src2);
        } else {
            logo.attr('src', src1);
        }
    });
});

/////////////////////////
//Navbar collapse on mobile click
/////////////////////////
$(document).on('click','.show',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});



//////////////////////////
// Animate Pricing Section
//////////////////////////

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


////////////////////
//Dynamic Modal code
////////////////////

$('#Modal').on('show.bs.modal', function (event) {
    var link = $(event.relatedTarget); // link that triggered the modal
    var project = link.data('project'); // Extract info from data-* attributes
    var description = "";
    var projLink = "";
    var image = "";

    // Determine which project so it can display appropriate info
    switch (project) {
        case "ConTech":
            description = "Fully custom project, built as a reference guide for people new to the tech industry. Design includes a video background, user authentication, commenting, and dynamic features.";
            image = '<img class="img-fluid mb-4" src="./assets/img/contech-preview.png" alt="">'
            projLink = "https://contech-app.herokuapp.com"
            break;
        case "Crown Town Crafts":
            description = "Another Fully custom project, it has a backend database that includes data on all Charlotte area breweries. Design includes a single page application, video background, commenting, and a small admin dashboard.";
            image = '<img class="img-fluid mb-4" src="./assets/img/ctc-preview.png" alt="">'
            projLink = "https://crown-town-crafts.herokuapp.com"
            break;
        case "Binge Volleyball":
            description = "Built using Bootstrap, this is a prototype for a personal project which is under further development. This simple project had a strong focus on structure.";
            image = '<img class="img-fluid mb-4" src="./assets/img/binge-preview.png" alt="">'
            projLink = "https://bradleyaw.github.io/BingeLayoutBootstrap/"
            break;
        default:
            project = "Not Found"
            description = "There has been an error";
            break;
    }

    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text(project);
    modal.find('.modal-body').html(image + "<br>" + description);
    modal.find('.view').attr("href", projLink)
})

/*
function smoothScrolling() {
    //Adding site specific JS for desktop experience
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash 
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500);
        };
    });
}

smoothScrolling();
*/