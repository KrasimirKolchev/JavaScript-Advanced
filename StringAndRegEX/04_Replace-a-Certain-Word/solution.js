function solve() {
    const word = document.getElementById('word').value;
    const textField = document.getElementById('text').value;
    let text = textField.replace(/["\[\]\n]/g, '');
    let textArr = text.split(',');

    let regExp = new RegExp(textArr[0].split(' ')[2], 'i');
    let result = document.getElementById('result');

    for (let sent of textArr) {
        let newSent = sent.replace(regExp, word);
        let p = document.createElement('p');
        p.textContent = newSent.trim();

        result.appendChild(p);
    }
}


