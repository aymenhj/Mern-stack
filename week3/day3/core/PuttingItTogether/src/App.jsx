
import './App.css'
import Person from './Components/Person'

function App() {
  

  return (
    <>
     <Person firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
     <Person firstName="Smith" lastName="Jhon" age={88} hairColor="Brown"/>
    </>
  )
}

export default App
