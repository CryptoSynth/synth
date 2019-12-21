$(document).ready(function() {
    $("#dismiss, .overlay").on("click", function() {
        // hide sidebar
        $("#sidebar").removeClass("active");

        // hide overlay
        $(".overlay").removeClass("active");

        //
        $(".hamburger").removeClass("is-active");
    });

    $(".hamburger").on("click", function() {
        $(".hamburger").toggleClass("is-active");

        // open sidebar
        $("#sidebar").addClass("active");

        // fade in the overlay
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
    });
});