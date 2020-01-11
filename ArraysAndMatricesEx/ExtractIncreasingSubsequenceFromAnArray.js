function ExtractIncreasingSubsequenceFromAnArray(args) {
    let arr = [args.shift()];

    for (let i = 0; i < args.length; i++) {
        if (args[i] >= arr[arr.length - 1]) {
            arr.push(args[i]);
        }
    }
    
    console.log(arr.join('\n'));
}

ExtractIncreasingSubsequenceFromAnArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
ExtractIncreasingSubsequenceFromAnArray([1, 2, 3, 4]);
ExtractIncreasingSubsequenceFromAnArray([20, 3, 2, 15, 6, 1]);