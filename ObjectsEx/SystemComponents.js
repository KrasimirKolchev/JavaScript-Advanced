function SystemComponents(args) {
    function sortSystems(a, b) {
        if(system.get(a).size !== system.get(b).size) {
            return system.get(b).size - system.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function sortComponents(sys, a1, b2) {
        return system.get(sys).get(b2).length - system.get(sys).get(a1).length;
    }

    let system = new Map();

    for (let line of args) {
        let elements = line.split(" | ");

        if (!system.has(elements[0])) {
            system.set(elements[0], new Map);
        }
        if (!system.get(elements[0]).has(elements[1])) {
            system.get(elements[0]).set(elements[1], []);
        }

        system.get(elements[0]).get(elements[1]).push(elements[2]);
    }

    let systemSorted = Array.from(system.keys()).sort((a, b) => sortSystems(a, b));

    for (let sys of systemSorted) {
        console.log(sys);

        let compSorted = Array.from(system.get(sys).keys()).sort((a1, b2) => sortComponents(sys, a1, b2));

        for (let comp of compSorted) {
            console.log(`|||${comp}`);
            system.get(sys).get(comp).forEach(e => console.log(`||||||${e}`));
        }
    }

    console.log();
}

SystemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);