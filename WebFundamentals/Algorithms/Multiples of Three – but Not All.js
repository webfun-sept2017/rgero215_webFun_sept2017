//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for(i= -300; i<= 0; i++){
    if(i === -6 || i === -3){
        continue;
    } else if (i % 3 === 0) {
        console.log('Multiples of 3 skipping -3 and -6: ', i);
    } 
}