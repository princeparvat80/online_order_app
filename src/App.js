import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./SharedModules/Cart/Cart";
import Header from "./SharedModules/Layout/Header";
import CartProvider from "./SharedModules/Store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setcartIsShown(true);
  }
  const hideCartHandler = ()=>{
    setcartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      <Header 
      showCartHandler={showCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
    //Cart Context required in all the component so its better to wrap all the component in cart context provider.
  );
}

export default App;
