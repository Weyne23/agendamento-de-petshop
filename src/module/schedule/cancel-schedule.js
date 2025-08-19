import {deleteSchedule} from "../../services/delete-schedule.js"
import {loadSchedules} from "./load-schedules.js"
const sectionForm = document.getElementById("new-schedule");

export async function cancelSchedule(target, id) {
    target.addEventListener("click", async () => {
        if (sectionForm.classList.contains("display-none")){
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
        }
    })
}