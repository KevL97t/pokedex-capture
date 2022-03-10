import React, { createContext, useReducer } from "react";
import PokemonList from "../components/PokemonList";

const pokemonListContext = createContext();

const pokemonListInitialState = []


const pokemonListReducer = (state, action) => {
    switch (action.type){
        case 'ADD_POKEMON':
           return [...state, {name: action.payload.name, id: action.payload.id, icon: action.payload.icon}]

        default:
            return state;
    }
}

export const PokemonListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(pokemonListReducer, pokemonListInitialState)

    const data = {
        state,
        dispatch
    }

    console.log(state)

    return (
    <pokemonListContext.Provider value={data}>{ children }</pokemonListContext.Provider>
    )
}


export default pokemonListContext;

