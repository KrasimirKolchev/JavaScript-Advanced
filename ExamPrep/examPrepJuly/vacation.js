class Vacation {
    constructor (org, dest, bud) {
        this.organizer = org;
        this.destination = dest;
        this.budget = Number(bud);
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        let kid = `${name}-${budget}`;
        let g = grade.toString();

        if (!this.kids.hasOwnProperty(g)) {
            this.kids[g] = [];
            this.kids[g].push(kid);
        } else {
            let arr = this.kids[g];
            if (arr.indexOf(kid) === -1) {
                this.kids[g].push(kid);
            } else {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }
        return this.kids[g];
    }

    removeChild(name, grade) {
        let g = grade.toString();

        if (this.kids.hasOwnProperty(g)) {
            let arr = this.kids[g];

            for (let i = 0; i < arr.length; i++) {
                let spl = arr[i].split('-');
                if (spl[0] === name) {
                    arr.splice(i, 1);
                    return this.kids[g];
                }
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        let text = "";
        let arr = this.kids;
        if (this.numberOfChildren > 0) {
            text += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            let grades = Object.keys(arr);
            let sorted = grades.map(g => Number(g)).sort((a,b) => a - b);

            for (let num of sorted) {
                let g = num.toString();
                let grade = arr[g];
                text += `Grade: ${g}\n`;
                let index = 1;
                for (const kid of grade) {
                    text += `${index}. ${kid}\n`;
                    index++;
                }
                text += '\n';
            }

        } else {
            text += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        return text;
    }

    get numberOfChildren() {
        let count = 0;

        for (const a in this.kids) {
            for (const b of this.kids[a]) {
                count ++;
            }
        }
        return count;
    }

}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);
console.log(vacation.toString());


