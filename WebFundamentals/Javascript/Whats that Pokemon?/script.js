$(document).ready(function () {

    for (var i = 0; i < 151; i++) {
        var number = 1;
        number += i;
        var pokemon = "http://pokeapi.co/media/img/" + number + ".png"
        $(".pokemonImages").append('<img id="'+ number +'" src="' + pokemon + '">');

    }

    $("img").on("click", function () {
        $(".pokedex").children().remove();
        var image = $(this);;
        $.get("http://pokeapi.co/api/v1/pokemon/" + $(this).attr("id"), function (info) {
            console.log(info);
            $(".pokedex").append("<h1>" + info.name + "</h1>");
            $(".pokedex").append("<img id='" + image.attr("id") + "' " + "src='" + image.attr("src") + "'>");
            $(".pokedex").append("<h2>Type</h2>");
            for (var i = 0; i < info.types.length; i++) {
                $(".pokedex").append("<ul><li>" + info.types[i].name + "</li></ul>");
            }
            $(".pokedex").append("<h2>Height</h2>");
            $(".pokedex").append("<h3>" + info.height + "</h3>");
            $(".pokedex").append("<h2>Weight</h2>");
            $(".pokedex").append("<h3>" + info.weight + "</h3>");

        }, "jsonp");

    });

})
