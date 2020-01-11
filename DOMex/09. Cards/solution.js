function solve() {
    let cards = Array.from(document.getElementsByTagName('img'));
    let div = Array.from(document.getElementsByTagName('div'));

    let result = document.getElementById('result');
    let history = div[3];
    let pl1 = "";
    let pl2 = "";

    cards.forEach(c => c.addEventListener('click', (c) => {
        let card = c.target;
        card.src = 'images/whiteCard.jpg';

        if (card.parentNode.id === 'player1Div') {
            pl1 = card;
            result.children[0].textContent = card.outerHTML.match(/[0-9]+/g);
        } else if (card.parentNode.id === 'player2Div') {
            pl2 = card;
            result.children[2].textContent = card.outerHTML.match(/[0-9]+/g);
        }

        if (result.children[0].textContent !== "" && result.children[2].textContent !== "") {

            let firstCard = result.children[0].textContent;
            let secondCard = result.children[2].textContent;

            if (Number(firstCard) > Number(secondCard)) {
                pl1.style.border = '2px solid green';
                pl2.style.border = '2px solid red';
            } else if (Number(firstCard) < Number(secondCard)) {
                pl1.style.border = '2px solid red';
                pl2.style.border = '2px solid green';
            }

            history.textContent += `[${firstCard} vs ${secondCard}] `;

            result.children[0].textContent = "";
            result.children[2].textContent = "";
        }
    }));
}
