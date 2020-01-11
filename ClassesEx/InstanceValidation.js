class CheckingAccount {
    constructor (clientId, email, firstName, lastName) {
        this.setClientId(clientId);
        this.setEmail(email);
        this.setFirstName(firstName);
        this.setLastName(lastName);
    }

    setClientId (clientId) {
        if (clientId.length !== 6 || typeof Number(clientId) !== 'number') {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this.clientId = clientId;
    }

    setEmail (email) {
        if (email.match(/^\w+@[a-zA-Z.]+$/g) == null) {
            throw new TypeError('Invalid e-mail');
        }
        this.email = email;
    }

    setFirstName(firstName) {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else if (firstName.match(/[A-Za-z]+/g) == null) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this.firstName = firstName;
    }

    setLastName(lastName) {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else if (lastName.match(/[A-Za-z]+/g) == null) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this.lastName = lastName;
    }
}