function SmallestTwoNumbers(args) {

    console.log(args.sort((a, b) => {return a - b}).splice(0, 2).join(" "));
}

SmallestTwoNumbers([30, 15, 50, 5]);
SmallestTwoNumbers([3, 0, 10, 4, 7, 3]);