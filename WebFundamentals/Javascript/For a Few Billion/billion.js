var reward = 0.01
var result = undefined;
for (var days = 1; days <= 30; days++) {
    if (days == 1) {
        var result = reward * 100 / 100;
        console.log("day", days, "reward is", result);
    } else {
        reward *= 2;
        result = reward * 100 / 100;
        console.log("day", days, "reward is", result);
    }

}
console.log("The reward after 30 days is:", result);
