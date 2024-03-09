import { useState } from 'react'
import './App.css'
import { TbLetterXSmall } from "react-icons/tb";
import Input from './components/inputTodo';
import Tareas from "./components/tareas";

function App() {

  // useState  guarda y actualiza lo ingresado por el usuariom useState comienza como un objeto vacío


  const [inputText, setInputText] = useState({});

  // :
  const [tarea, setTarea] = useState([])

  // Acá e.target.name toma el name="nameOfInput" 
  // y e.target.value lo ingresado por el usuario
  const handleChange = (e) => {
    setInputText({
      [e.target.name]: e.target.value
    })
    // console.log("inputText", inputText, "e.target.value ", e.target.value, "e.target.name ", e.target.name)
  }
  // la variable tarea será utilizada en el map para ir creando las tareas ingresadas
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setTarea([...tarea, inputText])
    }
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault()
    setTarea([...tarea, inputText])
  }

  // En form tengo que poner onSubmit={handleSubmit}??

  return (
    <>
      <h1 className="todo">tOdo</h1>
      <div className="caja">
        <div className="textInput" >
          <form >
            <input
              onChange={handleChange}
              onKeyDown={handleSubmit}
              className="inputTareas"
              type="text"
              placeholder="Agrega tus tareas"
              name="nameOfInput"
            />
            <button onClick={handleSubmitBtn}
              type="submit" className="todo-btn">
              +</button>
          </form>
        </div>
        <div className="hayTareas">
          {tarea.length > 0 ?
            tarea.map((mapElement, index) => {
              return < Tareas key={index} tareaProps={mapElement} />
            }) : "       No hay tareas, añadir tareas"
          }
        </div>
        <div className="tareasRestantes">
          {tarea.length > 0 ? `Quedan ${tarea.length} tareas` : null}
        </div>
      </div>


    </>
  )
}

export default App
