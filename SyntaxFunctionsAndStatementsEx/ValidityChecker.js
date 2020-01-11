function ValidityChecker(args) {
    let x1 = args[0];
    let y1 = args[1];
    let x2 = args[2];
    let y2 = args[3];

    if (isValid(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValid(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function isValid(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));
    }

}

ValidityChecker([2, 1, 1, 1]);

//The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.