function BiggestElement(args) {
    let biggest;

    for (let inner of args) {
        let sorted = inner.sort((a, b) => {return b - a});
        if (sorted[0] > biggest || biggest === undefined) {
            biggest = sorted[0];
        }
    }

    console.log(biggest);
}

BiggestElement([[20, 50, 10], [8, 33, 145]]);
BiggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);