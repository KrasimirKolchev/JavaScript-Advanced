function PrintEveryNthElementFromAnArray(args) {
    let step = Number(args[args.length - 1]);
    let arr = args.slice(0, args.length - 1);

    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

PrintEveryNthElementFromAnArray(['5', '20', '31', '4', '20', '2']);
PrintEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset', '2']);
PrintEveryNthElementFromAnArray(['1', '2', '3', '4', '5', '6']);