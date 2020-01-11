function solution () {

     const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

     let store = {
         protein: 0,
         carbohydrate: 0,
         fat: 0,
         flavour: 0
     };

     let commands = {
         restock: restockIngr,
         prepare: prepareFood,
         report: report
     };

     function prepareFood(repo, meal, qty) {
         let recipe = recipes[meal];
         for (const ingr in recipe) {
             if (repo[ingr] < recipe[ingr] * qty) {
                 return `Error: not enough ${ingr} in stock`;
             }
         }
         return removeIngr(repo, meal, qty);
     }

     function removeIngr(repo, meal, qty) {
         let recipe = recipes[meal];
         for (const ingr in recipe) {
             repo[ingr] -= recipe[ingr] * qty;
         }
         return 'Success';
     }

     function restockIngr(store, ingr, qty) {
         store[ingr] += qty;
         return "Success";
     }

     function report(store) {
         return `protein=${store['protein']} carbohydrate=${store['carbohydrate']}` +
             ` fat=${store['fat']} flavour=${store['flavour']}`;
     }

     let manage = function (input) {
         let tokens = input.split(' ');
         let command = tokens[0];
         let item = tokens[1];
         let quantity = Number(tokens[2]);

         return commands[command](store, item, quantity);
     };
     return manage;
}

let expectationPairs = [
    'restock protein 100',
    'restock carbohydrate 100',
    'restock fat 100',
    'restock flavour 100',
    'report',
    'prepare burger 2',
    'report',
    'prepare burger 1',
    'report',
];
let manager = solution();
for (const command of expectationPairs) {
    console.log(manager(command));
}