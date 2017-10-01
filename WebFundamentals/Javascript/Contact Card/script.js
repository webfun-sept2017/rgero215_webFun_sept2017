$(document).ready(function () {

    function random_color()
      {
         var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
         color = '#'  //this is what we'll return!
         for(var i = 0; i < 6; i++)
         {
            x = Math.floor((Math.random()*16))
            color += rgb[x];
         }
         return color;
      }

    $(document).on("click", ".submit", function() {

        var firstName = $("input[name='firstName']").val();
        var lastName = $("input[name='lastName']").val();
        var description = $("textarea").val();
        var cardLocation = $(this).parent().parent().siblings(".contactCard");

        $(cardLocation).append("<div class='card'>" + "<h1>" + firstName + " "
            + lastName + "</h1>" + "<h2>" + description + "</h2>" + "<a href='#'>Click For Description!</a>" + "</div>");
            
            $(".card").css("background-color", random_color);
            $("a").on("click", function(event) {
                event.stopPropagation();
                var location = $(this).parent();
                $(location).children("h1").hide();
                $(location).children("a").hide();
                $(location).children("h2").show();
                    // $(location).append("<h2>" + description + "</h2>");
                    $(location).css("text-align", "left");
                    $(location).css("font-size", "20px");
                    $(location).click(function() {
                        $(location).children("h1").show();
                        $(location).children("a").show();
                        $(location).children("h2").hide();
                        $(location).css("text-align", "center");
                    })
            })

            $('form').trigger("reset");
        return false;
    })
})
