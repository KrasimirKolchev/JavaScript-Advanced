function deleteByEmail() {
    let inputFieldStr = Array.from(document.getElementsByTagName('input'))[0].value;
    let result = document.getElementById('result');

    let emails = document.querySelectorAll('#customers tr td:nth-child(2)');
    let isRemoved = false;

    for (let cell of emails) {
        let email = cell.textContent;

        if (email === inputFieldStr) {
            cell.parentNode.remove();
            isRemoved = true;
        }
    }

    if (isRemoved) {
        result.textContent = "Deleted.";
        return;
    }
    result.textContent = "Not found.";
}