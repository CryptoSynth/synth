$(document).ready(function() {
    /*===============================================================
    Input Here
=================================================================*/

    $(".carousel-body").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
        useTransform: true,
        zIndex: 1000
    });

});