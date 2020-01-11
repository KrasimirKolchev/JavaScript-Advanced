function playingCards (f, s){
    let cards = {
        suits: {
            'S' : '\u2660',
            'H' : '\u2665',
            'D' : '\u2666',
            'C' : '\u2663'
        },
        faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    };
    class Card {
        constructor (face, suit) {
            this.setFace(face);
            this.setSuit(suit);
        }

        setFace(value) {
            if (cards.faces.includes(value) === false) {
                throw new Error();
            }
            this.face = value;
        }

        setSuit(value) {
            if (!cards.suits[value]) {
                throw new Error();
            }
            this.suit = cards.suits[value];
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    let card = new Card(f, s);
    return card.toString();
}

playingCards('J', 'D');