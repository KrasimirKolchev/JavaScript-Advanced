function GameOfEpicness(input, fights) {

    let kingdoms = new Map();

    processInput(input, kingdoms);

    processFights(fights, kingdoms);

    printWinningKingdom(kingdoms);


    function processInput(input, kingdoms) {
        for (const line of input) {
            let obj = {};

            obj.army = line.army;
            obj.wins = 0;
            obj.losses = 0;

            if (!kingdoms.has(line.kingdom)) {
                kingdoms.set(line.kingdom, new Map());
            }

            if (kingdoms.get(line.kingdom).has(line.general)) {
                let old = kingdoms.get(line.kingdom).get(line.general);
                obj.army += old.army;
            }
            kingdoms.get(line.kingdom).set(line.general, obj);
        }
    }

    function processFights(fights, kingdoms) {
        for (const line of fights) {
            if (kingdoms.has(line[0]) && kingdoms.has(line[2]) && line[0] !== line[2]) {
                if (kingdoms.get(line[0]).has(line[1]) && kingdoms.get(line[2]).has(line[3])) {
                    let attacker = kingdoms.get(line[0]).get(line[1]);
                    let defender = kingdoms.get(line[2]).get(line[3]);

                    if (attacker.army > defender.army) {
                        attacker.army += Math.floor(attacker.army * 0.1);
                        attacker.wins++;
                        defender.army -= Math.floor(defender.army * 0.1);
                        defender.losses++;
                    } else if (attacker.army < defender.army) {
                        attacker.army -= Math.floor(attacker.army * 0.1);
                        attacker.losses++;
                        defender.army += Math.floor(defender.army * 0.1);
                        defender.wins++;
                    }
                }
            }
        }
    }

    function printWinningKingdom(kingdoms) {
        let sortedKingdoms = Array.from(kingdoms.keys()).sort((a, b) => sort1(b, a));
        console.log();
    }

    function sort1(a, b) {
        let res = 0;
        let res2 = 0;

        for (const kingdom of kingdoms.get(a)) {
            for (const general of kingdom) {
                let res1 = kingdoms.get(a).get(general).wins;

                console.log();
            }
        }

        for (const bb of kingdoms.get(b)) {
            for (const bbb of bb) {
                res2 += bbb.wins;
            }
        }

        if (res1 > res2) {
            return 1;
        } else if (res1 < res2) {
            return -1;
        }

        if (res === 0) {
            let res11 = 0;
            let res22 = 0;
            for (const aa1 of kingdoms.get(a)) {
                for (const aaa1 of aa1) {
                    res11 += aaa1.losses;
                }
            }

            for (const bb2 of kingdoms.get(b)) {
                for (const bbb2 of bb2) {
                    res22 += bbb2.losses;
                }
            }

            if (res11 > res22) {
                return 1;
            } else if (res11 < res22) {
                return -1;
            }

            if (res === 0) {
                res = a.localeCompare(b);
            }
        }
        return res;
    }

    console.log();
}

//GameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
 //       ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
//);

GameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 1 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);