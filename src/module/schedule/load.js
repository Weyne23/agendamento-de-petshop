import { loadSchedules } from "./load-schedules.js"
const inputDateListSchedules = document.getElementById("date");

export async function schedulesDay() {
    //Carregar os agendamentos
    loadSchedules();
}