function DiagonalSums(args) {

    let leftDiagonal = 0;

    for (let i = 0; i < args.length; i++) {
        let innerArrLength = args[i].length;
        for (let j = 0; j < innerArrLength; j++) {
            leftDiagonal += args[i][j];
            i++;
        }
    }

    let rightDiagonal = 0;

    for (let i = 0; i < args.length; i++) {
        let innerArrStart = args[i].length - 1;
        for (let j = innerArrStart; j >= 0; j--) {
            rightDiagonal += args[i][j];
            i++;
        }
    }

    console.log(leftDiagonal + " " + rightDiagonal);
}

DiagonalSums([[20, 40], [10, 60]]);
DiagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);