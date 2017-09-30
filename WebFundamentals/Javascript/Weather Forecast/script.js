$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        var city = "";
        var key = "&APPID=393a61537ed97f202cb3ac6ee256471a";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=";
        var unit = "&units=imperial";
        city = $('.text').val();

        url += city + unit + key;
        $.get(url, function(res) {
            // your code here
            $(".searchResult").html("<h1>" + city.toUpperCase() + "</h1><br><h2>Temperature: " + res.main["temp"] + "</h2>");

            console.log(res);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
