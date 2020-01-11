function solve() {
    let text = document.getElementById('input').value;
    let num = text;

    while (num > 9) {
        num = num.toString().split('').map(n => Number(n)).reduce((a, b) => a + b, 0);
    }

    let numbers = text.substring(num, text.length - num);
    let symbols = '';
    for (let i = 0; i < numbers.length; i+=8) {
        let dec = parseInt(numbers.substring(i, i + 8), 2);
        let symbol = String.fromCharCode(dec);
        let test = /[A-Za-z ]+/g;

        if (symbol.match(test)) {
            symbols += symbol;
        }
    }

    document.getElementById('resultOutput').innerHTML = symbols;
}
