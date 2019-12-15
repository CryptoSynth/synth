$(document).ready(function() {
    $("#dismiss, .overlay").on("click", function() {
        // hide sidebar
        $("#sidebar").removeClass("active");

        // hide overlay
        $(".overlay").removeClass("active");

        //

    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");

        // open sidebar
        $("#sidebar").addClass("active");

        // fade in the overlay
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
    });
});