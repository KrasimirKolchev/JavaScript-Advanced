(function(){
    let cards = {
        suits: {
            SPADES: '♠',
            HEARTS: '♥',
            DIAMONDS: '♦',
            CLUBS: '♣'
        },
        faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
};
    class Card {
        constructor (face, suit) {
            this.face = face;
            this.suit = suit;
        }


        get face() {
            return this._face;
        }

        set face(value) {
            if (cards.faces.includes(value) === false) {
                throw new Error('');
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (Object.values(cards.suits).indexOf(value) === -1) {
                throw new Error('');
            }
            this._suit = value;
        }
    }

    return {
        Suits: cards.suits,
        Card: Card
    }
}());
