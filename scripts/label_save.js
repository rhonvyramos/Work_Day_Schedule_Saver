import { label_saves } from "/scripts/script.js";
let timeslot_labels = label_saves();

// saves 09AM timeslot description
let saveButton09AM = document.getElementById("timeslot_description_save_button_09AM");
let savedLabel09AM = "task_nineAM";
saveButton09AM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel09AM, 0) 
});
// loads 09AM timeslot description
loadDescriptionLabel(savedLabel09AM, 0);

// saves 10AM
let saveButton10AM = document.getElementById("timeslot_description_save_button_10AM");
let savedLabel10AM = "task_tenAM";
saveButton10AM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel10AM, 1) 
});
// loads 09AM timeslot description
loadDescriptionLabel(savedLabel10AM, 1);

// saves 11AM
// saves 12PM
// saves 01PM
// saves 02PM
// saves 03PM
// saves 04PM
// saves 05PM

function saveDescriptionLabel(savedLabel, timeslot) {
    let tSlot = timeslot_labels[timeslot].value;
    localStorage.setItem(savedLabel, tSlot);
};

function loadDescriptionLabel(savedLabel, timeslot) {
    let savedText = localStorage.getItem(savedLabel);
    if(savedText != null || savedText != "") {
        timeslot_labels[timeslot].value = savedText;
    };
};

