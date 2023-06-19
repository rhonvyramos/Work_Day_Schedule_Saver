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
console.log(timeNow)

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

// changes timeslot description background color to red or green
// red indicates timeslot is past
// green indicates timeslot is future

// 09AM slot
let nineAM = dayjs().hour(9).hour();
if(nineAM < timeNow) {
    labelNineMorning.style.backgroundColor = "red";
};

if(nineAM > timeNow) {
    labelNineMorning.style.backgroundColor = "green";
};

// 10AM slot
let tenAM = dayjs().hour(10).hour();
if(tenAM < timeNow) {
    labelTenMorning.style.backgroundColor = "red";
};

if(tenAM > timeNow) {
    labeltenMorning.style.backgroundColor = "green";
};

// 11AM slot
let elevenAM = dayjs().hour(11).hour();
if(elevenAM < timeNow) {
    labelElevenMorning.style.backgroundColor = "red";
};

if(elevenAM > timeNow) {
    labelElevenMorning.style.backgroundColor = "green";
};

// 12PM slot
let twelvePM = dayjs().hour(12).hour();
if(twelvePM < timeNow) {
    labelTwelveAfternoon.style.backgroundColor = "red";
};

if(twelvePM > timeNow) {
    labelTwelveAfternoon.style.backgroundColor = "green";
};

// 01PM slot
let onePM = dayjs().hour(13).hour();
if(onePM < timeNow) {
    labelOneAfternoon.style.backgroundColor = "red";
};

if(onePM > timeNow) {
    labelOneAfternoon.style.backgroundColor = "green";
};

// 02PM slot
let twoPM = dayjs().hour(14).hour();
if(twoPM < timeNow) {
    labelTwoAfternoon.style.backgroundColor = "red";
};

if(twoPM > timeNow) {
    labelTwoAfternoon.style.backgroundColor = "green";
};

// 03PM slot
let threePM = dayjs().hour(15).hour();
if(threePM < timeNow) {
    labelThreeAfternoon.style.backgroundColor = "red";
};

if(threePM > timeNow) {
    labelThreeAfternoon.style.backgroundColor = "green";
};

// 04PM slot
let fourPM = dayjs().hour(16).hour();
if(fourPM < timeNow) {
    labelFourAfternoon.style.backgroundColor = "red";
};

if(fourPM > timeNow) {
    labelFourAfternoon.style.backgroundColor = "green";
};

// 05PM slot
let fivePM = dayjs().hour(17).hour();
if(fivePM < timeNow) {
    labelFivefternoon.style.backgroundColor = "red";
};

if(fivePM > timeNow) {
    labelFiveAfternoon.style.backgroundColor = "green";
};