function CoffeeMachine(args) {
    let totalMoney = 0;

    while (args.length > 0) {
        let order = args.shift().split(", ");

        let money = Number(order.shift());
        let drink = order.shift();
        let sugar = Number(order.pop());

        if (drink === "coffee") {
            drink += " " + order.shift();
        }

        let price = 0;

        switch (drink) {
            case "coffee caffeine" :
                price += 0.8;
                break;
            case "coffee decaf" :
                price += 0.9;
                break;
            case "tea" :
                price += 0.8;
                break;
        }

        if (order.length > 0) {
            let milk = price * 0.1;
            price += +milk.toFixed(1);
        }

        if (sugar > 0) {
            price += 0.1;
        }

        let change = money - price;

        if (drink !== "tea") {
            drink = "coffee";
        }

        if (change >= 0) {
            totalMoney += price;
            console.log(`You ordered ${drink}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
        } else {
            console.log(`Not enough money for ${drink}. Need $${(Math.abs(change)).toFixed(2)} more.`);
        }

    }

    console.log(`Income Report: $${totalMoney.toFixed(2)}`);
}

CoffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);