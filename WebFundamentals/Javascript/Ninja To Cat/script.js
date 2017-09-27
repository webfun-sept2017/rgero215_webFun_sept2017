$("document").ready(function () {
    $("img").click(function () {
        var initialValue = $(this).attr("data-init-src");
        var newValue = $(this).attr("data-alt-src");

        if ($(this).attr("src") === newValue) {
            $(this).attr("src", initialValue);
        } else {
            $(this).attr("src", newValue);
        }
    })
});
