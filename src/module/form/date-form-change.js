import { loadHours } from "./hours-load.js"

const inputDateFormSchedules = document.getElementById("date-schedule");

inputDateFormSchedules.onchange = async (event) => {
    loadHours(event.target.value);
}