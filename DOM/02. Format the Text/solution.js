function solve() {
    let text = document.getElementById('input');
    let output = document.getElementById('output');

    let inputArr = text.innerHTML.split('. ');

    while (inputArr.length > 3) {
        let p = document.createElement('p');
        for (let i = 0; i < 3; i++) {
            let line = inputArr.shift() + '. ';
            p.innerHTML += line;
        }
        output.appendChild(p);
    }

    let p = document.createElement('p');
    while (inputArr.length !== 1) {
        p.innerHTML += inputArr.shift() + '. ';
    }

    p.innerHTML += inputArr.shift();

    output.appendChild(p);
}
