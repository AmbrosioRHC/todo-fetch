import { useState } from 'react'
import './App.css'
import { TbLetterXSmall } from "react-icons/tb";
import Input from './components/inputTodo';
import Tareas from "./components/tareas";

function App() {

  return (
    <>
     <Input/>
     <Tareas />
    </>
  )
}

export default App
