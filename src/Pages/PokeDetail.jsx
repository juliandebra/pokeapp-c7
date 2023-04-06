import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const PokeDetail = () => {
    const [poke, setPoke] = useState({})
    const {name} = useParams()
    const {favDispatch} = usePokeStates()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPoke(data))
    }, [])


    const addFav = () => {
        favDispatch({type: 'ADD_FAV', payload: poke})
    }
    
  return (
    <div>
        <h2>{poke.name}</h2>
        <img src={poke.sprites?.front_default} alt="" />
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail