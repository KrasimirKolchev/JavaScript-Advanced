class Library {
    constructor (libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {normal: libraryName.length, special: libraryName.length * 2, vip: Number.MAX_SAFE_INTEGER};
    }

    subscribe(name, type) {
        let subscriber;
        if (type === 'normal' || type === 'special' || type === 'vip') {
            let num = this.checkForSubscriber(name);
            if (num < 0) {
                subscriber = {name: name, type: type, books: []};
                this.subscribers.push(subscriber);
            } else {
                subscriber = this.getSubscriber(num);
                subscriber.type = type;
            }
        } else {
            throw new Error(`The type ${type} is invalid`);
        }

        return subscriber;
    }

    unsubscribe(name) {
        let num = this.checkForSubscriber(name);

        if (num >= 0) {
            this.subscribers.splice(num, 1);
        } else {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let num = this.checkForSubscriber(subscriberName);
        let subscriber;

        if (num >= 0) {
            subscriber = this.getSubscriber(num);
            let subTypeLimit = this.subscriptionTypes[subscriber.type];
            if (subscriber.books.length < subTypeLimit) {
                subscriber.books.push({title: bookTitle, author: bookAuthor});
            } else {
                throw new Error(`You have reached your subscription limit ${subTypeLimit}!`);
            }

        } else {
            throw new Error(`There is no such subscriber as ${subscriberName}`)
        }

        return subscriber;
    }

    showInfo () {
        let text = "";

        if (this.subscribers.length > 0) {
            for (const sub of this.subscribers) {
                text += `Subscriber: ${sub.name}, Type: ${sub.type}\nReceived books: `;
                if (sub.books.length > 0) {
                    for (const book of sub.books) {
                        text += `${book.title} by ${book.author}, `
                    }
                    text = text.substring(0, text.length - 2);
                }
                text += '\n';
            }
        } else {
            text = `${this.libraryName} has no information about any subscribers`
        }

        return text.trim();
    }

    getSubscriber(num) {
        return this.subscribers[num];
    }

    checkForSubscriber(name) {
        let sub = this.subscribers;
        for (let i = 0; i < sub.length; i++) {
            if (sub[i].name === name) {
                return i;
            }
        }

        return -1;
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh', 'special');


lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
