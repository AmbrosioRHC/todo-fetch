import { useState, useEffect } from 'react'
import './App.css'
import Tareas from "./components/tareas";


function App() {

  const [inputText, setInputText] = useState({ label: "", done: false })
  const [tarea, setTarea] = useState([])

  useEffect(() => {
    fetchTareas();
  }, [])

  const fetchTareas = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => { return response.json() })
      .then((data) => { setTarea(data) })
      .catch((error) => { console.log("error", error) })
  }


  const handleChange = (e) => {
    setInputText({
      label: e.target.value,
      done: false
    })

  }

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      e.preventDefault();

      const newTarea = [...tarea, inputText];
      setTarea(newTarea);
      fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTarea)
      });
    }
  }


  const handleCreateUser = (e) => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([])
    })
      .then((response) => { return response.json() })
      .then((data) => {
        setTarea([...tarea, data]);
        setInputText({ nameOfInput: "" })
      })
      .catch((error) => { error })
  }



  const eliminarTarea = (index) => {
    const nuevasTareas = [...tarea];
    nuevasTareas.splice(index, 1);
    setTarea(nuevasTareas);

    fetch("https://playground.4geeks.com/apis/fake/todos/user/ambrosio", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ index: index })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
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
              value={inputText.label}
            />
           
          </form>
        </div>
        <div className="hayTareas">
          {tarea.length > 0 ?
            tarea.map((mapElement, index) => {
              return < Tareas
                key={index}
                tareaProps={mapElement}
                eliminarTarea={() => eliminarTarea(index)} />
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