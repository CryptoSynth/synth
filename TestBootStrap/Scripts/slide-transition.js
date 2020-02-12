function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$(document).ready(function() {
    /*===============================================================
        Modal Transition To Shipping Policy
    =================================================================*/
    $(".info-btn").on('click', function() {
        animateCSS("#myModal", "fadeInLeftBig");
    });

    $("#myModal").on('hide.bs.modal', function() {
        $(this).animate({
            width: "hide"
        });
    });

    $(".close").on('click', function() {
        $("#myModal").animate({
            width: "hide"
        });
    });
});