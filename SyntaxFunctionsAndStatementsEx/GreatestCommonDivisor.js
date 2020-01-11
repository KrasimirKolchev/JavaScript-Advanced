function GreatestCommonDivisor(a, b) {
    let result;
    let biggest = Math.max(a, b);
    let smallest = Math.min(a, b);

    if (biggest % smallest === 0) {
        result = smallest;
    } else {
        for (let i = smallest; i > 0 ; i--) {
            if (smallest % i === 0 && biggest % i === 0) {
                result = i;
                break;
            }
        }
    }

    console.log(result);
}

GreatestCommonDivisor(5, 125);