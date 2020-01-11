function subSum(arr, start, end) {
    let startIndex = 0;
    let endIndex = arr.length;

    if (start > 0) {
        startIndex = start
    }

    if (end + 1 < endIndex) {
        endIndex = end;
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }

    return arr
        .map(n => Number(n))
        .slice(startIndex, endIndex + 1)
        .reduce((f, s) => f + s, 0);
}

module.exports = { subSum };

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);
















