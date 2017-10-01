$(document).ready(function () {
    // have JS display the world of bricks/ coin/ etc.
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,1,1,1,3,2,1,1,1,1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,3,1,1,1,1,2],
        [2,1,1,1,1,1,2,1,1,1,7,1,1,1,1,2,1,2,1,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2],
        [2,1,2,2,2,2,2,1,4,1,1,1,1,1,6,2,1,2,1,1,2,1,1,3,2,1,8,2,1,2,1,1,1,2,1,1,8,1,1,1,1,1,2,1,2,1,1,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,2,2,2,2,2,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,1,1,2,2,2,2,2,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,2,1,6,1,2,1,1,1,1,1,1,1,1,2,1,5,2,1,1,2],
        [2,1,1,8,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,4,1,1,1,2,1,2,3,1,1,2],
        [2,1,1,2,2,2,2,1,1,1,1,1,1,1,7,2,1,2,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,3,1,1,2,1,1,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,2,4,8,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,6,1,1,1,1,2,1,2,5,1,1,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,3,2,1,1,1,2,1,6,1,1,1,2,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,5,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,2,2,1,1,1,2,1,1,1,5,2,1,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,1,8,3,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,2],
        [2,1,6,1,1,1,2,1,1,1,1,4,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2,2,2,1,2,1,1,1,1,8,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1,5,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,1,1,2,1,2],
        [2,7,1,1,1,1,2,2,2,2,2,2,2,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,5,1,2,1,1,1,1,1,1,7,1,2,1,1,1,1,1,2],
        [2,1,1,1,1,4,2,3,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

    ];
    var pacman = {
        x: 1,
        y: 1
    };

    var score = 0;

    function displayPacman() {
        $("#pacman").attr( {
            style: `top: ${pacman.y * 20 + 'px'}; left: ${pacman.x * 20 + 'px'};`,
        });

    }

    function displayScore() {
        $("#score").html(`${score}`);


    }



    function displayWorld() {
        var output = "";
        for (var i = 0; i < world.length; i++) {
            output += "<div class='row'>";
            for (var j = 0; j < world[i].length; j++) {
                if (world[i][j] == 2) {
                    output += "<div class='bricks'></div>";
                } else if (world[i][j] == 1) {
                    output += "<div class='coin'></div>";
                } else if (world[i][j] == 0) {
                    output += "<div class='empty'></div>";
                } else if (world[i][j] == 3) {
                    output += "<div class='cherry'></div>";
                } else if (world[i][j] == 4) {
                    output += "<div class='redGhost'></div>";
                } else if (world[i][j] == 5) {
                    output += "<div class='blueGhost'></div>";
                } else if (world[i][j] == 6) {
                    output += "<div class='orangeGhost'></div>";
                } else if (world[i][j] == 7) {
                    output += "<div class='greenGhost'></div>";
                } else if (world[i][j] == 8) {
                    output += "<div class='pinkGhost'></div>";
                }

            }
            output += "\n</div>";

        }

        $("#world").html(output);
    }

    displayWorld();
    displayPacman();
    displayScore();

    console.log(world[pacman.y][pacman.x + 1]);

    $(document).on("keydown", function (e) {
        console.log(e.keyCode);

        if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] !== 2 ) {
            pacman.x ++
            $("#pacman").toggleClass('right', true);
            $("#pacman").toggleClass('left', false);
            $("#pacman").toggleClass('up', false);
            $("#pacman").toggleClass('down', false);

        } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] !== 2) {
            pacman.y ++
            $("#pacman").toggleClass('down', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('left', false);
            $("#pacman").toggleClass('up', false);


        } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] !== 2) {
            pacman.x --
            $("#pacman").toggleClass('left', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('up', false);
            $("#pacman").toggleClass('down', false);

        } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] !== 2 ) {
            pacman.y --
            $("#pacman").toggleClass('up', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('left', false);
            $("#pacman").toggleClass('down', false);

        }

        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score += 10;
            displayWorld();
            displayScore();
        } else if (world[pacman.y][pacman.x] == 3) {
            world[pacman.y][pacman.x] = 0;
            score += 50;
            displayWorld();
            displayScore();
        } else if (world[pacman.y][pacman.x] == 5) {
            score -= 50;
            displayWorld();
            displayScore();
        } else if (world[pacman.y][pacman.x] == 4 || world[pacman.y][pacman.x] == 6 || world[pacman.y][pacman.x] == 7 || world[pacman.y][pacman.x] == 8) {
            alert("You lost");
            location.reload();
        }
        displayPacman();



    });


});
