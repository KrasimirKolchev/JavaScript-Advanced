function RotateArray(args) {
    let times = Number(args.pop());

    for (let i = 0; i < times % args.length; i++) {
        args.unshift(args.pop());
    }

    console.log(args.join(' '));
}

RotateArray(['1', '2', '3', '4', '2']);
RotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);