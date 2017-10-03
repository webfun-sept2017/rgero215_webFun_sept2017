$(document).ready(function () {
    $(".datepicker").datepicker();
    $(".submit").on("click", function () {
        var from = $(".from").val();
        var to = $(".to").val();
        var name = $(".name").val();
        if (from !== "" && to !== "" && name !== "") {
            $("label").hide();
            $(".submit").css("background", "blue");
            alert(`Thanks ${name}!. Your Cruise leaves on ${from} and returns on ${to}!`)
        } else if (name === "") {
            $("label").show();
            $(".submit").css("background", "red");
        } else if (from === "" || to === "") {
            alert("Please pick the dates")
        }

        return false
    })

    $('.form').trigger("reset");
})
