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
$( document ).ready(function() {
    $('.p-item-content', this).hide();
});



/* smoothScrolling();


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
*/
$(".p-item").hover(function() {
    $(this).addClass("hover-bg-color");
    $('.p-item-content', this).show();
  }, function() {
    $(this).removeClass("hover-bg-color");
    $('.p-item-content', this).hide();
  }
);