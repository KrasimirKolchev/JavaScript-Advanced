function CircleArea(arg) {
    let type = typeof(arg);
    let result;

    if (type === 'number') {
        result = (Math.pow(arg, 2) * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${type}.`;
    }

    console.log(result.toString())
}

CircleArea(5);