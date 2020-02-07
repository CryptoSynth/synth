$(document).ready(function() {
    /*===============================================================
    Input Here
=================================================================*/

    $(".img-overlay").on('click', function() {
        $(this).fadeTo(500, 0, function() {
            $(this).css('visibility', 'hidden');
        });
    });

    $(".carousel-body").slick({
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "100px",
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
                    centerPadding: "0px"
                }
            }
        ]
    });

});