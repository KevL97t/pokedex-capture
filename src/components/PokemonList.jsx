import React, { useContext, useEffect } from 'react'
import pokemonListContext from '../context/pokemonList'
import PokemonCard from './PokemonCard'
import './PokemonList.css'

const PokemonList = () => {

    const { state } = useContext(pokemonListContext);

  return (
    <div className='pokemonlist__container'>
        {state.length < 1 && <p className='nopokemons__message'>No Pokemons captured yet!</p>}
        { state && state.map((item) => (<PokemonCard name={item.name} id={item.id} icon={item.icon} />))}
    </div>
  )
}

export default PokemonList