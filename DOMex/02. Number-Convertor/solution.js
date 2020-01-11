function solve() {
    const selectMenu = document.getElementById('selectMenuTo');

    createOptions();

    document.querySelector('#container > button').addEventListener('click', convert);

    function convert() {
        let numberToConvert = Number(document.getElementById('input').value);
        let convertedNumber;

        if (selectMenu.value === "binary") {
            convertedNumber = convertBinary(numberToConvert);
        } else if (selectMenu.value === "hexadecimal") {
            convertedNumber = convertHexadecimal(numberToConvert);
        }

        showResult(convertedNumber);
    }

    function createOptions() {
        let optionBinary = document.createElement('option');
        optionBinary.value = 'binary';
        optionBinary.textContent = 'Binary';

        let optionHexadecimal = document.createElement('option');
        optionHexadecimal.value = 'hexadecimal';
        optionHexadecimal.textContent = 'Hexadecimal';

        selectMenu.appendChild(optionBinary);
        selectMenu.appendChild(optionHexadecimal);
    }

    function convertBinary(n){
        return (n >>> 0).toString(2);
    }

    function convertHexadecimal(n){
        return (n >>> 0).toString(16).toUpperCase();
    }

    function showResult(n) {
        document.getElementById('result').value = n;
    }
}
