import { useState } from 'react'

import './App.css'
import Form from './Form'
import Display from './Display'

function App() {
  const [tasks,setTasks]=useState([])
  const addTask=(onNewTask)=>{
    const newTask = { text: onNewTask, completed: false };
    setTasks([...tasks,newTask])
  }
  const deleteTask=(deletedIndex)=>{
    const filteredTasks = tasks.filter((_,index)=>index !== deletedIndex)
       setTasks(filteredTasks)
  }
  const toggleCompleted = (indexToToggle) => {
  const updatedTasks = tasks.map((task, index) => {
    if (index === indexToToggle) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  setTasks(updatedTasks);
};


  return (
    <>
      <Form addTask={addTask}/>
      <Display tasks={tasks} deleteTask={deleteTask} toggleCompleted ={toggleCompleted}/>
    </>
  )
}

export default App
