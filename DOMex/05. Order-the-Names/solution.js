function solve() {
    let diction = {
        "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12, "N": 13,
        "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25
    };

    let textBox = document.getElementsByTagName('input')[0];
    let buttonAdd = document.getElementsByTagName('button')[0];
    buttonAdd.addEventListener('click', addText);

    function addText() {
        let line = document.getElementsByTagName('li');
        let lineCode = diction[textBox.value[0].toLocaleUpperCase()];
        if (line[lineCode].textContent.length > 0) {
            line[lineCode].textContent += ", ";
        }
        line[lineCode].textContent += textBox.value[0].toLocaleUpperCase() + textBox.value.slice(1).toLowerCase();
        textBox.value = "";
    }
}