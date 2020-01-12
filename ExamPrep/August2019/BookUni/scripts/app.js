function solve() {
    document.querySelector('form button').addEventListener('click', addBook);
    let total = 0;

    function addBook(ev) {
        ev.preventDefault();
        let book = document.querySelector('form label[for="book"]').nextElementSibling.value;
        let year = document.querySelector('form label[for="year"]').nextElementSibling.value;
        let price = document.querySelector('form label[for="price"]').nextElementSibling.value;

        if (book.trim() !== "" && Number(year) && Number(year) > 0 && Number(price) && Number(price) > 0) {
            if (Number(year) < 2000) {
                addOldBook(book, year, Number(price));
            } else {
                addNewBook(book, year, Number(price));
            }
        }

        document.querySelector('form label[for="book"]').nextElementSibling.value = "";
        document.querySelector('form label[for="year"]').nextElementSibling.value = "";
        document.querySelector('form label[for="price"]').nextElementSibling.value = "";
    }

    function addNewBook(book, year, price) {
        let div = creator('div');
        div.classList = "book";
        let p = creator('p');
        p.textContent = `${book} [${year}]`;
        div.appendChild(p);

        let buyBtn = creator('button');
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
        buyBtn.addEventListener('click', function () {
            total += price;
            Array.from(document.querySelectorAll('h1'))[1].textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
            document.getElementsByClassName('bookShelf')[1].removeChild(div);
        });
        div.appendChild(buyBtn);

        let moveBtn = creator('button');
        moveBtn.textContent = "Move to old section";
        moveBtn.addEventListener('click', function () {
            addOldBook(book, year, price);
            document.getElementsByClassName('bookShelf')[1].removeChild(div);
        });
        div.appendChild(moveBtn);

        document.getElementsByClassName('bookShelf')[1].appendChild(div);
    }

    function addOldBook(book, year, price) {
        price = price - (price * 0.15);
        let div = creator('div');
        div.classList = "book";
        let p = creator('p');
        p.textContent = `${book} [${year}]`;
        div.appendChild(p);

        let buyBtn = creator('button');
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
        buyBtn.addEventListener('click', function () {
            total += price;
            Array.from(document.querySelectorAll('h1'))[1].textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
            document.getElementsByClassName('bookShelf')[0].removeChild(div);
        });
        div.appendChild(buyBtn);
        document.getElementsByClassName('bookShelf')[0].appendChild(div);
    }

    function creator(el) {
        return document.createElement(el);
    }
}
