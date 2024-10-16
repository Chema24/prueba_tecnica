import { useState, useEffect } from "react";
import axios from "axios";

const cart = () => {
const [cart, setCart] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/cart', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    }).then(response => setCart(response.data));
}, []);

const handleRemove = (pokemonId) => {
    axios.delete(`http://localhost:8000/api/cart/${pokemonId}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    }).then(() => setCart(cart.filter(pokemon => pokemon.id !== pokemonId)));
};

const handleCheckout = () => {
    axios.post('http://localhost:8000/api/checkout', {}, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    }).then(() => {
    alert('Compra realizada');
    setCart([]);
    });
};

return (
    <div>
        <h2>Carrito de compras</h2>
        {cart.map(pokemon => (
            <div key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <button onClick={() => handleRemove(pokemon.id)}>Eliminar</button>
            </div>
        ))}
            <button onClick={handleCheckout}>Realizar compra</button>
    </div>
);
};

export default cart;
