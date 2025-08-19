import {apiConfig} from "./api-config"

export async function deleteSchedule(id) {
    try{
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE"
        });
    }
    catch(error){
        throw new Error("Erro ao deletar agendamento! Tente novamente!");
    }
}