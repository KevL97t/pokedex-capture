import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({ name, id, icon }) => {
  return (
    <div className='pokemoncard__container'>
        <img className='pokemoncard__icon' src={icon} alt="pokemon-icon" />
        <div className='pokemoncard__id--container'>
            <span className='pokemoncard__id'>{ id }</span>
        </div>
        <p className='pokemoncard__name'>{name}</p>
    </div>
  )
}

export default PokemonCard