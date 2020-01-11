function AddAndRemoveElements(args) {
    let arr = [];
    let num = 1;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === 'add') {
            arr.push(num);
        } else if (args[i] === 'remove') {
            arr.splice(arr.length - 1, 1);
        }
        num++;
    }

    if (arr.length === 0) {
        console.log('Empty');
        return;
    }
    console.log(arr.join('\n'));
}

AddAndRemoveElements(['add', 'add', 'add', 'add']);
AddAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
AddAndRemoveElements(['remove', 'remove', 'remove']);