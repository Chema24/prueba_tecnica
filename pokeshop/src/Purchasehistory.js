import { useEffect, useState } from "react";
import axios from "axios";

const Purchasehistory = () => {
const [purchases, setPurchases] = useState([]);

useEffect(() => {
    // Obtener el historial de compras del usuario desde el backend
axios.get('http://localhost:8000/api/purchases', {
    headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
.then(response => {
setPurchases(response.data);
    })
.catch(error => {
    console.error("Error al obtener el historial de compras:", error);
    });
}, []);

return (
    <div className="purchase-history">
        <h2>Historial de Compras</h2>
        {purchases.length === 0 ? (
            <p>No se ha realizado ninguna compra.</p>
        ) : (
        purchases.map(purchase => (
            <div key={purchase.id} className="purchase-item">
            <h3>Compra #{purchase.id}</h3>
            <p>Total: ${purchase.total}</p>
            <p>Fecha: {new Date(purchase.created_at).toLocaleDateString()}</p>
            <div className="pokemon-list">
                {purchase.items.map(item => (
                <div key={item.pokemon_id} className="pokemon-card">
                    <img src={item.sprite_url} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
            ))}
        </div>
    </div>
    ))
    )}
</div>
    );
};

export default Purchasehistory;
