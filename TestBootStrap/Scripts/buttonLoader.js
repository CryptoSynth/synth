$(document).ready(function() {
    $("#btnLoader").click(function() {
        // disable button
        $(this).prop("disabled", true);
        // add spinner to button
        $(this).html(
            `<span class="spinner-border spinner-style" role="status" aria-hidden="true"></span>`
        );
    });
});