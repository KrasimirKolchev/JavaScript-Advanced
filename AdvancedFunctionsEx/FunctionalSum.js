function FunctionalSum(num) {
    let res = num;

    function add(secondNumber) {
        res += secondNumber;
        return add;
    }

    add.toString = function () {
        return res;
    };

    return add;
}

console.log(FunctionalSum(1)(2)(3)(4).toString());
