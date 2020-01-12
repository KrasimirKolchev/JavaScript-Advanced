function acceptance() {
	let btnAddIt = document.getElementsByTagName('button')[0];
	btnAddIt.addEventListener('click', addProduct);
	let warehouse = document.getElementById('warehouse');

	function addProduct(pr) {
		pr.preventDefault();
		let inputFields = document.getElementsByTagName('input');
		let company = inputFields[0].value;
		let pName = inputFields[1].value;
		let pQuantity = Number(inputFields[2].value);
		let pScrape = Number(inputFields[3].value);

		if (isDataValid(company, pName, pQuantity, pScrape)) {
			if (pQuantity - pScrape > 0) {
				let div = creator('div');
				let p = creator('p');
				pQuantity -= pScrape;
				p.textContent = `[${company}] ${pName} - ${pQuantity} pieces`;
				div.appendChild(p);
				let btnOutOfStock = creator('button');
				btnOutOfStock.textContent = 'Out of stock';
				btnOutOfStock.addEventListener('click', function () {
					warehouse.removeChild(div);
				});
				div.appendChild(btnOutOfStock);
				warehouse.appendChild(div);
			}
		}
		inputFields[0].value = "";
		inputFields[1].value = "";
		inputFields[2].value = "";
		inputFields[3].value = "";
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

		return true;
	}

	function creator(el) {
		return document.createElement(el);
	}
}