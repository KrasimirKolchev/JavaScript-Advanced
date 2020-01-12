function solve() {
    let btnAdd = document.querySelector('form button');
    btnAdd.addEventListener('click', addProducts);

    let btnBuy = document.querySelector('#myProducts button');
    btnBuy.addEventListener('click', buyProducts);

    let btnFilter = document.querySelector('#products button');
    btnFilter.addEventListener('click', filterProducts);

    function filterProducts() {
        let word = document.querySelector('#filter').value;

        let spanArr = Array.from(document.querySelectorAll('#products li span'));
        if (word.trim() !== "") {
            spanArr.forEach(s => {
                if (!s.textContent.toLocaleLowerCase().startsWith(word.toLocaleLowerCase())) {
                    s.parentNode.style.display = 'none';
                }
            });
        } else {
            spanArr.forEach(s => {
                s.parentNode.style.display = 'block';
            });
        }
    }

    function buyProducts() {
        document.querySelector('#myProducts ul').innerHTML = "";
        Array.from(document.querySelectorAll('h1'))[1].textContent = 'Total Price: 0.00';
    }

    function addProducts(ev) {
        ev.preventDefault();
        let inputFields = Array.from(document.querySelectorAll('#add-new input'));
        let product = inputFields[0].value;
        let quantity = inputFields[1].value;
        let price = inputFields[2].value;

        if (product.trim() !== "" && Number(quantity) && Number(price)) {
            quantity = Number(quantity);
            price = Number(price);
            let li = creator('li');
            let span = creator('span');
            span.textContent = product;
            li.appendChild(span);

            let strong = creator('strong');
            strong.textContent = `Available: ${quantity}`;
            li.appendChild(strong);

            let div = creator('div');
            let strong1 = creator('strong');
            strong1.textContent = price.toFixed(2);
            div.appendChild(strong1);

            let btnAddToClList = creator('button');
            btnAddToClList.textContent = "Add to Client's List";

            btnAddToClList.addEventListener('click', function () {
                let currentQuant = Number(strong.textContent.split(': ')[1]);

                if (currentQuant >= 1) {
                    currentQuant--;
                    strong.textContent = `Available: ${currentQuant}`;
                    moveOneToMyProducts(product, price);
                    let total = Array.from(document.querySelectorAll('h1'))[1];
                    let currentTotal = Number(total.textContent.split(': ')[1]);
                    currentTotal += price;
                    total.textContent = `Total Price: ${currentTotal.toFixed(2)}`
                }
                if (currentQuant === 0) {
                    document.querySelector('#products ul').removeChild(strong.parentNode);
                }
            });

            div.appendChild(btnAddToClList);
            li.appendChild(div);
            document.querySelector('#products ul').appendChild(li);
        }

        inputFields[0].value = "";
        inputFields[1].value = "";
        inputFields[2].value = "";
    }

    function moveOneToMyProducts(product, price) {
        let li = creator('li');
        li.textContent = product;
        let strong = creator('strong');
        strong.textContent = price.toFixed(2);
        li.appendChild(strong);
        document.querySelector('#myProducts ul').appendChild(li);
    }

    function creator(el) {
        return document.createElement(el);
    }
}
