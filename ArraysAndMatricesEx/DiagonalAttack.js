function DiagonalAttack(args) {
    let arr = parseInput(args);

    if (compareDiagonals(sumLeftDiagonal(arr), sumRightDiagonal(arr))) {
        let num = sumRightDiagonal(arr);
        arr.forEach(e => e.fill(num));
        changeDiagonals(args);
        arr.forEach(e => console.log(e.join(' ')));
    } else {
        arr.forEach(e => console.log(e.join(' ')));
    }


    function parseInput(args) {
        let arr1 = [];
        for (let line of args) {
            let strArr = line.split(" ");
            let numArr = [];

            for (let num of strArr) {
                numArr.push(Number(num));
            }
            arr1.push(numArr);
        }
        return arr1;
    }

    function sumLeftDiagonal(arr) {
        let leftDiagonal = 0;

        for (let i = 0; i < arr.length; i++) {
            let innerArrLength = arr[i].length;
            for (let j = 0; j < innerArrLength; j++) {
                leftDiagonal += arr[i][j];
                i++;
            }
        }
        return leftDiagonal;
    }

    function sumRightDiagonal(arr) {
        let rightDiagonal = 0;

        for (let i = 0; i < arr.length; i++) {
            let innerArrStart = arr[i].length - 1;
            for (let j = innerArrStart; j >= 0; j--) {
                rightDiagonal += arr[i][j];
                i++;
            }
        }
        return rightDiagonal;
    }

    function compareDiagonals(left, right) {
        return left === right;
    }

    function changeDiagonals(args) {
        let initialArr = parseInput(args);
        changeLeftDiagonal(initialArr);
        changeRightDiagonal(initialArr);
    }

    function changeLeftDiagonal(init) {
        for (let i = 0; i < arr.length; i++) {
            let innerArrLength = arr[i].length;
            for (let j = 0; j < innerArrLength; j++) {
                arr[i][j] = init[i][j];
                i++;
            }
        }
    }

    function changeRightDiagonal(init) {
        for (let i = 0; i < arr.length; i++) {
            let innerArrStart = arr[i].length - 1;
            for (let j = innerArrStart; j >= 0; j--) {
                arr[i][j] = init[i][j];
                i++;
            }
        }
    }
}

DiagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
    ]);
DiagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
    ]);