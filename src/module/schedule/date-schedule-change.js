import { loadSchedules } from "./load-schedules.js"

const inputDateListSchedules = document.getElementById("date");

inputDateListSchedules.onchange = () => {
    loadSchedules();
}