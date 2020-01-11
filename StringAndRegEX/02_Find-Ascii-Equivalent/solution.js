function solve() {
    let textField = document.getElementById('text').value;
    let result = document.getElementById('result');
    let pNum = document.createElement('p');

    let textSplit = textField.split(' ').filter(s => s !== ' ');
    let res = '';

    for (let word of textSplit) {
        if (Number(word)) {
            res += String.fromCharCode(word);
        } else {
            let arr = [];

            for (let i = 0; i < word.length; i++) {
                arr.push(word[i].charCodeAt(0));
            }

            let pStr = document.createElement('p');
            pStr.innerHTML = arr.join(' ');
            result.appendChild(pStr);
        }
    }
    pNum.innerHTML = res;
    result.appendChild(pNum);
}