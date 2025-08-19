import {apiConfig} from "./api-config.js";

export async function createSchedule(newSchedule) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            body: JSON.stringify(newSchedule),
            //body: JSON.stringify({ id, ch_name_tutor, ch_name_pet, ch_service, dt_schedule })
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }
        });
    }
    catch (error)
    {
        console.log(error);
        throw new Error("Erro ao criar novo agendamento!");
    }
}