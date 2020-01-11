function StoreCatalogue(args) {
    let storeMap = new Map();

    for (let entry of args) {
        let splEntry = entry.split(" : ");
        storeMap.set(splEntry[0], Number(splEntry[1]));
    }

    let keys = Array.from(storeMap.keys()).sort();
    let char = keys[0][0];
    console.log(char);

    for (const key of keys) {

        if (key[0] !== char) {
            char = key[0];
            console.log(char);
        }
        console.log(`  ${key}: ${Number(storeMap.get(key))}`);
    }
}

StoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
StoreCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);