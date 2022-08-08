import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./SharedModules/Cart/Cart";
import Header from "./SharedModules/Layout/Header";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
