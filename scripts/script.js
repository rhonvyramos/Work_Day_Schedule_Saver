//

let headerTime = document.getElementById("time_realtime");

// function to display real time for the user to compare their schedule to
// code taken from: https://stackoverflow.com/questions/50438363/show-real-time-clock-on-html-using-javascript
function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var formattedString = dateString.replace(", ", " - ");
    headerTime.innerHTML = formattedString;
};
setInterval(refreshTime, 1000);

// used to compare current time with time slot time labels
var timeNow = dayjs();

// timeslot labels
let labelNineMorning = document.getElementById("timeslot_description_label_09AM");
let labelTenMorning = document.getElementById("timeslot_description_label_10AM");
let labelElevenMorning = document.getElementById("timeslot_description_label_11AM");
let labelTwelveAfternoon = document.getElementById("timeslot_description_label_12PM");
let labelOneAfternoon = document.getElementById("timeslot_description_label_01PM");
let labelTwoAfternoon = document.getElementById("timeslot_description_label_02AM");
let labelThreeAfternoon = document.getElementById("timeslot_description_label_03AM");
let labelFourAfternoon = document.getElementById("timeslot_description_label_04AM");
let labelFiveAfternoon = document.getElementById("timeslot_description_label_05AM");

console.log(dayjs().hour(8))
console.log(timeNow)

if(dayjs().hour(9) < timeNow) {
    labelNineMorning.style.backgroundColor = "red";
}


