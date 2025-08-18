import dayjs from "dayjs"
import {apiConfig} from "./api-config.js"

export async function getSchedulesByDay(date) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();

        const dayleSchedules = data.filter(({ when }) => dayjs(when).isSame(date, "day"))
        return dayleSchedules;
    }
    catch(error) {
        alert("Não foi possivel listar os agendamentos.");
        console.log(error);
    }
}