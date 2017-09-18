var names = [ "James", "Jill", "Jane", "Jack" ];
var number = 0;
var symbol = "->";
function printArr(symbol, names, reversed) {
    if (reversed == false){
        for (var i = 0; i < names.length; i++) {
            number += 1
            console.log(number - 1, symbol, names[i]);
        }
    } else {
        for (var i = names.length - 1; i >= 0; i--) {
            number += 1
            console.log(number - 1, symbol, names[i]);
        }
    }
}
printArr(symbol, names, false);
