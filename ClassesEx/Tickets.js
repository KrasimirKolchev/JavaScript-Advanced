function Tickets(args, param) {
    class Ticket {
        constructor (d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
        get dest () {return this.destination}
        get pri () {return this.price}
        get stat () {return this.status}
    }

    let tickets = [];

    for (const arg of args) {
        let argSpltd = arg.split('|');

        tickets.push(new Ticket(argSpltd[0], Number(argSpltd[1]), argSpltd[2]));
    }

    let sorted = [];

    if (param === 'destination') {
        sorted = tickets.sort((a, b) => {return a.dest.localeCompare(b.dest)});
    } else if (param === 'price') {
        sorted = tickets.sort((a, b) => {return a.pri - b.pri});
    } else if (param === 'status') {
        sorted = tickets.sort((a, b) => {return a.stat.localeCompare(b.stat)});
    }

    return sorted;
}

Tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);

Tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
);