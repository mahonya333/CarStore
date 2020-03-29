$(function () {

    $('.featured-slider').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        variableWidth: true
    });
    $('.offers-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });


});