$(document).ready(function() {
    $(".engineer-l").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "250px",
        infinite: true,
        slidesToShow: 2,
        focusOnSelect: true,

        responsive: [{
                breakpoint: 1025,
                settings: {
                    dots: false,
                    cemterMode: true,
                    arrows: false,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    cemterMode: true,
                    arrows: false,
                    infinite: true,
                    centerPadding: "150px",
                    slidesToShow: 1,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 376,
                settings: {
                    dots: false,
                    cemterMode: true,
                    arrows: false,
                    centerPadding: "5px",
                    slidesToShow: 1,
                    focusOnSelect: true
                }
            }
        ]
    });

    $("#eng-toggle-1").on("click", function() {
        $("#img-1").toggle();
    });
    $("#eng-toggle-2").on("click", function() {
        $("#img-2").toggle();
    });
    $("#eng-toggle-3").on("click", function() {
        $("#img-3").toggle();
    });
    $("#eng-toggle-4").on("click", function() {
        $("#img-4").toggle();
    });
    $("#eng-toggle-5").on("click", function() {
        $("#img-5").toggle();
    });
    $("#eng-toggle-6").on("click", function() {
        $("#img-6").toggle();
    });
    $("#eng-toggle-7").on("click", function() {
        $("#img-7").toggle();
    });
    $("#eng-toggle-8").on("click", function() {
        $("#img-8").toggle();
    });
    $("#eng-toggle-9").on("click", function() {
        $("#img-9").toggle();
    });
    $("#eng-toggle-10").on("click", function() {
        $("#img-10").toggle();
    });
});