$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        responsive:{
            0:{
                items:1
            }
        }
    });


    $("#section-intro .images").height($("#section-intro .images img").height());


  });