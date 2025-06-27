import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Blue from './Blue'
import NumberWord from './NumberWord'
function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:wordNbr' element={<NumberWord/>}/>
        <Route path="/:word/:textColor/:bgColor" element={<Blue/>} />
      </Routes>
    </>
  )
}

export default App
