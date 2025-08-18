import dayjs from "dayjs"
import { getSchedulesByDay } from "../../services/get-schedules.js"
const inputDateListSchedules = document.getElementById("date");
const listSchedulesMorning = document.getElementById("list-schedules-morning");
const listSchedulesAfternoon = document.getElementById("list-schedules-afternoon");
const listSchedulesNight = document.getElementById("list-schedules-night");

export async function loadSchedules() {
    const listSchedules = await getSchedulesByDay(inputDateListSchedules.value);
    createElementesListSchedule(listSchedules);
}

function createElementesListSchedule(ulToAdd, listSchedules) {
    listSchedules.forEach((schedule) => {
        const li = document.createElement("li");
        const divContent = document.createElement("div");
        const pService = document.createElement("p");
        const pRemoveSchedule = document.createElement("p");
        const pTutor = document.createElement("p");
        const spanHour = document.createElement("span");
        const spanPet = document.createElement("span");

        li.classList.add("item-schedule");
        spanHour.textContent = dayjs(schedule.dt_schedule).hour("HH:MM");
        pTutor.textContent = `/ ${schedule.ch_name_tutor}`;
        pTutor.prepend(spanPet);
        spanPet.append(schedule.ch_name_pet + " ");
        p.textContent = schedule.ch_service;
        pRemoveSchedule.setAttribute("id", "remove-schedule");

        li.append(divContent);
        li.append(pService);
        li.append(pRemoveSchedule);
        
        if(listSchedules[listSchedules.lenght - 1] != schedule){
            const divSeparator= document.createElement("div");
            divSeparator.classList.add("separator-line");
            ulToAdd.append(divSeparator);
        }
    });
}