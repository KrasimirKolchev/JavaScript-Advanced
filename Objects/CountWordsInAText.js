function CountWordsInAText(args) {
    let obj = {};
    let line = args[0];
    let textArr = line.match(/\w+/g);

    for (let word of textArr) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        } else {
            obj[word] = 1;
        }
    }

    console.log(JSON.stringify(obj));
}

CountWordsInAText(["Far too slow, you're far too slow."]);
CountWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']);