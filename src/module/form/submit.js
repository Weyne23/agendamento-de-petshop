import dayjs from "dayjs";
import { createSchedule } from "../../services/create-schedule.js";
import { loadSchedules } from "../schedule/load-schedules.js"
import { loadHours } from "../form/hours-load.js"

const form = document.querySelector("form");
const tutorName = document.getElementById("tutor-name");
const petName = document.getElementById("pet-name");
const phone = document.getElementById("phone");
const service = document.getElementById("service");
const dateSchedule = document.getElementById("date-schedule");
const hourSchedule = document.getElementById("hour-schedule");

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        if(validationFilds()){
            const [hour] = hourSchedule.children[hourSchedule.selectedIndex].textContent.split(":");
            const date = dayjs(dateSchedule.value).add(hour, "hour");

            const schedule = {
                id: new Date().getTime().toString(),
                dt_schedule: date,
                ch_name_tutor: tutorName.value,
                ch_name_pet: petName.value,
                ch_phone: phone.value,
                ch_service: service.value
            };

            await createSchedule(schedule);
            alert("Agendamento criado com sucesso!");
            clearFieldsForm();
            loadSchedules();
            loadHours();
        }
    }
    catch (error) {
        alert(error);
    }
}

function clearFieldsForm() {
    tutorName.value = "";
    petName.value = "";
    phone.value = "";
    service.value = "";
}

function validationFilds() {
    let msgError = "";

    if(!tutorName.value.trim()){
        msgError += "Inclua o nome do Tutor!(Se voce for o pet)\n";
    }

    if(!petName.value.trim()){
        msgError += "Inclua o nome do seu pet!(Se voce for o tutor)\n";
    }

    if(!phone.value.trim()){
        msgError += "Inclua o telefone!\n";
    }

    if(!service.value.trim()){
        msgError += "Inclua o serviço prestado!\n";
    }
    
    if(msgError)
        alert(msgError);

    return !msgError;
}