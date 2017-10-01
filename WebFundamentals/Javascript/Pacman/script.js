$(document).ready(function () {
    // have JS display the world of bricks/ coin/ etc.
    var world = [
        [2,2,2,2,2,2,2,2,2,2],
        [2,0,1,1,1,1,2,3,1,2],
        [2,2,2,1,1,1,2,2,1,2],
        [2,1,1,1,1,1,2,1,1,2],
        [2,1,1,1,1,1,2,1,1,2],
        [2,1,2,1,1,1,1,1,1,2],
        [2,1,2,1,1,1,1,1,1,2],
        [2,1,2,1,2,2,2,2,2,2],
        [2,3,2,1,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2]

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
            // if (world[pacman.y][pacman.x + 1] === 2) {
            //     $("#pacman").toggleClass('rotated_180', true);
            // } else if (world[pacman.y][pacman.x + 1] === 1 || world[pacman.y][pacman.x + 1] === 0 ||world[pacman.y][pacman.x + 1] === 3) {
            //     $("#pacman").toggleClass('rotated_180', false);
            // }
        } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] !== 2) {
            pacman.y ++
            $("#pacman").toggleClass('down', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('left', false);
            $("#pacman").toggleClass('up', false);

            // if (world[pacman.y + 1 ][pacman.x] === 2) {
            //     $("#pacman").toggleClass('rotated', false);
            // } else if (world[pacman.y + 1][pacman.x] === 1 || world[pacman.y + 1][pacman.x] === 0 ||world[pacman.y + 1][pacman.x] === 3) {
            //     $("#pacman").toggleClass('rotated', true);
            // }
        } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] !== 2) {
            pacman.x --
            $("#pacman").toggleClass('left', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('up', false);
            $("#pacman").toggleClass('down', false);
            // if (world[pacman.y][pacman.x - 1] === 2) {
            //     $("#pacman").toggleClass('rotated_180', true);
            // } else if (world[pacman.y][pacman.x - 1] === 1 || world[pacman.y][pacman.x - 1] === 3) {
            //     $("#pacman").toggleClass('rotated_180', false);
            // }
            // $("#pacman").toggleClass('rotated_180', true);
        } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] !== 2 ) {
            pacman.y --
            $("#pacman").toggleClass('up', true);
            $("#pacman").toggleClass('right', false);
            $("#pacman").toggleClass('left', false);
            $("#pacman").toggleClass('down', false);
            // if (world[pacman.y - 1 ][pacman.x] === 2) {
            //     $("#pacman").toggleClass('rotated', false);
            // } else if (world[pacman.y - 1][pacman.x] === 1 || world[pacman.y - 1][pacman.x] === 3) {
            //     $("#pacman").toggleClass('rotated', true);
            // }
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
        }
        displayPacman();



    });


});
