class Stringer {
    constructor (str, len) {
        this.innerString = str;
        this.innerLength = len;
    }

    setInnerLength(length) {
        if (length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = length;
        }
    }

    increase(length) {
        let newLength = this.innerLength + length;
        this.setInnerLength(newLength);
    }

    decrease(length) {
        let newLength = this.innerLength - length;
        this.setInnerLength(newLength);
    }

    toString() {
        let res = this.innerString;

        if (this.innerString.length > this.innerLength) {
            res = this.innerString.substring(0, this.innerLength) + '...';
        }

        return res;
    }
}