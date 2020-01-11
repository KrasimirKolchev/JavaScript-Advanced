function solve() {
    const textField = document.getElementById('text').value;
    const number = Number(document.getElementById('number').value);

    let split = textField.split('');
    let arr = [];

    if (split.length % number !== 0) {
        let additional = number - (split.length % number);
        for (let i = 0; i < additional; i++) {
            split.push(split[i]);
        }

        let word = split.join('');

        for (let i = 0; i < word.length; i+=number) {
            arr.push(word.substring(i, i + number));
        }

    } else {
        for (let i = 0; i < textField.length; i+=number) {
            arr.push(textField.substring(i, i + number));
        }
    }

    document.getElementById('result').innerHTML = arr.join(' ');
}
