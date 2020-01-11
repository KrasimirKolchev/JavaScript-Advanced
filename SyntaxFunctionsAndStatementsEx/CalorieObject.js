function CalorieObject(args) {
    let obj = {};

    for (let i = 0; i < args.length; i+=2) {
        let name = args[i];
        let val = Number(args[i + 1]);
        obj[name] = val;
    }

    console.log(obj);
}

CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);