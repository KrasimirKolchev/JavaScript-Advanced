function NegativePositiveNumbers(args) {
    let res = [];

    for (const number of args) {
        if (number < 0) {
            res.unshift(number);
        } else {
            res[res.length] = number;
        }
    }
    console.log(res.join("\n"));
}

NegativePositiveNumbers([7, -2, 8, 9]);

NegativePositiveNumbers([3, -2, 0, -1]);