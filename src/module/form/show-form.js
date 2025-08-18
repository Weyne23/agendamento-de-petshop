const btNewSchedule = document.getElementById("bt-new-schedule");
const sectionForm = document.getElementById("new-schedule");
const sectionMain = document.getElementById("app");
const body = document.querySelector("body");

btNewSchedule.addEventListener("click", (event) => {
    event.target.closest("div").classList.toggle("display-none");
    alterShowForm();
});

body.addEventListener("click", (event) => {
    console.log(sectionForm.childNodes)
    sectionForm.childNodes.forEach((node) => {
        console.log(node, node != event.target);
    })

    if(event.target != btNewSchedule &&
      sectionForm.classList.contains("display-none")){
        console.log("entro")
        alterShowForm();
        btNewSchedule.closest("div").classList.toggle("display-none");
    }
});

function alterShowForm() {
    sectionMain.classList.toggle("blur");
    sectionForm.classList.toggle("display-none");
    
    setTimeout(() => {
        sectionForm.classList.toggle("opacity-0");
    }, 10);
}