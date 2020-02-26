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

    //on hover display text in overlay
    $("#home").mouseover(function() {
        $("#title-hover").text($("#home-title").text());
    });
    $("#home").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#about-us").mouseover(function() {
        $("#title-hover").text($("#aboutus-title").text());
    });
    $("#about-us").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#chronos-1").mouseover(function() {
        $("#title-hover").text($("#chronos-1-title").text());
    });
    $("#chronos-1").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#chronos-2").mouseover(function() {
        $("#title-hover").text($("#chronos-2-title").text());
    });
    $("#chronos-2").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#accessories").mouseover(function() {
        $("#title-hover").text($("#accessories-title").text());
    });
    $("#accessories").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#tutorials").mouseover(function() {
        $("#title-hover").text($("#tutorials-title").text());
    });
    $("#tutorials").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#downloads").mouseover(function() {
        $("#title-hover").text($("#downloads-title").text());
    });
    $("#downloads").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#chrome").mouseover(function() {
        $("#title-hover").text($("#chrome-title").text());
    });
    $("#chrome").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#resources").mouseover(function() {
        $("#title-hover").text($("#resources-title").text());
    });
    $("#resources").mouseout(function() {
        $("#title-hover").text("");
    });
    $("#contact-us").mouseover(function() {
        $("#title-hover").text($("#contact-us-title").text());
    });
    $("#contact-us").mouseout(function() {
        $("#title-hover").text("");
    });
});