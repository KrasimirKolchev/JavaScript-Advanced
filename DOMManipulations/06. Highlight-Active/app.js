function focus() {
    let divArr = Array.from(document.getElementsByTagName('input'));

    divArr.map(e => e.addEventListener('focus', focusOn));
    divArr.map(e => e.addEventListener('blur', focusOff));

    function focusOn() {
        this.parentNode.classList.add('focused');
    }

    function focusOff() {
        this.parentNode.classList.remove('focused');
    }
}