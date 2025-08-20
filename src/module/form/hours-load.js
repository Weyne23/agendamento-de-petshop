import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { getSchedulesByDay } from "../../services/get-schedules.js"

const selectionHours = document.getElementById("hour-schedule");
const inputDateForm = document.getElementById("date-schedule");

export async function loadHours(date) {
    selectionHours.innerHTML = "";
    const dateInput = dayjs(date).isBefore(dayjs()) ? dayjs(new Date()) : dayjs(date);
    
    inputDateForm.value = dateInput.format("YYYY-MM-DD");
    
    const listSchedulesDay = await getSchedulesByDay(dateInput);

    const listInvalidDates = listSchedulesDay.map(({dt_schedule}) =>
        dayjs(dt_schedule).format("HH:mm")
    );

    const availableHours = openingHours.filter((hour) => {
        const [scheduleHour] = hour.split(":");
        return !listInvalidDates.includes(hour) && dayjs(dateInput).add(scheduleHour, "hour").isAfter(dayjs())
    });

    if(availableHours.length == 0)
        alert("Esse dia não possui mais nenhum horário disponível para agendamento.");
    else
        availableHours.forEach((hour) => {
            createElementOptionHour(hour);
        });
}

function createElementOptionHour(hour) {
    const element = document.createElement("option");
    element.setAttribute("value", hour)
    element.textContent = hour;
    selectionHours.append(element);
}