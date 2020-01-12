class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (username.trim === "" || password.trim === "" || repeatPassword.trim === "" || email.trim === "") {
            throw new Error('Input can not be empty');
        }
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        if (this._users.findIndex(e => e.username === username) === -1
            || this._users.findIndex(e => e.email === email) === -1) {
            this._users.push({
                username,
                password,
                email,
                logged: false
            });
            return `${username} with ${email} was registered successfully!`;
        } else {
            throw new Error('This user already exists!');
        }
    }

    login(username, password) {
        let user = this._users.find(e => e.username === username);

        if (user === undefined) {
            throw new Error('There is no such user');
        } else if (user.password === password) {
            user.logged = true;
            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        let user = this._users.find(e => e.username === username);

        if (user === undefined) {
            throw new Error('There is no such user');
        } else if (user.password === password) {
            user.logged = false;
            return 'You have logged out successfully';
        }
    }

    postQuestion(username, question) {
        let user = this._users.find(e => e.username === username);

        if (user === undefined || user.logged === false) {
            throw new Error('You should be logged in to post questions')
        }
        if (question === "") {
            throw new Error('Invalid question');
        }

        this._questions.push({
            username,
            id: this._id++,
            question,
            answers: []
        });
        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        let user = this._users.find(e => e.username === username);

        if (user === undefined || user.logged === false) {
            throw new Error('You should be logged in to post answers')
        }
        if (answer === "") {
            throw new Error('Invalid answer');
        }

        let question = this._questions.find(q => q.id === questionId);
        if (question === undefined) {
            throw new Error('There is no such question');
        }

        question.answers.push({
            username,
            answer,
            printAnswer: `\n---${username}: ${answer}`
        });

        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        let output = "";

        this._questions.forEach(q => {
            output += `\nQuestion ${q.id} by ${q.username}: ${q.question}`;
            q.answers.forEach(a => output += a.printAnswer);
        });

        return output.trim();
    }

}


let forum = new Forum();

console.log(forum.register('Michael', '123', '123', 'michael@abv.bg'));
console.log(forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com'));
console.log(forum.login('Michael', '123'));
console.log(forum.login('Stoyan', '123ab7'));

console.log(forum.postQuestion('Michael', "Can I rent a snowboard from your shop?"));
console.log(forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year."));
console.log(forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?"));
console.log(forum.postAnswer('Michael', 2, "How old is she?"));
console.log(forum.postAnswer('Michael', 2, "Tell us how tall she is."));

console.log(forum.showQuestions());
