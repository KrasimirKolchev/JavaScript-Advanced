function AutoEngineeringCompany(args) {
    let carsMap = new Map();

    for (let entry of args) {
        let splEntry = entry.split(" | ");

        if (!carsMap.has(splEntry[0])) {
            carsMap.set(splEntry[0], new Map())
        }

        if (!carsMap.get(splEntry[0]).has(splEntry[1])) {
            carsMap.get(splEntry[0]).set(splEntry[1], 0);
        }

        carsMap.get(splEntry[0]).set(splEntry[1], carsMap.get(splEntry[0]).get(splEntry[1]) + Number(splEntry[2]));
    }

    for (const [make, values] of carsMap) {
        console.log(make);
        for (const [key, value] of values) {
            console.log(`###${key} -> ${value}`);
        }
    }
}

AutoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);