function SpiralMatrix(a, b) {

    let matrix = fillMatrix(a, b);
    let rowS = 0;
    let colS = 0;
    let rowE = a - 1;
    let colE = b - 1;
    let num = 1;

    while (num !== a * b + 1) {
        for (let c = colS; c <= colE; c++) {
            matrix[rowS][c] = num++;
        }
        rowS++;

        for (let r = rowS; r <= rowE; r++) {
            matrix[r][colE] = num++;
        }
        colE--;

        for (let c = colE; c >= colS; c--) {
            matrix[rowE][c] = num++;
        }
        rowE--;

        for (let r = rowE; r >= rowS; r--) {
            matrix[r][colS] = num++;
        }
        colS++;
    }


    matrix.forEach(e => console.log(e.join(' ')));

    function fillMatrix(a, b) {
        let matr = new Array(a);
        for (let i = 0; i < a; i++) {
            let int = new Array(b);
            int.fill(0, 0, b);
            matr[i] = int;
        }
        return matr;
    }
}

SpiralMatrix(5, 5);
SpiralMatrix(3, 3);