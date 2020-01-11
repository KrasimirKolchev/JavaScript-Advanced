function SquareOfStars(num) {
    let symbol = '* ';

    if (typeof (num) === 'undefined') {
        for (let i = 0; i < 5; i++) {
            console.log(symbol.repeat(5));
        }
    } else {
        for (let i = 0; i < num; i++) {
            console.log(symbol.repeat(num))
        }
    }
}

SquareOfStars(5);