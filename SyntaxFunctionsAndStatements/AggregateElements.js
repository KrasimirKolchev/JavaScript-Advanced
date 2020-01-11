function AggregateElements(arg) {
    let a = 0;
    let b = 0;
    let c = '';

    for (let i = 0; i < arg.length; i++) {
        a += arg[i];
        b += 1 / arg[i];
        c += arg[i];
    }

    console.log(`${a}\n${b}\n${c}`);
}

AggregateElements([2,4,8,16]);