import React from "react";

function TaskList({task,eliminar,tocar}){
    return(
     <div> 
     {task.lengt === 0 ?(
        <p>no hay tareas</p>
     ): (
        task.map((tarea) =>(
            <task
            key={tarea.id}
            tarea={tarea}
            eliminar={eliminar}
            tocar={tocar}
            />
        ))
     )}
     </div>
    );
}

export default TaskList;