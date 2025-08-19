import {deleteSchedule} from "../../services/delete-schedule.js"
import {loadSchedules} from "./load-schedules.js"

export async function cancelSchedule(target, id) {
    target.addEventListener("click", async () => {
        try{
            const isConfirm = confirm("Deseja realmente deletar esse agendamento?");

            if(isConfirm){
                await deleteSchedule(id);
                loadSchedules();
                alert("Agendamento deletado com sucesso!");
            }
        }
        catch(error) {
            alert("Erro ao deletar Agendamento!");
            console.log(error);
        }
    })
}