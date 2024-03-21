import { useState, useEffect } from 'react'
import './App.css'
import Tareas from "./components/tareas";


function App() {

  const [inputText, setInputText] = useState({})
  const [tarea, setTarea] = useState([])

  useEffect(() => {
    fetchTareas();
  }, [] )

  const fetchTareas = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => { return response.json() })
      .then((data) => { setTarea(data) })
      .catch((error) => { console.log("error", error) })
  }

  // console.log("data: ", tarea)

  const handleChange = (e) => {
    setInputText({
       label: e.target.value,
       done: false
    })
    // console.log("input", inputText)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      const newTarea = [...tarea, inputText];
      setTarea(newTarea);
      fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTarea)
      })
    }
  }


  const handleCreateUser = (e) => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify([])
    })
    .then((response)=>{ return response.json()})
    .then((data)=>{setTarea([...tarea, data]);
    setInputText({ nameOfInput: "" })
    })
    .catch((error)=>{error})
  }



  const eliminarTarea = (valorTarea) => {
    const borrandoTareas = tarea.filter(tarea => tarea.value !== valorTarea);
    setTarea(borrandoTareas);
  };

  return (
    <>
      <h1 className="todo">tOdo</h1>
      <button onClick={handleCreateUser}>Crear usuario</button>
      <div className="caja">
        <div className="textInput" >
          <form >
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="inputTareas"
              type="text"
              placeholder="Agrega tus tareas"
              name="nameOfInput"
              value={inputText?.nameOfInput}
            />
            <button
              type="submit" className="todo-btn">
              +</button>
          </form>
        </div>
        <div className="hayTareas">
          {tarea.length > 0 ?
            tarea.map((mapElement, index) => {
              return < Tareas
              key={index}
              tareaProps={mapElement} eliminarTarea={eliminarTarea} />
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