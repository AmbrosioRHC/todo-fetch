import { useState } from 'react'
import './App.css'
import { TbLetterXSmall } from "react-icons/tb";
import Input from './components/inputTodo';
import Tareas from "./components/tareas";

function App() {

  // useState  guarda y actualiza lo ingresado por el usuario

  const [inputText, setInputText] = useState({});

// Esto no lo entiendo:
  const [tarea, setTarea] = useState([])
  // Acá e.target.name toma el name="nameOfInput" 
  // y e.target.value lo ingresado por el usuario
  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value 
    })
    console.log("e.target.value ", e.target.value, "e.target.name ", e.target.name)
  }
// la variable tarea será utilizada en el map para ir creando las tareas ingresadas
  const handleSubmit = (e) => {
    e.preventDefault()
    setTarea([...tarea, inputText])

  }

// En form tengo que poner onSubmit={handleSubmit}??

  return (
    <>
      <div className="caja">
        <h1 className="todo">To-do list</h1>
        <div className="card">
          <div className="textInput" >
              <form >
              <input
                onChange={handleChange}
                className="inputTareas"
                type="text"
                placeholder="Agrega tus tareas"
                name="nameOfInput"
              />
              <button onClick={handleSubmit} type="submit" className="todo-btn">
                +</button>
            </form>
          </div>
        </div>
      </div>
      <div>
      {
        tarea.map((mapElement, index) => {
          return < Tareas key={index} tareaProps={mapElement}/>;
        })
      } 
      </div>

    </>
  )
}

export default App
