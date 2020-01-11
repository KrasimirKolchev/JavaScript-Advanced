function UniqueSequences(args) {
    function sortNumber(a, b) {
        return b - a;
    }

    function sortLength(a, b) {
        return a.length - b.length;
    }

    function compareArr(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    let arrOut = [];

    for (let line of args) {
        let elements = JSON.parse(line);
        arrOut.push(elements.map(e => Number(e)).sort(sortNumber));
    }

    for (let i = 0; i < arrOut.length; i++) {
        for (let j = i + 1; j < arrOut.length; j++) {
            if (compareArr(arrOut[i], arrOut[j])) {
                arrOut.splice(j, 1);
                j--;
            }
        }
    }
    arrOut.sort(sortLength);
    arrOut.forEach(e => console.log(`[${e.join(", ")}]`));
}


UniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);

UniqueSequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);