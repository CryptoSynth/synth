$(document).ready(function() {
    /*===============================================================
    Input Here
=================================================================*/

    $(".carousel-body-small").slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        arrows: true,
        focusOnSelect: true,
        useTransform: true,
        responsive: [{
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "10px"
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "10px"
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: "10px"
            }
        }
    ]
    });

});