function SortAnArrayBy2Criteria(args) {
    console.log(args.sort(sortCriteria).join('\n'));

    function sortCriteria(a, b) {
        let res = a.length - b.length;

        if (res === 0) {
            res = a.localeCompare(b);
        }
        return res;
    }
}

SortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
SortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
SortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);