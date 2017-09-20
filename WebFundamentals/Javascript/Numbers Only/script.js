function numbersOnly(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            result.push(array[i]);
        }
    }
    return result;
}
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray);

function removeNumbersOnly(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            array.splice(i, 1);
        }
    }
    return array;
}
var numbersRemoved = removeNumbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(numbersRemoved);
