import React from "react";

function TaskList({task,onDelete,onToggle}){
    return(
     <div> 
     {task.lengt === 0 ?(
        <p>no hay tareas</p>
     ): (
        task.map((tarea) =>(
            <task
            key={tarea.id}
            tarea={tarea}
            onDelete={onDelete}
            onToggle={onToggle}
            />
        ))
     )}
     </div>
    );
}

export default TaskList;