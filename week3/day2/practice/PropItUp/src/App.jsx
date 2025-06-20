
import './App.css'
import PersonCard from './Components/PersonCard'

function App() {
  

  return (
    <>
      <PersonCard firstName="Carla" lastName="Smith" age={28} hairColor="Blonde"/>
      <PersonCard firstName="Sarrah" lastName="Adams" age={20} hairColor="Red"/>
      <PersonCard firstName="Mark" lastName="Cyrus" age={30} hairColor="Brown"/>
      <PersonCard firstName="Erick" lastName="Anderson" age={27} hairColor="Black"/>
    </>
  )
}

export default App
