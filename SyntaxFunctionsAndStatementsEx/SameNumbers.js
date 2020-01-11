function SameNumbers(num) {
    let sum = 0;
    let isSame = true;
    let numTxt = num.toString();

    for (let i = 0; i < numTxt.length; i++) {
        sum += Number(numTxt.charAt(i));
        if (Number(numTxt.charAt(0) !== numTxt.charAt(i))) {
            isSame = false;
        }
    }

    console.log(`${isSame}\n${sum}`);
}

SameNumbers(1234);