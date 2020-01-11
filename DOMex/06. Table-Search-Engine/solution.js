function solve() {

    let searchFieldStr = document.getElementById('searchField');
    let lines = Array.from(document.querySelector('table tbody').children);
    let selectedLines = document.getElementsByClassName('select');

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchForResults);

    function searchForResults() {
        Array.from(selectedLines).forEach(l => l.classList.remove('select'));

        for (const line of lines) {
            const cells = Array.from(line.children);

            for (const cell of cells) {
                let containWord = cell.textContent.toLowerCase().includes(searchFieldStr.value.toLowerCase());

                if (containWord) {
                    line.classList.add('select');
                }
            }
        }
        searchFieldStr.value = "";
    }
}