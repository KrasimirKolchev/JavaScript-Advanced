function solve() {
    let calcDisplay = document.getElementById("expressionOutput");
    let displayResult = document.getElementById('resultOutput');

    Array.from(document.querySelectorAll('.keys')).map(e => e.addEventListener('click', function calc(e) {

        if (e.target.textContent === '=') {
            try {
                displayResult.textContent = eval(calcDisplay.textContent);
            } catch (e) {
                displayResult.textContent = "NaN";
            }

        } else {
            if (isNaN(Number(e.target.textContent))) {
                if (e.target.textContent === 'x') {
                    e.target.textContent = '*';
                }

                if (e.target.textContent === '.') {
                    calcDisplay.textContent += `${e.target.textContent}`;
                } else {
                    calcDisplay.textContent += ` ${e.target.textContent} `;
                }

            } else {
                calcDisplay.textContent += e.target.textContent;
            }
        }
    }));

    document.querySelector('.clear').addEventListener('click', function () {
        displayResult.textContent = "";
        calcDisplay.textContent = "";
    })
}