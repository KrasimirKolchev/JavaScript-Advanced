let expect = require('chai').expect;
let BookStore = require("../BookStore.js").BookStore;

describe('BookStore tests', function () {
    const BOOKS_ARRAY = ['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'];
    const OUTPUT = 'Name:George Position:seller BooksSold:1\nName:Ivan Position:seller BooksSold:0';
    
    describe('constructor', function () {
        it('should be initialized with name and default properties empty arrays', function () {
            let store = new BookStore('book');
            let name = store.name;
            let books = store.books;
            let workers = store.workers;
            expect(name).to.be.equal('book');
            expect(typeof books).to.be.equal('object');
            expect(books.length).to.be.equal(0);
            expect(workers.length).to.be.equal(0);
            expect(typeof workers).to.be.equal('object');
        });
    });
    
    describe('stockBooks(newBooks)', function () {
        it('should add books and authors in the books array', function () {
            let store = new BookStore('store');
            store.stockBooks(BOOKS_ARRAY);
            expect(store.books.length).to.be.equal(4);
            expect(store.books[1].title).to.be.equal('Harry Potter');
            expect(store.books[1].author).to.be.equal('J.Rowling');
        });
    });

    describe('hire(name, position)', function () {
        it('should add worker to the workers array', function () {
            let store = new BookStore('store');
            store.hire('George', 'seller');
            expect(store.workers.length).to.be.equal(1);
            expect(store.workers[0].name).to.be.equal('George');
            expect(store.workers[0].position).to.be.equal('seller');
            expect(store.workers[0].booksSold).to.be.equal(0);
        });
        it('should throw if worker exists', function () {
            let store = new BookStore('store');
            store.hire('George', 'seller');
            expect(() => store.hire('George', 'JuniorSeller')).to.throw(Error, 'This person is our employee');
        });
        it('should return message', function () {
            let store = new BookStore('store');
            let msg = store.hire('George', 'seller');
            expect(msg).to.be.equal('George started work at store as seller');
        });
    });
    
    describe('fire', function () {
        it('should throw if name doesnt exist', function () {
            let store = new BookStore('store');
            store.hire('George', 'seller');
            expect(() => store.fire('Ivan')).to.throw(Error, "Ivan doesn't work here");
        });
        it('should return message', function () {
            let store = new BookStore('store');
            store.hire('George', 'seller');
            let msg = store.fire('George');
            expect(msg).to.be.equal('George is fired');
        });
        it('should remove workers', function () {
            let store = new BookStore('store');
            store.hire('George', 'seller');
            store.hire('Ivan', 'seller');
            store.fire('George');
            expect(store.workers.length).to.be.equal(1);
            expect(store.workers[0].name).to.be.equal('Ivan');
        });
    });
    
    describe('sellBook(title, workerName)', function () {
        it('should throw if title doesnt exist', function () {
            let store = new BookStore('store');
            store.stockBooks(BOOKS_ARRAY);
            store.hire('George', 'seller');
            expect(() => store.sellBook('Title', 'George')).to.throw(Error, "This book is out of stock");
        });
        it('should throw if worker doesnt exist', function () {
            let store = new BookStore('store');
            store.stockBooks(BOOKS_ARRAY);
            store.hire('George', 'seller');
            expect(() => store.sellBook('Inferno', 'Ivan')).to.throw(Error, "Ivan is not working here");
        });
        it('should increase worker sold counter', function () {
            let store = new BookStore('store');
            store.stockBooks(BOOKS_ARRAY);
            store.hire('George', 'seller');
            store.sellBook('Inferno', 'George');
            expect(store.workers[0].booksSold).to.be.equal(1);
        });
    });

    describe('printWorkers()', function () {
        it('should print the workers', function () {
            let store = new BookStore('store');
            store.stockBooks(BOOKS_ARRAY);
            store.hire('George', 'seller');
            store.hire('Ivan', 'seller');
            store.sellBook('Inferno', 'George');
            expect(store.printWorkers()).to.be.equal(OUTPUT);
        });
    });
});
