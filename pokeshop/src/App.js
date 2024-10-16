import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MainView from "./MainView";
import PurchaseHistory from "./Purchasehistory";  // Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menú de navegación */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/purchase-history">Historial de Compras</Link>  {/* Enlace a la nueva vista */}
        </nav>

        {/* Definir las rutas */}
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/purchase-history" component={PurchaseHistory} />  {/* Nueva ruta */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

