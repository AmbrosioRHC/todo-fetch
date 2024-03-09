import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const Tareas = (props) => {
    return (
        <>
            <div className="tareas">
                <div className="tareaAgregada">{props.tareaProps.nameOfInput}
                    <button className="eliminarTarea"><TiDeleteOutline />
                    </button></div>

              
            </div>

        </>

    )
}

export default Tareas;