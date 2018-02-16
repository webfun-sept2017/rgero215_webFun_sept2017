//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerfull() {
    let greeting = 'good morning!'
    for(i = 1; i <= 98; i++){
        console.log(`The greeting's count is: ${i}`,greeting) 
    }
}
beCheerfull()