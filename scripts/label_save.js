import { label_saves } from "/scripts/script.js";
let timeslot_labels = label_saves();

// saves 09AM timeslot description
let saveButton9AM = document.getElementById("timeslot_description_save_button_09AM");
saveButton9AM.addEventListener("click", saveDescriptionLabel);
function saveDescriptionLabel() {
    localStorage.setItem("task_nineAM", timeslot_labels[0].value);
};

if(localStorage.getItem("task_nineAM") != null || localStorage.getItem("task_nineAM") != "") {
    console.log(localStorage.getItem("task_nineAM"))
    timeslot_labels[0].value = localStorage.getItem("task_nineAM");
};

