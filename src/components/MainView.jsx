import React, { useContext, useState } from 'react'
import pokemonListContext from '../context/pokemonList';
import PokemonList from './PokemonList';
import { POKEMON_TYPES } from '../context/pokemonTypes';
import './MainView.css'
import PoweredBy from './PoweredBy';
import SuccessfullMessage from './SuccessfullMessage';
import Loader from './Loader';

const MainView = () => {

    const [pokemonSlug, setPokemonSlug] = useState('');
    const [error, setError] = useState(false);
    const [successfull, setSuccessfull] = useState(false);
    const [loading, setLoading] = useState(false);

   const { dispatch, state } = useContext(pokemonListContext)

    const handleFetch = async () => {
        setError(false);
        setLoading(true);

        try {

            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`;
            const res = await fetch(url);
            const parsed = await res.json()

            console.log(parsed);
          
            dispatch({ type: POKEMON_TYPES.ADD_POKEMON, payload: { name: parsed.name, id: parsed.id, icon: parsed.sprites.front_default} })


            setSuccessfull(true);
            setTimeout(() => {
                setSuccessfull(false);
            }, 3000)
            
        } catch (error) {

            console.log(error);
            setError(true);
            
        } finally {
            setLoading(false)
        }
    }

    const handleInputText = (e) => {
        setPokemonSlug((e.target.value).toLowerCase())
    }

  return (
    <div className='mainview__container'>
    <PoweredBy />
    <div className='searchform__container'>
        <label htmlFor="name">Enter a pokemon name</label>
        <br />
        <br />
        <input className='searchform__input' onChange={(e) => handleInputText(e)}  type='text' name='name' id='name'/>
        <br /><br />
        <button className='searchform__button' onClick={handleFetch}>Catch</button>
    </div>
        {
            successfull && (
                <SuccessfullMessage />
            )
        }
        {
            loading && (
                <Loader />
            )
        }
        {
            (error && !loading) && (<p className='errormessage'>This pokemon doesnt appear to exist!:(</p>)
            
        }
        <PokemonList />
    </div>
  )
}

export default MainView