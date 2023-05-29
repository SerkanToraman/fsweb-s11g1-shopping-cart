import React from "react";
import { Route } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {

  const {products,addItem} =useContext(ProductContext);
  const {cart,setCart} =useContext(CartContext);

 
  
  return (
    <div className="App">
      <Navigation cart={cart}/>

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products products={products} addItem={addItem}/>
        </Route>
        <Route path="/cart">
          <ShoppingCart cart={cart}/>
        </Route>
      </main>
    </div>
  );
}

export default App;
