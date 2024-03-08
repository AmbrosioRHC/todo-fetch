import { useState } from "react";

const Tareas = ({elementPropsTarea}) => {
    return (
        <>
            <div className="tareas">
                <div className="tareaAgregada">{elementPropsTarea.inputOfTodo}</div>
                {/* <div className="tareaAgregada">Pasear al perro</div>
                <div className="tareaAgregada">Lavar ropa</div>
                <div className="itemsLeft">quedan x items</div> */}
            </div>

        </>

    )
}

export default Tareas;