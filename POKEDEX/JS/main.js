const pokemonName = document.querySelector('.pokemon_name');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.com/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data =  await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
}

renderPokemon('25');

