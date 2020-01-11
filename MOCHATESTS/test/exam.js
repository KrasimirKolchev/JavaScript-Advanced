let expect = require('chai').expect;
let ChristmasMovies = require("../02. Christmas Movies_Resources.js").ChristmasMovies;

describe('tests', function () {
    it('should ', function () {
        let christmas = new ChristmasMovies;
        expect(() => christmas.actors.length).to.be.equal(0);
        expect(christmas.watched.length).to.be.equal(0);
        expect(christmas.movieCollection.length).to.be.equal(0);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies('asd');
        expect(christmas.actors).to.have.deep.equal([]);
        expect(christmas.watched).to.have.deep.equal([]);
        expect(christmas.movieCollection).to.have.deep.equal([]);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies('asd');
        christmas.buyMovie('asd', ['asd', 'asd']);
        expect(christmas.movieCollection.length).to.be.equal(1);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']))
            .to.throw(Error, `You already own Home Alone in your collection!`);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        expect(christmas.movieCollection).to.have.deep.equal({name: 'Home Alone', actors: ['Macaulay Culkin']});
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        expect(() => christmas.discardMovie('asd')).to.throw(Error, "asd is not at your collection!")
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        expect(() => christmas.watchMovie('asd')).to.throw(Error, 'No such movie in your collection!')
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        let msg = christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        expect(msg).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin are taking part!');
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        let msg = christmas.discardMovie('Home Alone');
        expect(msg).to.be.equal(`You just threw away Home Alone!`);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        christmas.watchMovie('Home Alone');
        expect(christmas.watched['Home Alone']).to.be.equal(1);
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        expect(() => christmas.favouriteMovie()).to.throw(Error, "You have not watched a movie yet this year!");
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        christmas.buyMovie('Home Alonae', ['Maacaulay Cualkin']);
        christmas.watchMovie('Home Alone');
        let msg = christmas.favouriteMovie();
        expect(msg).to.be.equal('Your favourite movie is Home Alone and you have watched it 1 times!');
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
        christmas.buyMovie('Home Alonae', ['Macaulay Culkin']);
        christmas.watchMovie('Home Alone');
        let msg = christmas.mostStarredActor();
        expect(msg).to.be.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!')
    });
    it('should ', function () {
        let christmas = new ChristmasMovies();
        expect(() => christmas.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
    });


});

//


//expect(() => pizza.makeAnOrder('table@table.table', 'Skara', 'Fanta')).to.throw(Error, "You must order at least 1 Pizza to finish the order.");
//describe('', function () {
//     it('should ', function () {
//
//     });
//
// });