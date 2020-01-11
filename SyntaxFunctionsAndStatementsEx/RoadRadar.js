function RoadRadar(args) {
    const areaSpeedLimits = {
        residential : 20,
        city : 50,
        interstate : 90,
        motorway : 130
    };

    let currentSpeed = Number(args[0]);
    let area = args[1];

    if (areaSpeedLimits[area] >= currentSpeed) {
        console.log();
        return;
    } else {
        let msg;
        let speeding = currentSpeed - areaSpeedLimits[area];

        if (speeding > 0 && speeding <= 20) {
            msg = "speeding";
        } else if (speeding > 20 && speeding <= 40) {
            msg = "excessive speeding";
        } else {
            msg = "reckless driving";
        }
        console.log(msg.toString());
    }
}

RoadRadar([61, 'residential']);