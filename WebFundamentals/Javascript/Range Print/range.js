function printRange(startPoint, endPoint, skipPoint) {

    if (Math.sign(startPoint) == -1 && Math.sign(endPoint) == -1) {
        if (startPoint > endPoint) {
            for (var i = startPoint; i > endPoint; i -= Math.abs(skipPoint)) {
                console.log(i);
            }
        } else {
            for (var i = startPoint; i < endPoint; i += Math.abs(skipPoint)) {
                console.log(i);
            }
        }
    } else if (Math.sign(endPoint) == -1 && Math.sign(startPoint) == 1) {
        for (var i = startPoint; i > endPoint; i -= Math.abs(skipPoint)) {
            console.log(i);
        }
    } else if (Math.sign(endPoint) == 1 && Math.sign(startPoint) == -1) {
        for (var i = startPoint; i < endPoint; i += Math.abs(skipPoint)) {
            console.log(i);
        }
    } else if (startPoint > endPoint) {
            for (var i = startPoint; i > endPoint; i -= Math.abs(skipPoint)) {
                console.log(i);
            }
    } else {
        for (var i = startPoint; i < endPoint; i += skipPoint) {
            console.log(i);
        }
    }

}
printRange(2,10,2)
