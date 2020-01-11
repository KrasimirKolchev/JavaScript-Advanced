class Kitchen {
    constructor (budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts (products) {
        let actions = [];
        for (const product of products) {
            let info = product.split(' ');
            if (this.budget - Number(info[2]) >= 0) {
                this.budget = this.budget - Number(info[2]);
                if (!this.productsInStock.hasOwnProperty(info[0])) {
                    this.productsInStock[info[0]] = 0;
                }
                this.productsInStock[info[0]] += Number(info[1]);
                actions.push(`Successfully loaded ${info[1]} ${info[0]}`);
            } else {
                actions.push(`There was not enough money to load ${info[1]} ${info[0]}`);
            }
        }
        this.actionsHistory = [...this.actionsHistory, ...actions];
        return this.actionsHistory.join('\n');
    }

    addToMenu (meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            let mealObj = {
                price: Number(price),
                products: {}
            };

            for (const product of neededProducts) {
                let info = product.split(' ');
                mealObj.products[info[0]] = Number(info[1]);
            }

            this.menu[meal] = mealObj;
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu () {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let res = [];

            for (const key of Object.keys(this.menu)) {
                res.push(`${key} - $ ${this.menu[key].price}`);
            }

            return res.join('\n').trim() + '\n';
        }
    }

    makeTheOrder (meal) {

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let products = this.menu[meal].products;

            if (checkForProducts(products, this.productsInStock) === false) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                removeProducts(products, this.productsInStock);
                this.budget += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }

        function removeProducts(products, store) {
            for (const [key, value] of Object.entries(products)) {
                store[key] -= value;
            }
        }

        function checkForProducts(products, store) {
            for (const [key, value] of Object.entries(products)) {
                if (!store.hasOwnProperty(key)) {
                    return false;
                }
                if ((store[key] - value) < 0) {
                    return false;
                }
            }
            return true;
        }
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
