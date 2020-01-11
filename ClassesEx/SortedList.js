class List {
    constructor () {
        this.list = [];
        this.size = 0;
    }

    add(elem) {
        if (typeof elem === 'number') {
            this.list.push(elem);
            this.size++;
            this.sortList();
        }
    }

    remove(index) {
        if (this.isInRange(index)) {
            throw new Error();
        }
        this.list.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (this.isInRange(index)) {
            throw new Error();
        }
        return this.list[index];
    }

    sortList() {
        this.list.sort((f, s) => f - s);
    }

    isInRange(index) {
        return index < 0 || index > this.list.length - 1;
    }
}
