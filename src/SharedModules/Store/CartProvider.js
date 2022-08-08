import React from "react";
import CartContext from "./cart-context";
// This file will give Context of cart to all the Component which need that
export default function CartProvider(props) {
  const AddIteamToCartHandler = (item) => {};
  const RemoveIteamFromCartHandler = (id) => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: AddIteamToCartHandler,
    removeItem: RemoveIteamFromCartHandler,
  };
  return (
    <CartContext.Provider values={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
