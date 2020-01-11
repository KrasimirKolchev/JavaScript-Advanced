class Rat {
    constructor (name) {
        this.name = name;
        this.united = [];
    }

    unite (rat) {
        if (typeof rat === 'object') {
            this.united.push(rat);
        }
    }

    getRats() {
        return this.united;
    }

    toString() {
        let res = this.name;
        if (this.united.length !== 0) {
            let arr = [];
            for (const rat of this.united) {
                arr.push(`##${rat.name}`);
            }

            return result + '\n' + arr.join('\n');
        }
        return res;
    }
}



