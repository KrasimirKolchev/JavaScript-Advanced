function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(clearNotification,2000);

    function clearNotification() {
        notification.style.display = 'none';
    }
}