import logo from './logo.svg';
import './App.css';
import MainView from './components/MainView';
import PokemonList from './components/PokemonList';
import {PokemonListProvider} from './context/pokemonList'

function App() {
  return (
    <PokemonListProvider>
       <div className="App">
      <MainView />
      </div>
    </PokemonListProvider>
  );
}

export default App;
