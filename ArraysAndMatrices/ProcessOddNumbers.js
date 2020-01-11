function ProcessOddNumbers(args) {
    let res = [];

    for (let i = 0; i < args.length; i++) {
        if (i % 2 !== 0) {
            res.push(args[i] * 2);
        }
    }
    console.log(res.reverse().join(" "));
}

ProcessOddNumbers([10, 15, 20, 25]);
ProcessOddNumbers([3, 0, 10, 4, 7, 3]);