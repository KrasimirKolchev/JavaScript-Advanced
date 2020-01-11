function HeroicInventory(args) {
    let myJSON = [];

    for (let entry of args) {
        let tokens = entry.split(" / ");
        let hero = {
            name : tokens[0],
            level : Number(tokens[1]),
            items : []
        };

        if (tokens.length > 2) {
            hero["items"] = tokens[2].split(", ");
        }

        myJSON.push(hero);
    }

    console.log(JSON.stringify(myJSON));
}

HeroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);