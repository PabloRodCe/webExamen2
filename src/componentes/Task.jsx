import React from "react";

function Task ({tarea,onDelete,ontoggle}){
return(
<div className="tarea">
< input
type="checkbox"
checked={tarea.completada}
onChange={()=>ontoggle(tarea.id)}
/>
<span className={tarea.completada ? (completada):"" }
>
    {tarea.text}

</span>
<button onClick={()=> onDelete(tarea.id)}> Eliminar </button>
</div>
);

}
 export default Task;