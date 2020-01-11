function solve() {
    let productNames = Array.from(document.getElementsByClassName('product-title'));
    let addButtons = Array.from(document.getElementsByClassName('add-product'));
    let prices = Array.from(document.getElementsByClassName('product-line-price'));

    let textField = document.getElementsByTagName('textArea')[0];
    let totalPrice = 0;
    let productList = [];

    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', addToCart);

        function addToCart() {
            let price = Number(prices[i].textContent.match(/[0-9]+.[0-9]+/));

            totalPrice += Number(price.toFixed(2));

            if (!productList.includes(productNames[i].textContent)) {
                productList.push(productNames[i].textContent);
            }

            textField.textContent += `Added ${productNames[i].textContent} for ${prices[i].textContent} to the cart.\n`
        }
    }

    let checkOutBtn = Array.from(document.getElementsByClassName('checkout'));
    checkOutBtn[0].addEventListener('click', calculate);

    function calculate() {
        disableBtns();
        textField.textContent += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`

    }

    function disableBtns() {
        addButtons.map(b => b.disabled = true);
        checkOutBtn[0].disabled = true;
    }
}