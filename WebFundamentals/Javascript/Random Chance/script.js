function play() {
    var quarter = prompt("How Much You Want To Bet")
    var result;
    var answer;
    if (isNaN(parseInt(quarter)) || !quarter) {
        alert("Invalid Number");
        play();
    } else {
        var randomChance = Math.floor(Math.random() * 100);
        var randomCoins = Math.floor(Math.random() * 50) + 50;
        var pickNumber = prompt("Pick A Number Between 1 to 100");
        var winnings = parseInt(quarter) + randomCoins;
        while (quarter > 0) {
            console.log("Your pick: " + pickNumber);
            console.log("Winning Number: " + randomChance);
            console.log("Possible Winnings: " + randomCoins);
            if (parseInt(pickNumber) === randomChance) {
                result = winnings
                alert("You Pick the Winning Number.  Your Total Winnings:", result);
                answer = prompt("Would You Like To Play Again? yes/no")
                if (answer.toLowerCase() == "yes") {
                    play()
                } else if (answer.toLowerCase() == "no") {
                    alert("See You Next Time")
                } else if (!answer){
                    alert("See You Next Time")
                }
            } else if (parseInt(pickNumber) !== randomChance) {
                if (isNaN(parseInt(pickNumber))) {
                    alert("Invalid number");
                    pickNumber = prompt("Pick Another Number Between 1 to 100");
                    randomChance = Math.floor(Math.random() * 100);
                    randomCoins = Math.floor(Math.random() * 50) + 50;
                    quarter;
                    console.log("Your Balance is: " + quarter);
                } else {
                    alert("Good Luck Next Time. You pick: "+ pickNumber + " And The Winning Number Is: "+ randomChance);
                    pickNumber = prompt("Pick Another Number Between 1 to 100");
                    randomChance = Math.floor(Math.random() * 100);
                    randomCoins = Math.floor(Math.random() * 50) + 50;
                    quarter -= 1;
                    console.log("Your Balance is: " + quarter);
                }
            }

        }
    }
    answer = prompt("Your Balance Is 0 Would You Like To Play Again? yes/no")
    if (answer.toLowerCase() == "yes") {
        play()
    } else if (answer.toLowerCase() == "no") {
        alert("See You Next Time");
    } else if (!answer){
        alert("See You Next Time");
    }

}
play();
