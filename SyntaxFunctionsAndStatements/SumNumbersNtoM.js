function SumNumbersNtoM(a, b) {
    let result = 0;
    let num1 = Number(a);
    let num2 = Number(b);

    for (let i = num1; i <= num2; i++) {
        result += Number(i);
    }

    console.log(result);
}

SumNumbersNtoM('1', '5');
