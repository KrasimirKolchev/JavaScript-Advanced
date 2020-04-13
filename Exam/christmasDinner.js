class ChristmasDinner {
    constructor (budget) {
        this.setBudget(budget);
        this.dishes = [];
        this.products = [];
        this.guests = new Map();
    }

    setBudget(bud) {
        let budget = Number(bud);
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = budget;
    }

    shopping(product) {
        let type = product[0];
        let price = Number(product[1]);

        if (this.budget - price < 0) {
            throw new Error("Not enough money to buy this product");
        }
        this.setBudget(this.budget -= price);
        this.products.push(type);
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;

        for (const prod of productsList) {
            if (!this.products.find(p => p === prod)) {
                throw new Error("We don not have this product");
            }
        }
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(guestName, dish) {
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish");
        }
        if (this.guests.has(guestName)) {
            throw new Error("This guest has already been invited");
        }
        this.guests.set(guestName, dish);
        return `You have successfully invited ${guestName}!`;
    }

    showAttendance() {
        let output = "";

        for (const e of this.guests.entries()) {
            output += `${e[0]} will eat ${e[1]}, which consists of `;
            const dish = this.dishes.find(d => d.recipeName === e[1]);
            output += dish.productsList.join(', ');
            output += '\n';
        }
        return output.trim();
    }
}



let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

