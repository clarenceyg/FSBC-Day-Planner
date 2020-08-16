const m_names = new Array("January", "February", "March",
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December");

const d_day = new Array('Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 'Saturday');

const d = new Date();

// console.log(d)

const curr_date = d.getDate();
const curr_month = d.getMonth();

// console.log(curr_date);
// console.log(curr_month);
// console.log(d_day[d.getDay()]);

let sup = '';
if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
    sup = 'st';
}
else if (curr_date == 2 || curr_date == 22) {
    sup = 'nd';
}
else if (curr_date == 3 || curr_date == 23) {
    sup = 'rd';
}
else {
    sup = "th";
}

// console.log(sup);

const displayCurrentDay = d_day[d.getDay()] + ', ' + m_names[curr_month] + ' ' +
    curr_date + sup

    // console.log(displayCurrentDay);

$('#currentDay').text(`${displayCurrentDay}`);