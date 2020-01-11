function CityMarkets(args) {
    let cityMap = new Map();

    processInput(cityMap, args);

    print(cityMap);

    function processInput(cityMap, args) {
        for (let entry of args) {
            let tokens = entry.split(" -> ");

            if (cityMap.has(tokens[0])) {
                let obj = cityMap.get(tokens[0]);
                if (obj.hasOwnProperty(tokens[1])) {
                    obj[tokens[1]] += Number(calculate(tokens[2]));
                } else {
                    obj[tokens[1]] = Number(calculate(tokens[2]));
                }
            } else {
                let objCity = {};

                objCity[tokens[1]] = Number(calculate(tokens[2]));

                cityMap.set(tokens[0], objCity);
            }
        }
    }

    function print(map) {
        for (const [key, value] of map.entries()) {
            console.log(`Town - ${key}`);
            for (const [k, v] of Object.entries(value)) {
                console.log(`$$$${k} : ${v}`);
            }
        }
    }

    function calculate(tokens) {
        let nums = tokens.split(" : ");
        return Number(nums[0]) * Number(nums[1]);
    }
}

CityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);