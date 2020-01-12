function solve() {
    let total = 0;

    let buttonAddBook = document.querySelector("form button");
    buttonAddBook.addEventListener('click', addBook);

    function addBook(ev) {
        ev.preventDefault();
        let inputFields = document.getElementsByTagName('input');

        let book = inputFields[0].value;
        let year = Number(inputFields[1].value);
        let price = Number(inputFields[2].value);

        if (isValidBookEntry(book, year, price)) {

            if (isOldBook(year)) {
                price = price - price * 0.15;
                showOldBook(book, year, price);
            } else {
                showNewBook(book, year, price);
            }
        }

        inputFields[0].value = "";
        inputFields[1].value = "";
        inputFields[2].value = "";
    }

    function showNewBook(book, year, price) {
        let div = createElem('div');
        div.classList = 'book';
        let p = createElem('p');
        p.textContent = `${book} [${year}]`;
        div.appendChild(p);
        let btnBuy = createElem('button');
        btnBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        btnBuy.addEventListener('click', function () {
            total += price;
            document.getElementsByTagName('h1')[1].textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
            document.getElementsByClassName('bookShelf')[1].removeChild(div);
        });

        div.appendChild(btnBuy);
        let btnMove = createElem('button');
        btnMove.textContent = 'Move to old section';

        btnMove.addEventListener('click', function () {
            price = price - price * 0.15;
            showOldBook(book, year, price);
            document.getElementsByClassName('bookShelf')[1].removeChild(div);
        });

        div.appendChild(btnMove);
        document.getElementsByClassName('bookShelf')[1].appendChild(div);
    }

    function showOldBook(book, year, price) {
        let div = createElem('div');
        div.classList = 'book';
        let p = createElem('p');
        p.textContent = `${book} [${year}]`;
        div.appendChild(p);
        let btnBuy = createElem('button');
        btnBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        btnBuy.addEventListener('click', function () {
            total += price;
            document.getElementsByTagName('h1')[1].textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
            document.getElementsByClassName('bookShelf')[0].removeChild(div);
        });

        div.appendChild(btnBuy);
        document.getElementsByClassName('bookShelf')[0].appendChild(div);
    }


    function isOldBook(year) {
        return year < 2000;
    }

    function isValidBookEntry(book, year, price) {
        return (book !== 'undefined' && book.length > 0)
            && (year !== 'undefined' && year > 0)
            && (price !== 'undefined' && price > 0);
    }

    function createElem(el) {
        return document.createElement(el);
    }
}