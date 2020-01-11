function solve() {
    const textField = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;


    if (convention === "Camel Case") {
        document.getElementById('result').textContent = transformCamel(textField);
    } else if (convention === "Pascal Case") {
        document.getElementById('result').textContent = transformPascal(textField);
    } else {
        document.getElementById('result').textContent = "Error!";
    }

    function transformCamel(text) {
        text = text.toLowerCase().split(' ');
        let newText = text[0].toString().toLowerCase();

        for (let i = 1; i < text.length; i++) {
            newText += text[i].substr(0, 1).toUpperCase() + text[i].substring(1);
        }

        return newText;
    }

    function transformPascal(text) {
        text = text.toLowerCase().split(' ');
        let newText = '';

        for (let i = 0; i < text.length; i++) {
            newText += text[i].substr(0, 1).toUpperCase() + text[i].substring(1);
        }

        return newText;
    }
}