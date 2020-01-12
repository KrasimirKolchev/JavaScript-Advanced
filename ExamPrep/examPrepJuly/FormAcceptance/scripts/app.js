function acceptance() {
	document.querySelector('#acceptance').addEventListener('click', addProduct);

	function addProduct() {
		let com = document.querySelector('#fields input[name="shippingCompany"]').value;
		let prod = document.querySelector('#fields input[name="productName"]').value;
		let quant = document.querySelector('#fields input[name="productQuantity"]').value;
		let scrape = document.querySelector('#fields input[name="productScrape"]').value;

		if (isDataValid(com, prod, quant, scrape)) {
			quant -= scrape;
			let div = creator('div');
			let p = creator('p');
			p.textContent = `[${com}] ${prod} - ${quant} pieces`;
			div.appendChild(p);

			let buttonOutOfStock = creator('button');
			buttonOutOfStock.textContent = 'Out of stock';
			buttonOutOfStock.addEventListener('click', removeProduct);
			div.appendChild(buttonOutOfStock);

			document.querySelector('#warehouse h1').appendChild(div);
		}

		document.querySelector('#fields input[name="shippingCompany"]').value = "";
		document.querySelector('#fields input[name="productName"]').value = "";
		document.querySelector('#fields input[name="productQuantity"]').value = "";
		document.querySelector('#fields input[name="productScrape"]').value = "";
	}

	function isDataValid(c, pN, pQ, pS) {
		if (c.trim().length === 0 || typeof c !== 'string') {
			return false;
		}

		if (pN.trim().length === 0 || typeof pN !== 'string') {
			return false;
		}

		if (typeof pQ !== 'number') {
			return false;
		}

		if (typeof pS !== 'number') {
			return false;
		}

		if (pQ - pS <= 0) {
			return false;
		}

		return true;
	}

	function removeProduct() {
		document.querySelector('#warehouse h1').removeChild(this.parentNode);
	}

	function creator(el) {
		return document.createElement(el);
	}
}