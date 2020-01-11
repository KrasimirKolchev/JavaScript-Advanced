function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let textAreas = Array.from(document.getElementsByTagName('textarea'));
    let tBody = Array.from(document.getElementsByTagName('tbody'))[0];

    let buttonGenerate = buttons[0];
    buttonGenerate.addEventListener('click', addFurniture);
    let textAreaInput = textAreas[0];

    Array.from(document.getElementsByTagName('input'))[0].outerHTML = `<input type="checkbox" />`;

    function addFurniture() {
        let inputArr = JSON.parse(textAreaInput.value);

        for (const el of inputArr) {
            tBody.appendChild(document.getElementsByTagName('tr')[1].cloneNode(true));
            let tr = document.getElementsByTagName('tr');
            let td = tr[tr.length - 1];
            td.getElementsByTagName('td')[0].innerHTML = `<img src=${el["img"]}>`;
            td.getElementsByTagName('td')[1].innerHTML = `<p></p>${el["name"]}</p>`;
            td.getElementsByTagName('td')[2].innerHTML = `<p></p>${el["price"]}</p>`;
            td.getElementsByTagName('td')[3].innerHTML = `<p></p>${el["decFactor"]}</p>`;
            td.getElementsByTagName('td')[4].innerHTML = `<input type="checkbox" />`;
        }
    }


    let buttonBuy = buttons[1];
    buttonBuy.addEventListener('click', displayBoughtProducts);
    let textAreaOutput = textAreas[1];

    function displayBoughtProducts() {
        let totalPrice = 0;
        let boughtFurniture = [];
        let decFactor = 0;

        let rowsTr = Array.from(document.getElementsByTagName('tr'));

        for (let i = 1; i < rowsTr.length; i++) {
            let td = rowsTr[i].children;
            let cBox = td[4].children[0];

            if (cBox.checked) {
                boughtFurniture.push(td[1].textContent.trim());
                totalPrice += Number(td[2].textContent);
                decFactor += Number(td[3].textContent);
            }
        }

        decFactor /= boughtFurniture.length;

        textAreaOutput.value =
            `Bought furniture: ${boughtFurniture.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${decFactor}`;

    }
}