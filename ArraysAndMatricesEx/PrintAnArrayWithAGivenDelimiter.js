function PrintAnArrayWithAGivenDelimiter(args) {
    const delimiter = args[args.length - 1];
    let arr = args.slice(0, args.length - 1);
    console.log(arr.join(delimiter));
    //    console.log(args.slice(0, args.length - 1).join(args[args.length - 1]));
}

PrintAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
PrintAnArrayWithAGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);