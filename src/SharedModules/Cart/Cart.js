import React from "react";
import Modal from "../../Components/UI/Modal";
import classes from "./Cart_Css/Cart.module.css";

export default function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: 1,
          name: "Shushi",
          price: 36.66,
          amount: 2,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
