import { useState,useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

        .then(response => {
        setPokemon(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
      });

  },[])

  return (
    <>
      <h1>Pokemon API:</h1>
      {
      pokemon.map((onePokemon,index)=>(
        <ul key={index}>
          <li >
          {onePokemon.name}
          </li>
        </ul>
      ))
      
      }

    </>
  )
}

export default App
