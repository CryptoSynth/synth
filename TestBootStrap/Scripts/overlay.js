$(window).ready(function() {
    var overlayOne = $(".overlay-1");
    var overlayTwo = $(".overlay-2");

    //Vid-Section-1 Overlay
    $(".test-1").mouseenter(function() {
        overlayOne.animate({
                width: "hide"
            },
            "slow"
        );
    });
    $(".vid-section-1").mouseleave(function() {
        overlayOne.animate({
                width: "show"
            },
            "slow"
        );
    });

    //Vid-Section-2 Overlay
    $(".test-2").mouseenter(function() {
        overlayTwo.animate({
                width: "hide"
            },
            "slow"
        );
    });
    $(".vid-section-2").mouseleave(function() {
        overlayTwo.animate({
                width: "show"
            },
            "slow"
        );
    });
});