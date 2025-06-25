import { useState } from 'react'
import './App.css'
import BoxForm from './Components/BoxForm'
import BoxDisplay from './Components/BoxDisplay'

function App() {
 const [boxes, setBoxes] = useState([])
  const addNewBox = (newBox) => {
    setBoxes([...boxes, newBox]) 
  }
  const deleteBox = (indexToRemove) => {
    const filteredBoxes = boxes.filter((_,index) => index !== indexToRemove)
    setBoxes(filteredBoxes)
  }
  return (
    <>
        <h1>Box Generator Master:</h1>
          <BoxForm addNewBox={addNewBox}/>
        <div style={{marginTop :"200px"}}> 
          <BoxDisplay boxes={boxes} deleteBox={deleteBox}/>
        </div>
    </>
  )
}

export default App
