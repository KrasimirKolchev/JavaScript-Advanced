function PopulationInTowns(args) {
    let objPopulation = {};

    for (let i = 0; i < args.length; i++) {
        let elements = args[i].split(" <-> ");
        if (objPopulation.hasOwnProperty(elements[0])) {
            objPopulation[elements[0]] += Number(elements[1]);
        } else {
            objPopulation[elements[0]] = Number(elements[1]);
        }
    }

    for (let [key, value] of Object.entries(objPopulation)) {
        console.log(`${key} : ${value}`);
    }
}

PopulationInTowns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000',
    'Washington <-> 2345000', 'Las Vegas <-> 1000000']);

PopulationInTowns(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925', 'Istanbul <-> 1000']);