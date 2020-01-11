function solve() {
    const textField = document.getElementById('arr').value;
    let text = textField.replace(/["\[\]\n]/g, '');
    let textArr = text.split(', ');
    const matcher = RegExp('(([A-Z][a-z]* [A-Z][a-z]* \\+359-(2|3|5)-[0-9]{3}-[0-9]{3} [a-z0-9]+[@][a-z]+[.][a-z]{2,3})|([A-Z][a-z]* [A-Z][a-z]* \\+359 (2|3|5) [0-9]{3} [0-9]{3} [a-z0-9]+[@][a-z]+[.][a-z]{2,3}))');

    let arr = [];
    for (let info of textArr) {
        if (matcher.test(info)) {
            let name = info.match('[A-Z][a-z]* [A-Z][a-z]*');
            let phNumber = info.match(`((\\+359-(2|3|5)-[0-9]{3}-[0-9]{3})|(\\+359 (2|3|5) [0-9]{3} [0-9]{3}))`);
            let email = info.match('[a-z0-9]+[@][a-z]+[.][a-z]{2,3}');
            let p1 = document.createElement('p');
            p1.innerHTML = `Name: ${name[0]}`;
            arr.push(p1);
            let p2 = document.createElement('p');
            p2.innerHTML = `Phone Number: ${phNumber[0]}`;
            arr.push(p2);
            let p3 = document.createElement('p');
            p3.innerHTML = `Email: ${email[0]}`;
            arr.push(p3);
            let p4 = document.createElement('p');
            p4.innerHTML = '- - -';
            arr.push(p4);
        } else {
            let p5 = document.createElement('p');
            p5.innerHTML = 'Invalid data';
            arr.push(p5);
            let p6 = document.createElement('p');
            p6.innerHTML = '- - -';
            arr.push(p6);
        }
    }

    let result = document.getElementById('result');
    for (const p of arr) {
        result.appendChild(p);
    }
}