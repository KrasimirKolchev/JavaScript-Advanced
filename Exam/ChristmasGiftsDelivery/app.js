function solution() {

    let listArr = [];

    document.getElementsByTagName('section')[0].querySelector('button')
        .addEventListener('click', addGift);

    function addGift(e) {
        e.preventDefault();
        let text = Array.from(document.getElementsByTagName('section'))[0].querySelector('input').value;

        if (text.trim() !== "") {
            let li = creator('li', text);
            li.classList = 'gift';
            let btnSend = creator('button', 'Send');
            btnSend.setAttribute('id', 'sendButton');
            btnSend.addEventListener('click', sendGift);
            li.appendChild(btnSend);

            let btnDiscard = creator('button', 'Discard');
            btnDiscard.setAttribute('id', 'discardButton');
            btnDiscard.addEventListener('click', discardGift);
            li.appendChild(btnDiscard);

            listArr.push(li);
            listArr = Array.from(listArr.sort((a, b) => a.textContent.localeCompare(b.textContent)));
            listArr.forEach(li => Array.from(document.getElementsByTagName('section'))[1].querySelector('ul').appendChild(li));

            Array.from(document.getElementsByTagName('section'))[0].querySelector('input').value = "";
        }
    }

    function sendGift(e) {
        let text = e.target.previousSibling.textContent;
        e.target.parentNode.remove();
        let index = listArr.findIndex(el => el.textContent === text);
        listArr.splice(index, 1);
        let li = creator('li', text);
        li.classList = 'gift';
        Array.from(document.getElementsByTagName('section'))[2].querySelector('ul').appendChild(li);
    }

    function discardGift(e) {
        let text = e.target.previousSibling.previousSibling.textContent;
        e.target.parentNode.remove();
        let index = listArr.findIndex(el => el.textContent === text);
        listArr.splice(index, 1);
        let li = creator('li', text);
        li.classList = 'gift';
        Array.from(document.getElementsByTagName('section'))[3].querySelector('ul').appendChild(li);
    }

    function creator(el, text) {
        const node = document.createElement(el);
        if (text) {
            node.textContent = text;
        }
        return node;
    }
}