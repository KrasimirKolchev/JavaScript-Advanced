function TicTacToe(args) {
    let arr = fillMatrix();
    const pl1 = 'X';
    const pl2 = 'O';
    const warnMsg = "This place is already taken. Please choose another!";
    let count = 0;

    for (let i = 0; i < args.length; i++) {
        let pos = args[i].split(' ');

        while (true) {
            if (arr[Number(pos[0])][Number(pos[1])] === 'false') {
                arr[Number(pos[0])][Number(pos[1])] = pl1;
                count++;
                i++;
                break;
            }
            console.log(warnMsg);
            i++;
            pos = args[i].split(' ');
        }

        if (checkForWinner(pl1)) {
            printWinnerAndMatrix(pl1);
            return;
        }
        if (count === 9) {
            endGame();
            return;
        }

        pos = args[i].split(' ');

        while (true) {
            if (arr[Number(pos[0])][Number(pos[1])] === 'false') {
                arr[Number(pos[0])][Number(pos[1])] = pl2;
                count++;
                break;
            }
            console.log(warnMsg);
            i++;
            pos = args[i].split(' ');
        }

        if (checkForWinner(pl2)) {
            printWinnerAndMatrix(pl2);
            return;
        }
        if (count === 9) {
            endGame();
            return;
        }
    }

    endGame();

    function fillMatrix() {
        let matrix = [];
        for (let i = 0; i < 3; i++) {
            matrix[i] = ['false', 'false', 'false'];
        }
        return matrix;
    }

    function checkForWinner(player) {
            if (arr[0][0] === player && arr[0][1] === player && arr[0][2] === player ||
                arr[0][0] === player && arr[1][1] === player && arr[2][2] === player ||
                arr[0][0] === player && arr[1][0] === player && arr[2][0] === player ||
                arr[0][1] === player && arr[1][1] === player && arr[2][1] === player ||
                arr[0][2] === player && arr[1][2] === player && arr[2][2] === player ||
                arr[0][2] === player && arr[1][1] === player && arr[2][0] === player ||
                arr[1][0] === player && arr[1][1] === player && arr[1][2] === player ||
                arr[2][0] === player && arr[2][1] === player && arr[2][2] === player) {

                return true;
            }

    }

    function printWinnerAndMatrix(player) {
        console.log(`Player ${player} wins!`);
        printMatrix();
    }

    function printMatrix() {
        for (const line of arr) {
            console.log(line.join('\t'));
        }
    }

    function endGame() {
        console.log('The game ended! Nobody wins :(');
        printMatrix();
    }
}

TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
TicTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);