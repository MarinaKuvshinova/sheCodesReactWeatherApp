const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

export function createCurrentDate(time) {
    let date;
    if (!time) {
        date = new Date();
    } else {
        date = new Date(time);
    }

    return `${days[date.getDay()]} ${addZero(date.getHours())}:${addZero(
        date.getMinutes()
    )}`;
}
