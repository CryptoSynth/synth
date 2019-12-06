var elements = document.querySelectorAll("#btnLoader");
for (var i = 0; i < elements.length; i++) {
    $(elements[i]).click(function() {
        // disable button
        $(this).prop("disabled", true);
        // add spinner to button
        $(this).html(
            `<span class="spinner-border spinner-style" role="status" aria-hidden="true"></span>`
        );
    });
}