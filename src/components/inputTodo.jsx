import { useState } from "react";




const Input = () => {
 const [inputText, setInputText] = useState ({});
const [tarea, setTarea] = useState ("")



 const handleChange = (e) => {

  setInputText(e.target.value)
  console.log("e.target.value", e.target.value)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  setTarea([inputText])
  console.log(inputText)
}


  return (
    <div className="caja">
      <h1 className="todo">To-do list</h1>
      <div className="card">
        <div className="textInput" >
          <form onSubmit={handleSubmit}>
            <input  
            onChange={handleChange} 
            className="inputTareas" type="text"
             placeholder="Agrega tus tareas" 
             name="inputOfTodo"
             />
            <button  type="submit" className="todo-btn">
              +</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Input