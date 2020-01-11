function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', convertDays);
    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', convertHours);
    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', convertMinutes);
    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let d = document.getElementById('days').value;
        document.getElementById('hours').value = `${Number(d) * 24}`;
        document.getElementById('minutes').value = `${(Number(d) * 24) * 60}`;
        document.getElementById('seconds').value = `${((Number(d) * 24) * 60) * 60}`;
    }

    function convertHours() {
        let h = document.getElementById('hours').value;
        document.getElementById('days').value = `${Number(h) / 24}`;
        document.getElementById('minutes').value = `${Number(h) * 60}`;
        document.getElementById('seconds').value = `${(Number(h) * 60) * 60}`;
    }

    function convertMinutes() {
        let m = document.getElementById('minutes').value;
        document.getElementById('days').value = `${(Number(m) / 60) / 24}`;
        document.getElementById('hours').value = `${Number(m) / 60}`;
        document.getElementById('seconds').value = `${Number(m) * 60}`;
    }

    function convertSeconds() {
        let s = document.getElementById('seconds').value;
        document.getElementById('days').value = `${((Number(s) / 60) / 60) / 24}`;
        document.getElementById('hours').value = `${(Number(s) / 60) / 60}`;
        document.getElementById('minutes').value = `${Number(s) / 60}`;
    }
}