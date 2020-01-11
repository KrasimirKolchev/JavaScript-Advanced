function CommandProcessor(args) {
    let output = '';

    let commands = {
        append: (val) => output += val,
        removeStart: (val) => output = output.slice(val),
        removeEnd: (val) => output = output.slice(0, output.length - val),
        print: () => console.log(output)
    };

    for (const line of args) {
        let lineSplit = line.split(' ');
        let command = lineSplit[0];

        if (lineSplit.length > 1) {
            commands[command] (lineSplit[1]);
        } else {
            commands[command] ();
        }
    }
}

CommandProcessor([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);

CommandProcessor([
    'append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'
]);