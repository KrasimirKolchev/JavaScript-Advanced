function addItem() {

    createOptionInMenu(document.getElementById('newItemText').value
        , document.getElementById('newItemValue').value
        , document.getElementById('menu'));

    function createOptionInMenu(text, value, menu) {

        if (text !== "" && value !== "") {
            let option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            menu.appendChild(option);
            document.getElementById('newItemText').value = "";
            document.getElementById('newItemValue').value = "";
        }
    }
}