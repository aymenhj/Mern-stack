
import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Navigation from './Components/Navigation'
import styles from  './css/App.module.css'
function App() {
 

  return (
    <>
      <div className={styles.container}>
        <Header/>
        <Navigation/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
