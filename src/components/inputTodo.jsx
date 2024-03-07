import { useState } from "react";




const Input = () => {

  return (
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
  )
};

export default Input