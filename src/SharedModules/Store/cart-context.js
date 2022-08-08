// React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
import React from "react";

const CartContext = React.createContext({
//this will give better autocompletion
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
// now we have to manage this context by the help of usestate or usereducer will be done on CartProvider file