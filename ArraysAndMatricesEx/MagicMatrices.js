function MagicMatrices(args) {
    let isMagic = true;
    let test = args[0].reduce(function (a, b) {return a + b}, 0);

    for (let i = 1; i < args.length; i++) {
        let sum = args[i].reduce(function (a, b) {return a + b}, 0);

        if (test !== sum) {
            isMagic = false;
            console.log(isMagic);
            return;
        }
    }

    for (let i = 0; i < args.length; i++) {
        let sum = 0;
        for (let j = 0; j < args[i].length; j++) {
            sum += args[i][j];
        }
        if (test !== sum) {
            isMagic = false;
            console.log(isMagic);
            return;
        }
    }
    console.log(isMagic);
}

MagicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
MagicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
MagicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);