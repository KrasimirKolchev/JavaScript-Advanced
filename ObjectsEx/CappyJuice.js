function CappyJuice(args) {
    let readyBottles = new Set();
    let juices = new Map();

    for (const entry of args) {
        let splEntry = entry.split(" => ");

        if (juices.hasOwnProperty(splEntry[0])) {
            juices[splEntry[0]] += Number(splEntry[1]);
        } else {
            juices[splEntry[0]] = Number(splEntry[1]);
        }

        if (juices[splEntry[0]] >= 1000 && !readyBottles.has(splEntry[0])) {
            readyBottles.add(splEntry[0]);
        }
    }

    for (const juice of readyBottles) {
        console.log(`${juice} => ${Number.parseInt((juices[juice] / 1000))}`);
    }

}

CappyJuice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
CappyJuice(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);