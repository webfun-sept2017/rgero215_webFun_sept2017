// Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.
myNumber = 42;
myName = 'Ramon';

function swap(myVar) {
    if (myVar === 42) {
        myVar = 'Ramon';
        console.log(myVar);
    } else if (myVar === 'Ramon') {
        myVar = 42
        console.log(myVar);
    }
}

swap(myName)
swap(myNumber)