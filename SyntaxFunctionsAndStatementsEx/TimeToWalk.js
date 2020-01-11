function TimeToWalk(steps, stepSize, speed) {
    let dist = steps * stepSize;
    let breaks = Math.floor(dist / 500);
    let metersPerSec = speed / 3.6;

    let travelTimeInSec = dist / metersPerSec + breaks * 60;

    let hh = Math.floor(travelTimeInSec / 3600);
    let mm = Math.floor(travelTimeInSec / 60);
    let ss = Math.ceil(travelTimeInSec % 60);

    let hours = hh < 10 ? "0" + hh : hh;
    let minutes = mm < 10 ? "0" + mm : mm;
    let seconds = ss < 10 ? "0" + ss : ss;

    console.log(`${hours}:${minutes}:${seconds}`);
}

TimeToWalk(2564, 0.70, 5.5);