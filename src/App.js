import React from 'react';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon List</h1>
      <PokemonList />
    </div>
  );
}

export default App;
