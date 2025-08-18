import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
const selectionHours = document.getElementById("hour-schedule");
const inputDateForm = document.getElementById("date-schedule");

export function loadHours(date) {
    selectionHours.innerHTML = "";
    const availableHours = openingHours;
    availableHours.forEach((hour) => {
        createElementOptionHour(hour);
    });

    const dateInput = dayjs(date).isBefore(dayjs()) ? dayjs(new Date()) : dayjs(date);
    
    inputDateForm.value = dateInput.format("YYYY-MM-DD");
}

function createElementOptionHour(hour) {
    const element = document.createElement("option");
    element.setAttribute("value", hour)
    element.textContent = hour;
    selectionHours.append(element);
}