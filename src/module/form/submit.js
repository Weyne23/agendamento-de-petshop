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
        if(validationFields()){
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
            loadHours(dateSchedule.value);
        }
    }
    catch (error) {
        alert(error);
    }
}

phone.addEventListener("keypress", (event) => {
    mask(event.target);
})

function clearFieldsForm() {
    tutorName.value = "";
    petName.value = "";
    phone.value = "";
    service.value = "";
}

function validationFields() {
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

function mask(o) {
  setTimeout(function() {
    var v = mPhone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mPhone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}