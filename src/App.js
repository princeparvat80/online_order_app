import React, { Fragment,useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./SharedModules/Cart/Cart";
import Header from "./SharedModules/Layout/Header";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setcartIsShown(true);
  }
  const hideCartHandler = ()=>{
    setcartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      <Header 
      showCartHandler={showCartHandler}
      />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
