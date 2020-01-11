function LastKNumbersSequence(n, k) {
    let res = [1];
    for (let i = 0; i < n - 1; i++) {
        let num = 0;
        let index = i;
        let times = k;
        while (res[index] !== undefined && times !== 0) {
            num += res[index];
            index--;
            times--;
        }
        res.splice(res.length, 0, num);
    }

    console.log(res.join(" "));
}

// for loop for previous elements
// if construction to check if the value is undefined(cannot sum undefined and number)
// to save the resulting sum number in the res array


LastKNumbersSequence(6, 3);
LastKNumbersSequence(8, 2);