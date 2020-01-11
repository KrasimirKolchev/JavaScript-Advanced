function WordsUppercase(arg) {
    let text = arg.match(/\w+/g);
    let newText = [];

    for (let i = 0; i < text.length; i++) {
        newText.push(text[i].toUpperCase());
    }

    console.log(newText.join(', '))//
}


function WordsUppercase1(arg) {
    let text = arg.toUpperCase().match(/\w+/g);

    console.log(text.join(', '))//
}

WordsUppercase('Hi, how are you?');
WordsUppercase1('Hi, how are you?');
