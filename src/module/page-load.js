import dayjs from "dayjs";
import { schedulesDay } from "../module/schedule/load.js"

const inputDateListSchedules = document.getElementById("date");
const inputDateForm = document.getElementById("date-schedule");

document.addEventListener("DOMContentLoaded", () => {
    const dateNow =  dayjs().format("YYYY-MM-DD");
    inputDateListSchedules.value = dateNow;
    inputDateForm.min = dateNow;

    schedulesDay();
})