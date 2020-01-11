function StringLength(str1, str2, str3) {
    let sumLength;
    let averageLength;

    sumLength = str1.length + str2.length + str3.length;
    averageLength = sumLength / 3;

    console.log(sumLength);
    console.log(Math.floor(averageLength))
}

StringLength();