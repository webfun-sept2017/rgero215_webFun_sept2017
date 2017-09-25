$(document).ready(function (){
    $(".click:eq(0)").click(function () {
        if ($("h1:eq(0)").text() === "Click") {
            $("h1:eq(0)").text("Hello World!");
            $("h1:eq(0)").css("background-color", "red");
        } else {
            $("h1:eq(0)").text("Click");
            $("h1:eq(0)").css("background-color", "white");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(1)").click(function () {
        if ($("h1:eq(1)").text() === "Hide") {
            $("h1:eq(1)").hide();
            $("button:eq(1)").text("Is Hidden");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(2)").click(function () {
        if ($("h1:eq(2)").text() === "Show") {
            $("h1:eq(2)").show();
            $("button:eq(2)").text("Is Showing");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(3)").click(function () {
        if ($("h1:eq(3)").text() === "Toggle") {
            $("h1:eq(3)").toggle();
            $("button:eq(3)").text("show");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(4)").click(function () {
        if ($("h1:eq(4)").text() === "Slide Down") {
            $("h1:eq(4)").slideDown();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(5)").click(function () {
        if ($("h1:eq(5)").text() === "Slide Up") {
            $("h1:eq(5)").slideUp();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(6)").click(function () {
        if ($("h1:eq(6)").text() === "Slide Toggle") {
            $("h1:eq(6)").slideToggle();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(7)").click(function () {
        if ($("h1:eq(7)").text() === "Fade In") {
            $("h1:eq(7)").fadeIn();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(8)").click(function () {
        if ($("h1:eq(8)").text() === "Fade Out") {
            $("h1:eq(8)").fadeOut();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(9)").click(function () {
        if ($("h1:eq(9)").text() === "Fade Toggle") {
            $("h1:eq(9)").fadeToggle();
        }
    })
});

$(document).ready(function (){
    $(".click:eq(10)").click(function () {
        if ($("h1:eq(10)").text() === "Add Class") {
            $("h1:eq(10)").addClass("addClass");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(11)").click(function () {
        if ($("h1:eq(11)").text() === "Before") {
            $("h1:eq(11)").before($("p:eq(11)"));
            $("p:eq(11)").text("Placed the paraghrap before the h1.");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(12)").click(function () {
        if ($("h1:eq(12)").text() === "After") {
            $("p:eq(12)").after($("h1:eq(12)"));
            $("p:eq(12)").text("Placed the h1 after the paraghrap.");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(13)").click(function () {
        if ($("h1:eq(13)").text() === "Append") {
            $("h1:eq(13)").append("<==");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(14)").click(function () {
        if ($("h1:eq(14)").text() === "HTML") {
            $("h1:eq(14)").html("<i>HTML</i>");
        }
    })
});

$(document).ready(function (){
    $(".click:eq(15)").click(function () {
        if ($("h1:eq(15)").text() === "Attr") {
            $("h1:eq(15)").text($("button").attr("type"));
        }
    })
});

$(document).ready(function (){
    $(".click:eq(16)").click(function () {
        var selectedValue = $("#val").val()
            $("p:eq(16)").text(selectedValue);
    })
});

$(document).ready(function (){
    $(".click:eq(17)").click(function () {
        $("p:eq(17)").text("Text Changed");
    })
});

$(document).ready(function (){
    $(".click:eq(18)").click(function () {
        $("div").data("Year", "2017");
            $("p:eq(18)").text("The current year is: "+$("div").data()["Year"]);    
    })
});
