function TownsToJSON(args) {
    const filterEmptyStr = e => e.trim() !== " " && e !== "";
    const trimEmpty = e => e.trim();

    let params = args.shift().split("|").filter(filterEmptyStr).map(trimEmpty);
    let myJSON = [];

    for (let i = 0; i < args.length; i++) {
        let line = args[i].split("|").filter(filterEmptyStr).map(trimEmpty);
        let myObj = {};
        myObj[params[0]] = line[0];
        myObj[params[1]] = Math.floor(line[1] * 100) / 100;
        myObj[params[2]] = Math.floor(line[2] * 100) / 100;
        myJSON.push(myObj);
    }

    console.log(JSON.stringify(myJSON));
}

TownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

TownsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);

