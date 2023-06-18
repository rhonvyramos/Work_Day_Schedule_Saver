var headerTime = document.getElementById("time_realtime");

// function to display real time for the user to compare their schedule to
// code taken from: https://stackoverflow.com/questions/50438363/show-real-time-clock-on-html-using-javascript
function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var formattedString = dateString.replace(", ", " - ");
    headerTime.innerHTML = formattedString;
};
  
setInterval(refreshTime, 1000);

// let timeslot = document.getElementById("schedule_timeslot").cloneNode(true);
var dailySchedule = document.getElementById("content_daily_schedule");
for(var x = 0; x < 8; x++) {
    let timeslot = document.getElementById("schedule_timeslot").cloneNode(true);
    $(dailySchedule).append(timeslot)
};