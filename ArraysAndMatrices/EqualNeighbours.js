function EqualNeighbours(args) {
    let equal = 0;

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (i < args.length - 1 && args[i][j] === args[i + 1] [j]) {
                equal++;
            }

            if (args[i][j] === args[i][j + 1]) {
                equal++;
            }
        }
    }

    return equal;
}

EqualNeighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
EqualNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);