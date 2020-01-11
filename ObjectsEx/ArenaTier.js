function ArenaTier(args) {
    let tier = new Map();

    for (let line of args) {
        if (line === "Ave Cesar") {
            printOutput(tier);
            break;
        }

        if (line.includes(" vs ")) {
            battle(tier, line.split(" vs ")[0], line.split(" vs ")[1]);
            continue;
        }

        processInput(tier, line);
    }

    function processInput(tier, line) {
        let input = line.split(" -> ");

        if (!tier.has(input[0])) {
            tier.set(input[0], new Map());
        }

        if (!tier.get(input[0]).has(input[1])) {
            tier.get(input[0]).set(input[1], 0);
        }

        if (tier.get(input[0]).get(input[1]) <= Number(input[2])) {
            tier.get(input[0]).set(input[1], Number(input[2]));
        }
    }

    function battle(tier, gladiator1, gladiator2) {

        if (tier.has(gladiator1) && tier.has(gladiator2)) {

            let gl1 = tier.get(gladiator1);
            let gl2 = tier.get(gladiator2);

            for (let gl1Tech of Array.from(gl1.keys())) {
                for (let gl2Tech of Array.from(gl2.keys())) {
                    if (gl1Tech === gl2Tech) {
                        let skill1 = gl1.get(gl1Tech);
                        let skill2 = gl2.get(gl2Tech);
                        if (skill1 > skill2) {
                            tier.delete(gladiator2);
                        } else if (skill1 < skill2) {
                            tier.delete(gladiator1);
                        }
                    }
                }
            }
        }
    }

    function sortByValuesSumDesc(a, b) {
        let aSum = 0;

        for (let val of tier.get(a).values()) {
            aSum += val;
        }

        let bSum = 0;

        for (let val of tier.get(b).values()) {
            bSum += val;
        }

        if (aSum < bSum) {
            return 1;
        }

        return -1;
    }

    function sortTechniques(tech, a, b) {
        let res = 0;

        if (tech.get(a) < tech.get(b)) {
            res = 1;
        } else if (tech.get(1) > tech.get(b)) {
            res = -1;
        }

        if (res === 0) {
            res = b.localeCompare(a);
        }

        return res;
    }

    function printOutput(tier) {
        let tierSorted = Array.from(tier.keys()).sort((a, b) => sortByValuesSumDesc(a, b));

        for (let pl of tierSorted) {
            let res = 0;
            for (const val of tier.get(pl).keys()) {
                res += tier.get(pl).get(val);
            }
            console.log(`${pl}: ${res} skill`);
            let techniques = tier.get(pl);
            let sorted = Array.from(techniques.keys()).sort((a, b) => sortTechniques(techniques, a, b));

            for (const key of sorted) {
                console.log(`- ${key} <!> ${techniques.get(key)}`);
            }
        }
    }
}

ArenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);

ArenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar',
    ]);