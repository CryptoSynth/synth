$(document).ready(function() {
    $(".card-l").slick({
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

    //Fade Out: Sec Engineers
    $("#eng-toggle-1").on("click", function() {
        $("#eng-img-1").toggle();
    });
    $("#eng-toggle-2").on("click", function() {
        $("#eng-img-2").toggle();
    });
    $("#eng-toggle-3").on("click", function() {
        $("#eng-img-3").toggle();
    });
    $("#eng-toggle-4").on("click", function() {
        $("#eng-img-4").toggle();
    });
    $("#eng-toggle-5").on("click", function() {
        $("#eng-img-5").toggle();
    });
    $("#eng-toggle-6").on("click", function() {
        $("#eng-img-6").toggle();
    });
    $("#eng-toggle-7").on("click", function() {
        $("#eng-img-7").toggle();
    });
    $("#eng-toggle-8").on("click", function() {
        $("#eng-img-8").toggle();
    });
    $("#eng-toggle-9").on("click", function() {
        $("#eng-img-9").toggle();
    });
    $("#eng-toggle-10").on("click", function() {
        $("#eng-img-10").toggle();
    });

    //Fade Out: Sec Operations
    $("#op-toggle-1").on("click", function() {
        $("#op-img-1").toggle();
    });
    $("#op-toggle-2").on("click", function() {
        $("#op-img-2").toggle();
    });

    //Fade Out: Sec Production
    $("#pro-toggle-1").on("click", function() {
        $("#pro-img-1").toggle();
    });
    $("#pro-toggle-2").on("click", function() {
        $("#pro-img-2").toggle();
    });
    $("#pro-toggle-3").on("click", function() {
        $("#pro-img-3").toggle();
    });

    //Fade Out: Sec Supply Chain
    $("#sup-toggle-1").on("click", function() {
        $("#sup-img-1").toggle();
    });
    $("#sup-toggle-2").on("click", function() {
        $("#sup-img-2").toggle();
    });

    //Fade Out: Sec Sales & Marketing
    $("#sal-toggle-1").on("click", function() {
        $("#sal-img-1").toggle();
    });
    $("#sal-toggle-2").on("click", function() {
        $("#sal-img-2").toggle();
    });
});