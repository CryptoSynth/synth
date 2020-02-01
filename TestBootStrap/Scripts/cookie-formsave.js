$(document).ready(function() {
    $("#proceed").on("click", function() {
        Cookies.set("filled_form", "true", { expires: 365 });
    });
});

$(window).ready(function() {
    $(".btn-form").show();
    if (Cookies.get("filled_form")) {
        $(".btn-form").hide();
        $(".btn-shop").show();
    }
});