//your JS code here. If required.
function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // Leap year: divisible by 4 and not divisible by 100 unless also divisible by 400
        return 366;
    } else {
        // Non-leap year
        return 365;
    }
}

const year = prompt("Enter Year");
alert(daysOfAYear(year));