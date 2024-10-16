import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

const MainView = () => {
const [pokemons, setPokemons] = useState([]);
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);

useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page-1)*20}`)
    .then(response => setPokemons(response.data.results));
}, [page]);

const handleSearch = () => {
    if (search) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then(response => setPokemons([response.data]));
    }
};

return (
    <div>
    <input type="text" placeholder="Buscar Pokémon" value={search} onChange={e => setSearch(e.target.value)} />
    <button onClick={handleSearch}>Buscar</button>

    <div className="pokemon-list">
        {pokemons.map(pokemon => (
        <div key={pokemon.name} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
            <button onClick={() => addToCart(pokemon)}>Agregar al carrito</button>
        </div>
        ))}
    </div>

    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
    <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
);
};

export default MainView;
