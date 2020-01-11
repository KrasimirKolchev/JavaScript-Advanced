function DayOfWeek(arg) {
    const days = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7,
};
    let output;
    let day = arg;

    output = days[day];

    if (typeof output === 'undefined') {
        output = 'error';
    }
    console.log(output)
}

DayOfWeek('Friday');