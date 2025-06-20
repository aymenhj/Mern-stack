import {useState} from 'react'

const Person = ({firstName,lastName,age,hairColor}) => {
 const [increasesAge,setIncreasesAge]=useState(age)
 const increment=()=>{
    setIncreasesAge((prevAge)=>prevAge+1)
 }

  return (
    <div>
        <h1>{firstName},{lastName}</h1>
        <p>Age:{increasesAge}</p>
        <p>Hair color:{hairColor}</p>
        <button onClick={increment}>Birthday Button for {firstName},{lastName}</button>
    </div>
  )
}

export default Person