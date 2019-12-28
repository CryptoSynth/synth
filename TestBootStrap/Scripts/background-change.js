$(window).scroll(function() {
    // selectors
    var $window = $(window),
        $body = $("body"),
        $panel = $(".staff-about, .vid-about, .ceo");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
        var $this = $(this);
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
        ) {
            // Remove all classes on body with color-
            $body.removeClass(function(index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
            });

            // Add class of currently active div
            $body.addClass("color-" + $(this).data("color"));
        }
    });

    $(".ceo").each(function() {
        if (
            $(this).position().top <= scroll &&
            $(this).position().top + $(this).height() > scroll
        ) {
            //fade in wave
            $("#wave-path").removeClass("wave-fill-hidden");
            $("#wave-path").addClass("wave-fill-seen");
        } else {
            //fade in wave
            $("#wave-path").addClass("wave-fill-hidden");
            $("#wave-path").removeClass("wave-fill-seen");
        }
    });

    $(".engineer").each(function() {
        if (
            $(this).position().top <= scroll &&
            $(this).position().top + $(this).height() > scroll
        ) {
            //fade in wave
            $("#wave-path-2").removeClass("wave-fill-hidden-2");
            $("#wave-path-2").addClass("wave-fill-seen-2");
        } else {
            $("#wave-path-2").addClass("wave-fill-hidden-2");
            $("#wave-path-2").removeClass("wave-fill-seen-2");
        }
    });
});