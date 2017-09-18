var HOUR = 2;
var MINUTE = 00;
var PERIOD = "AM";

if (MINUTE < 30 && PERIOD == "PM" && HOUR > 6 && HOUR != 12) {
    console.log("It's just after", HOUR, "in the evening");
} else if (MINUTE < 30 && PERIOD == "PM" && HOUR < 6 && HOUR != 12) {
    console.log("It's just after", HOUR, "in the afternoon");
} else if (HOUR == 12 && MINUTE == 0 && PERIOD == "AM") {
    console.log("It's midnight");
} else if (HOUR == 12 && MINUTE == 0 && PERIOD == "PM") {
        console.log("It's noon");
}else if (MINUTE < 30 && PERIOD == "AM") {
    console.log("It's just after", HOUR, "in the morning");
} else if (MINUTE > 30 && PERIOD == "PM" && HOUR > 6) {
    HOUR +=1
    console.log("It's almost", HOUR, "in the evening");
} else if (MINUTE > 30 && PERIOD == "PM" && HOUR < 6) {
    HOUR +=1
    console.log("It's almost", HOUR, "in the afternoon");
} else if (MINUTE > 30 && PERIOD == "AM") {
    HOUR +=1
    console.log("It's almost", HOUR, "in the morning");
} else if (MINUTE == 15 && PERIOD == "PM" && HOUR > 6) {
    console.log("It's quarter after", HOUR, "in the evening");
} else if (MINUTE == 15 && PERIOD == "PM" && HOUR < 6) {
    console.log("It's quarter after", HOUR, "in the afternoon");
} else if (MINUTE == 15 && PERIOD == "AM") {
    console.log("It's quarter after", HOUR, "in the morning");
} else if (MINUTE == 5 && PERIOD == "AM") {
    console.log("It's five after", HOUR, "in the morning");
} else if (MINUTE == 5 && PERIOD == "PM" && HOUR > 6) {
    console.log("It's five after", HOUR, "in the evening");
} else if (MINUTE == 5 && PERIOD == "PM" && HOUR < 6) {
    console.log("It's five after", HOUR, "in the afternoon");
} else if (MINUTE == 30 && PERIOD == "PM" && HOUR > 6) {
    console.log("It's half past", HOUR, "in the evening");
} else if (MINUTE == 30 && PERIOD == "PM" && HOUR < 6) {
    console.log("It's half past", HOUR, "in the evening");
} else if (MINUTE == 30 && PERIOD == "AM") {
    console.log("It's half past", HOUR, "in the morning");
}
