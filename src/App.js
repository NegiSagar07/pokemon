import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {

        const fetches = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        Promise.all(fetches).then(results => setPokemonData(results));
      });
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonData.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-12">
      <div className='text-center'>
      <input 
        type="text"
        placeholder="Search Pokémon..."
        className="mb-4 p-2 border border-gray-400 rounded"
        onChange={handleSearch}
      />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-lg text-center">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto mb-2" />
            <h3 className="text-xl font-bold">{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
