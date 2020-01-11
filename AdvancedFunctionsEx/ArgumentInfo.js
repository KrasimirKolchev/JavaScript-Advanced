function ArgumentInfo(...args) {
    let argInfo = {};

    for (const arg of args) {
        console.log(`${typeof arg}: ${arg}`);

        if (!argInfo.hasOwnProperty(typeof arg)) {
            argInfo[typeof arg] = 0;
        }
        argInfo[typeof arg]++;
    }

    Object.entries(argInfo).sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`))
}

ArgumentInfo('cat', 42, function () { console.log('Hello world!'); });
ArgumentInfo('cat', 42, function () { console.log('Hello world!'); }
                , 'cat', '42', function () { console.log('Hello world!'); });