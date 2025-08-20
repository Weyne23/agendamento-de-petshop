import { loadHours } from "./hours-load.js";

const btNewSchedule = document.getElementById("bt-new-schedule");
const sectionForm = document.getElementById("new-schedule");
const sectionMain = document.getElementById("app");
const buttonCloseForm = document.getElementById("close-form");
const body = document.querySelector("body");
const inputDateListSchedules = document.getElementById("date");

btNewSchedule.addEventListener("click", () => {
    alterShowForm();
    loadHours(inputDateListSchedules.value);
});

buttonCloseForm.addEventListener("click", () => {
    alterShowForm();
})

body.addEventListener("click", (event) => {
    if(event.target != btNewSchedule &&
       !sectionForm.classList.contains("display-none") &&
       event.target.closest("section") != sectionForm){
        alterShowForm();
    }
});

body.addEventListener("keydown", (event) => {
    if(!sectionForm.classList.contains("display-none") && event.key == "Escape"){
        alterShowForm();
    }
});

function alterShowForm() {
    sectionMain.classList.toggle("blur");
    sectionForm.classList.toggle("display-none");
    btNewSchedule.closest("div").classList.toggle("display-none");
    
    setTimeout(() => {
        sectionForm.classList.toggle("opacity-0");
    }, 10);
}