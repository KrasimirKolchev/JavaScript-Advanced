function Orbit(args) {
    let rows = args[0];
    let cols = args[1];
    let x = args[2];
    let y = args[3];

    let matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let num = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
            matrix[i][j] = num;
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

Orbit([4, 4, 0, 0]);
Orbit([5, 5, 2, 2]);
Orbit([3, 3, 2, 2]);