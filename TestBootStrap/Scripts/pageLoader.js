$(window).on("load", function() {
    setTimeout(removeLoader); //wait for page load PLUS two seconds.
});

function removeLoader() {
    $("#loader-background").fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $("#loader-background").remove(); //makes page more lightweight
    });
}