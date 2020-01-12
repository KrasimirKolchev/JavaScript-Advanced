let expect = require('chai').expect;
let PizzUni = require("../PizzUni.js").PizzUni;

describe('PizzUni tests', function () {
    const DEFAULT_PRODUCTS = {
        pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
        drinks: ['Coca-Cola', 'Fanta', 'Water']
    };

    describe('constructor', function () {
        it('should have default values', function () {
            let pizza = new PizzUni;
            expect(pizza.registeredUsers).to.have.deep.equal([]);
            expect(pizza.registeredUsers).to.have.lengthOf(0);
            expect(pizza.availableProducts).to.have.deep.equal(DEFAULT_PRODUCTS);
            expect(pizza.orders).to.have.deep.equal([]);
            expect(pizza.orders).to.have.lengthOf(0);
        });
    });
    
    describe('registeredUser tests', function () {
        it('should throw if the user is registered', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            expect(() => pizza.registerUser('table@table.table'))
                .to.throw(Error, "This email address (table@table.table) is already being used!");
        });
        it('should return the user', function () {
            let pizza = new PizzUni();
            let user = pizza.registerUser('table@table.table');
            expect(typeof user).to.be.equal('object');
            expect(user.email).to.be.equal('table@table.table');
            expect(user.orderHistory).to.have.deep.equal([]);
            expect(user.orderHistory).to.have.lengthOf(0);
        });
        it('should increase registeredUsers', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            expect(pizza.registeredUsers).to.have.lengthOf(1);
        });
    });

    describe('makeAnOrder(email, orderedPizza, orderedDrink) tests', function () {
        it('should throw if some param is incorrect', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            expect(() => pizza.makeAnOrder('absd@table.table', 'Italian Style', 'Fanta'))
                .to.throw(Error, "You must be registered to make orders!");
            expect(() => pizza.makeAnOrder('table@table.table', 'Skara', 'Fanta'))
                .to.throw(Error, "You must order at least 1 Pizza to finish the order.");
        });
        it('should add obj to the ordered history of the user with drink', function () {
            let pizza = new PizzUni();
            let user = pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            expect(user.orderHistory.length).to.be.equal(1);
            expect(user.orderHistory[0]).to.have.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta'});
        });
        it('should not add drink if not in the list', function () {
            let pizza = new PizzUni();
            let user = pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Nafta');
            expect(user.orderHistory.length).to.be.equal(1);
            expect(user.orderHistory[0]).to.have.deep.equal({orderedPizza: 'Italian Style'});
        });
        it('should add obj to the ordered history of the user without drink', function () {
            let pizza = new PizzUni();
            let user = pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style');
            expect(user.orderHistory.length).to.be.equal(1);
            expect(user.orderHistory[0]).to.have.deep.equal({orderedPizza: 'Italian Style'});
        });
        it('should add obj to the ordered history with drink, mail, status', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            expect(pizza.orders.length).to.be.equal(1);
            expect(pizza.orders[0]).to.have.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta', email: 'table@table.table', status: 'pending'});
        });
        it('should add obj to the ordered history without drink, mail, status', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style');
            expect(pizza.orders.length).to.be.equal(1);
            expect(pizza.orders[0]).to.have.deep.equal({orderedPizza: 'Italian Style', email: 'table@table.table', status: 'pending'});
        });
        it('should return the current index in the orders', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            let index1 = pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            let index2 = pizza.makeAnOrder('table@table.table', 'Italian Style', 'Water');
            expect(index1).to.be.equal(0);
            expect(index2).to.be.equal(1);
        });
    });

    describe('completeOrder() test', function () {
        it('should change the status of the order', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            pizza.completeOrder();
            expect(pizza.orders[0]).to.have.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta', email: 'table@table.table', status: 'completed'});
        });
        it('should change the status of the first order', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            pizza.makeAnOrder('table@table.table', 'Italian Style');
            pizza.completeOrder();
            expect(pizza.orders[0]).to.have.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta', email: 'table@table.table', status: 'completed'});
        });
        it('should return the index of the order', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            let index = pizza.completeOrder();
            expect(index).to.have.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta', email: 'table@table.table', status: 'completed'});
        });
    });
    
    describe('detailsAboutMyOrder(id)', function () {
        it('should return pending status', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            let status = pizza.detailsAboutMyOrder(0);
            expect(status).to.be.equal(`Status of your order: pending`);
        });
        it('should return completed status', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            pizza.makeAnOrder('table@table.table', 'Italian Style', 'Fanta');
            pizza.completeOrder();
            let status = pizza.detailsAboutMyOrder(0);
            expect(status).to.be.equal(`Status of your order: completed`);
        });
    });
    describe('doesTheUserExist', function () {
        it('should return object with the user', function () {
            let pizza = new PizzUni();
            pizza.registerUser('table@table.table');
            let user = pizza.doesTheUserExist('table@table.table');
            expect(user).to.have.deep.equal({email: 'table@table.table', orderHistory: []});
        });
    });
});
