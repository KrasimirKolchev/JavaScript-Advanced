function SumByTown(args) {
    let townSum = {};

    for (let i = 0; i < args.length; i+=2) {
        if (townSum.hasOwnProperty(args[i])) {
            townSum[args[i]] += Number(args[i + 1]);
        } else {
            townSum[args[i]] = Number(args[i + 1]);
        }
    }

    console.log(JSON.stringify(townSum));
}

SumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
SumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);