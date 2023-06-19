// variable to hold real time as a label
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
var timeNow = dayjs().hour();

// timeslot labels
let labelNineMorning = document.getElementById("timeslot_description_label_09AM");
let labelTenMorning = document.getElementById("timeslot_description_label_10AM");
let labelElevenMorning = document.getElementById("timeslot_description_label_11AM");
let labelTwelveAfternoon = document.getElementById("timeslot_description_label_12PM");
let labelOneAfternoon = document.getElementById("timeslot_description_label_01PM");
let labelTwoAfternoon = document.getElementById("timeslot_description_label_02PM");
let labelThreeAfternoon = document.getElementById("timeslot_description_label_03PM");
let labelFourAfternoon = document.getElementById("timeslot_description_label_04PM");
let labelFiveAfternoon = document.getElementById("timeslot_description_label_05PM");

// exports timeslot labels to label_save file
export function label_saves() {
    let timeslot_labels = [
        labelNineMorning,
        labelTenMorning,
        labelElevenMorning,
        labelTwelveAfternoon,
        labelOneAfternoon,
        labelTwoAfternoon,
        labelThreeAfternoon,
        labelFourAfternoon,
        labelFiveAfternoon
    ];
    return timeslot_labels;
};

// changes timeslot description background color to light gray or green
// light gray indicates timeslot is past task
// green indicates timeslot is future task

// 09AM slot
let nineAM = dayjs().hour(9).hour();
if(nineAM < timeNow) {
    labelNineMorning.style.backgroundColor = "lightgray";
};

if(nineAM > timeNow) {
    labelNineMorning.style.backgroundColor = "green";
};

// 10AM slot
let tenAM = dayjs().hour(10).hour();
if(tenAM < timeNow) {
    labelTenMorning.style.backgroundColor = "lightgray";
};

if(tenAM > timeNow) {
    labelTenMorning.style.backgroundColor = "green";
};

// 11AM slot
let elevenAM = dayjs().hour(11).hour();
if(elevenAM < timeNow) {
    labelElevenMorning.style.backgroundColor = "lightgray";
};

if(elevenAM > timeNow) {
    labelElevenMorning.style.backgroundColor = "green";
};

// 12PM slot
let twelvePM = dayjs().hour(12).hour();
if(twelvePM < timeNow) {
    labelTwelveAfternoon.style.backgroundColor = "lightgray";
};

if(twelvePM > timeNow) {
    labelTwelveAfternoon.style.backgroundColor = "green";
};

// 01PM slot
let onePM = dayjs().hour(13).hour();
if(onePM < timeNow) {
    labelOneAfternoon.style.backgroundColor = "lightgray";
};

if(onePM > timeNow) {
    labelOneAfternoon.style.backgroundColor = "green";
};

// 02PM slot
let twoPM = dayjs().hour(14).hour();
if(twoPM < timeNow) {
    labelTwoAfternoon.style.backgroundColor = "lightgray";
};

if(twoPM > timeNow) {
    labelTwoAfternoon.style.backgroundColor = "green";
};

// 03PM slot
let threePM = dayjs().hour(15).hour();
if(threePM < timeNow) {
    labelThreeAfternoon.style.backgroundColor = "lightgray";
};

if(threePM > timeNow) {
    labelThreeAfternoon.style.backgroundColor = "green";
};

// 04PM slot
let fourPM = dayjs().hour(16).hour();
if(fourPM < timeNow) {
    labelFourAfternoon.style.backgroundColor = "lightgray";
};

if(fourPM > timeNow) {
    labelFourAfternoon.style.backgroundColor = "green";
};

// 05PM slot
let fivePM = dayjs().hour(17).hour();
if(fivePM < timeNow) {
    labelFiveAfternoon.style.backgroundColor = "lightgray";
};

if(fivePM > timeNow) {
    labelFiveAfternoon.style.backgroundColor = "green";
};