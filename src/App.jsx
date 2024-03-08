import { useState } from 'react'
import './App.css'
import { TbLetterXSmall } from "react-icons/tb";
import Input from './components/inputTodo';
import Tareas from "./components/tareas";

function App() {

  const [inputText, setInputText] = useState({});
  const [tarea, setTarea] = useState([
    { inputOfTodo: "" },

  ])

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
    console.log("e.target.value", e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTarea([...tarea, inputText])

  }
  return (
    <>
      <div className="caja">
        <h1 className="todo">To-do list</h1>
        <div className="card">
          <div className="textInput" >
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                className="inputTareas"
                type="text"
                placeholder="Agrega tus tareas"
                name="inputOfTodo"
              />
              <button onClick={handleSubmit} type="submit" className="todo-btn">
                +</button>
            </form>
          </div>
        </div>
      </div>
      <div>
      {
        tarea.map((tareaTodo, index) => {
          return < Tareas key={index} elementPropsTarea={tareaTodo}/>;
        })
      } 
      </div>

    </>
  )
}

export default App
