function validate() {
    let inputField = document.getElementById('email');
    let emailRegex = /([a-z]+@[a-z]+\.[a-z]+)/;

    inputField.addEventListener('change', (event) => {

        if (inputField.value.match(emailRegex) && inputField.value.length >= 5) {
            event.target.classList = '';
        } else {
            event.target.classList = 'error';
        }
    });
}