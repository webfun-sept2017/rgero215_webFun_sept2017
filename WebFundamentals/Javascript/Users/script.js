$(document).ready(function () {
    $("#submit").click(function () {

        $("table").append("<tr><td>" + $("input[name='firstName']").val() + "</td><td>"
            + $("input[name='lastName']").val() + "</td><td>"
            + $("input[name='email']").val() + "</td><td>"
            + $("input[name='phone']").val() + "</td></tr>");

        $("form").trigger("reset");
        return false;

    })
})
