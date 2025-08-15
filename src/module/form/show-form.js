const btNewSchedule = document.getElementById("bt-new-schedule");
const sectionForm = document.getElementById("new-schedule");
const sectionMain = document.getElementById("app");

btNewSchedule.addEventListener("click", (event) => {
    sectionMain.classList.toggle("blur");
    sectionForm.classList.toggle("display-none");

    setTimeout(() => {
        sectionForm.classList.toggle("opacity-0");
        btNewSchedule.classList.toggle("opacity-0");
    }, 1);
})