import React from "react";
import classes from "../Layout/Layout_Css/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
export default function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
}
