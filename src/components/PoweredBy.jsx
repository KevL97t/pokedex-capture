import React from 'react'
import './PoweredBy.css'

const PoweredBy = () => {
  return (
    <div className='poweredby__container'>
        <p className='poweredby__text'>Powered by</p>
        <img className='poweredby__icon' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' alt='api-icon'/>
    </div>
  )
}

export default PoweredBy