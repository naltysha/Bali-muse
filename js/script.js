document.getElementsByClassName("slide-three")
document.querySelector(".slide-three")


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop:true,
        autoplay:true,
        autoplaySpeed:1000,
    });
        
    
  });


  $ ('.mobile-menu') .on ('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.menu-wrap').toggleClass('menu-active');
  })