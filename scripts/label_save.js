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
    saveDescriptionLabel(savedLabel10AM, 1);
});
// loads 10AM timeslot description
loadDescriptionLabel(savedLabel10AM, 1);


// saves 11AM
let saveButton11AM = document.getElementById("timeslot_description_save_button_11AM");
let savedLabel11AM = "task_elevenAM";
saveButton11AM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel11AM, 2); 
});
// loads 11AM timeslot description
loadDescriptionLabel(savedLabel11AM, 2);


// saves 12PM
let saveButton12PM = document.getElementById("timeslot_description_save_button_12PM");
let savedLabel12PM = "task_twelvePM";
saveButton12PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel12PM, 3); 
});
// loads 12PM timeslot description
loadDescriptionLabel(savedLabel12PM, 3);


// saves 01PM
let saveButton01PM = document.getElementById("timeslot_description_save_button_01PM");
let savedLabel01PM = "task_onePM";
saveButton01PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel01PM, 4); 
});
// loads 01PM timeslot description
loadDescriptionLabel(savedLabel01PM, 4);


// saves 02PM
let saveButton02PM = document.getElementById("timeslot_description_save_button_02PM");
let savedLabel02PM = "task_twoPM";
saveButton02PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel02PM, 5); 
});
// loads 02PM timeslot description
loadDescriptionLabel(savedLabel02PM, 5);


// saves 03PM
let saveButton03PM = document.getElementById("timeslot_description_save_button_03PM");
let savedLabel03PM = "task_threePM";
saveButton03PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel03PM, 6); 
});
// loads 03PM timeslot description
loadDescriptionLabel(savedLabel03PM, 6);


// saves 04PM
let saveButton04PM = document.getElementById("timeslot_description_save_button_04PM");
let savedLabel04PM = "task_fourPM";
saveButton04PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel04PM, 7); 
});
// loads 04PM timeslot description
loadDescriptionLabel(savedLabel04PM, 7);


// saves 05PM
let saveButton05PM = document.getElementById("timeslot_description_save_button_05PM");
let savedLabel05PM = "task_fivePM";
saveButton05PM.addEventListener("click", function() {
    saveDescriptionLabel(savedLabel05PM, 8); 
});
// loads 05PM timeslot description
loadDescriptionLabel(savedLabel05PM, 8);


// function saves textarea text into local storage
function saveDescriptionLabel(savedLabel, timeslot) {
    let tSlot = timeslot_labels[timeslot].value;
    localStorage.setItem(savedLabel, tSlot);
};

// function loads textarea text for display on website load
function loadDescriptionLabel(savedLabel, timeslot) {
    let savedText = localStorage.getItem(savedLabel);
    if(savedText != null || savedText != "") {
        timeslot_labels[timeslot].value = savedText;
    };
};

