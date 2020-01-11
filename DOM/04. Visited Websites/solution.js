function solve() {
    document.querySelectorAll('a').forEach(e => e.addEventListener("click"));

    function f(element) {
        let par = element.target.nextElementSibling.innerHTML.split(' ');
        let num = par[1]++;
        element.target.nextElementSibling.innerHTML
    }
}