$(document).ready(function () {
    $(".card-l").slick({
        arrows: true,
        centerMode: true,
        centerPadding: "400px",
        infinite: true,
        slidesToShow: 1,
        focusOnSelect: true,

        responsive: [{
            breakpoint: 1025,
            settings: {
                centerMode: true,
                arrows: true,
                infinite: true,
                centerPadding: "0px",
                slidesToShow: 1,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                arrows: true,
                infinite: true,
                centerPadding: "0px",
                slidesToShow: 1,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 426,
            settings: {
                centerMode: true,
                arrows: true,
                infinite: true,
                centerPadding: "0px",
                slidesToShow: 1,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 376,
            settings: {
                centerMode: true,
                arrows: true,
                infinite: true,
                centerPadding: "0px",
                slidesToShow: 1,
                focusOnSelect: true
            }
        }
        ]
    });

    //Fade Out: Sec Engineers
    $("#eng-toggle-1").on("click", function () {
        $("#eng-img-1").slideToggle(0, "linear");
    });
    $("#eng-toggle-2").on("click", function () {
        $("#eng-img-2").slideToggle(0, "linear");
    });
    $("#eng-toggle-3").on("click", function () {
        $("#eng-img-3").slideToggle(0, "linear");
    });
    $("#eng-toggle-4").on("click", function () {
        $("#eng-img-4").slideToggle(0, "linear");
    });
    $("#eng-toggle-5").on("click", function () {
        $("#eng-img-5").slideToggle(0, "linear");
    });
    $("#eng-toggle-6").on("click", function () {
        $("#eng-img-6").slideToggle(0, "linear");
    });
    $("#eng-toggle-8").on("click", function () {
        $("#eng-img-8").slideToggle(0, "linear");
    });
    $("#eng-toggle-9").on("click", function () {
        $("#eng-img-9").slideToggle(0, "linear");
    });

    //Fade Out: Sec Operations
    $("#op-toggle-1").on("click", function () {
        $("#op-img-1").slideToggle(0, "linear");
    });
    $("#op-toggle-2").on("click", function () {
        $("#op-img-2").slideToggle(0, "linear");
    });

    //Fade Out: Sec Production
    $("#pro-toggle-1").on("click", function () {
        $("#pro-img-1").slideToggle(0, "linear");
    });
    $("#pro-toggle-2").on("click", function () {
        $("#pro-img-2").slideToggle(0, "linear");
    });
    $("#pro-toggle-3").on("click", function () {
        $("#pro-img-3").slideToggle(0, "linear");
    });

    //Fade Out: Sec Supply Chain
    $("#sup-toggle-1").on("click", function () {
        $("#sup-img-1").slideToggle(0, "linear");
    });
    $("#sup-toggle-2").on("click", function () {
        $("#sup-img-2").slideToggle(0, "linear");
    });

    //Fade Out: Sec Sales & Marketing
    $("#sal-toggle-1").on("click", function () {
        $("#sal-img-1").slideToggle(0, "linear");
    });
});