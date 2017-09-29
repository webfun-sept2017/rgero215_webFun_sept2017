$(document).ready(function () {

    for (var i = 0; i < 151; i++) {
        var number = 1;
        number += i;
        var pokemon = "http://pokeapi.co/media/img/" + number + ".png"
        $("div").append('<img src="' + pokemon + '">');
        console.log(pokemon);
    }
})
