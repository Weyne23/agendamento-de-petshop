import dayjs from "dayjs"
import { getSchedulesByDay } from "../../services/get-schedules.js"
import { cancelSchedule } from "./cancel-schedule.js"
const inputDateListSchedules = document.getElementById("date");
const listSchedulesMorning = document.getElementById("list-schedules-morning");
const listSchedulesAfternoon = document.getElementById("list-schedules-afternoon");
const listSchedulesNight = document.getElementById("list-schedules-night");

export async function loadSchedules() {
    const listSchedules = await getSchedulesByDay(inputDateListSchedules.value);
    listSchedulesMorning.innerHTML = "";
    listSchedulesAfternoon.innerHTML = "";
    listSchedulesNight.innerHTML = "";

    const listMorning = listSchedules.filter(({ dt_schedule }) => dayjs(dt_schedule).hour() <= 12);
    const listAfternoon = listSchedules.filter(({ dt_schedule }) => dayjs(dt_schedule).hour() > 12 && dayjs(dt_schedule).hour() <= 18);
    const listNight = listSchedules.filter(({ dt_schedule }) => dayjs(dt_schedule).hour() > 18);

    createElementsListSchedule(listSchedulesMorning, listMorning);
    createElementsListSchedule(listSchedulesAfternoon, listAfternoon);
    createElementsListSchedule(listSchedulesNight, listNight);
}

function createElementsListSchedule(ulToAdd, listSchedules) {
    listSchedules.forEach((schedule) => {
        const li = document.createElement("li");
        const divContent = document.createElement("div");
        const pService = document.createElement("p");
        const pRemoveSchedule = document.createElement("p");
        const pTutor = document.createElement("p");
        const spanHour = document.createElement("span");
        const spanPet = document.createElement("span");

        li.classList.add("item-schedule");
        li.setAttribute("data-id", schedule.id)
        spanHour.textContent = dayjs(schedule.dt_schedule).format("HH:mm");
        pTutor.textContent = `/ ${schedule.ch_name_tutor}`;
        pTutor.prepend(spanPet);
        spanPet.append(schedule.ch_name_pet + " ");
        pService.textContent = schedule.ch_service;
        pRemoveSchedule.textContent = "Remover agendamento"
        pRemoveSchedule.setAttribute("id", "remove-schedule");

        divContent.append(spanHour);
        divContent.append(pTutor);

        li.append(divContent);
        li.append(pService);
        li.append(pRemoveSchedule);

        ulToAdd.append(li);
        
        if(listSchedules[listSchedules.length - 1] != schedule){
            const divSeparator= document.createElement("div");
            divSeparator.classList.add("separator-line");
            ulToAdd.append(divSeparator);
        }

        cancelSchedule(pRemoveSchedule, schedule.id);
    });
}
