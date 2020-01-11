function addItem() {
    let textField = document.getElementById('newText');
    let items = document.getElementById('items');

    if (textField.value.trim() === "") {
        return;
    }

    let li = createElementLi('li', textField.value);
    textField.value = "";
    addDeleteLink(li);


    function addDeleteLink(elem) {
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        appendChildren(a, document.createTextNode('[Delete]'));
        a.addEventListener('click', deleteItem);
        appendChildren(elem, a);
        appendChildren(items, elem);
    }

    function createElementLi(type, content) {
        let createdType = document.createElement(type);
        createdType.textContent = content + ' ';

        return createdType;
    }

    function appendChildren(parent, child) {
        parent.appendChild(child);
    }

    function deleteItem() {
        this.parentNode.remove();
    }
}