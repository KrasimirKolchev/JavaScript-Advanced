function SortArray(arr, sorting) {
    if (sorting === 'asc') {
        return arr = arr.sort((a, b) => {return a - b});
    } else if (sorting === 'desc') {
        return arr = arr.sort((a, b) => {return b - a});
    }
}

SortArray([14, 7, 17, 6, 8], 'asc');
SortArray([14, 7, 17, 6, 8], 'desc');