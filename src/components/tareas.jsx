import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";



const Tareas = ({tareaProps, eliminarTarea}) => {
console.log(tareaProps)
    const handleEliminarTarea = () => {
        eliminarTarea(tareaProps.nameOfInput);
      };

    return (
        <>
            <div className="tareas">
                <div className="tareaAgregada">{tareaProps.label}
                    <button 
                    onClick={handleEliminarTarea}
                    className="eliminarTarea"><TiDeleteOutline />
                    </button></div>

              
            </div>

        </>

    )
}

export default Tareas;

