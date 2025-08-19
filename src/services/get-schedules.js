import dayjs from "dayjs"
import {apiConfig} from "./api-config.js"

export async function getSchedulesByDay(date) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();

        const dayleSchedules = data.filter(({ dt_schedule }) => dayjs(dt_schedule).isSame(date, "day")).sort((a, b) => { 
                if (dayjs(a.dt_schedule).isAfter(b.dt_schedule)) 
                    return 1; 
                else if (dayjs(a.dt_schedule).isBefore(b.dt_schedule)) 
                    return -1; 
                else 
                    return 0; 
            })
        return dayleSchedules;
    }
    catch(error) {
        alert("Não foi possível listar os agendamentos.");
        console.log(error);
    }
}