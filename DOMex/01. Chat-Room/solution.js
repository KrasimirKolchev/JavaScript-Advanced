function solve() {
    document.getElementById('send').addEventListener('click', sendFunction);
    const messages = document.getElementById('chat_input');

    function sendFunction () {
        let msg = messages.value;
        let message = document.createElement('div');
        message.classList.add('message', 'my-message');
        message.textContent = msg;

        document.getElementById('chat_messages').appendChild(message);
        messages.value = "";
    }
}

