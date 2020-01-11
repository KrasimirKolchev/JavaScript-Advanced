function add() {
    function solution(a) {
        return function (b) {
            return a + b;
        }
    }

    let result = solution(9);
    console.log(result(2));
}
add();