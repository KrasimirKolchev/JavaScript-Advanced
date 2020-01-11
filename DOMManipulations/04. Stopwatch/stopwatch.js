function stopwatch() {

    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('stopBtn').addEventListener('click', resetTimer);
    let timer = document.getElementById('time');

    let startCount = 0;
    let hour = 0;
    let minutes = 0;
    let seconds = 0;
    let timerStopped = false;
    let interval = null;

    function showTimer() {

        if (timerStopped) {
            timer.textContent = '00:00';
            timerStopped = false;
        } else {
            ++startCount;
            hour = Math.floor(startCount / 3600);
            minutes = Math.floor((startCount - hour * 3600) / 60);
            seconds = startCount - (hour * 3600 + minutes * 60);

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            timer.textContent = `0${minutes}:${seconds}`;
        }
    }

    function resetTimer() {

        if (interval) {
            clearInterval(interval);
        }

        startCount = 0;
        hour = 0;
        minutes = 0;
        seconds = 0;

        startBtn.disabled = false;
        stopBtn.disabled = true;
    }

    function startTimer() {

        interval = setInterval(showTimer, 1000);

        stopBtn.disabled = false;
        startBtn.disabled = true;
    }

}