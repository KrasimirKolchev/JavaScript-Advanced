function addItem1() {

    let textField = document.getElementById('newItemText');
    let items = document.getElementById('items');

    let li = document.createElement('li');
    if (textField.value.trim() === "") {
        return;
    }
    li.textContent = textField.value;
    items.appendChild(li);

    textField.value = ""
}
