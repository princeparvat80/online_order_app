import React from "react";
import classes from "./Meal_items_Css/MealItem.module.css";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>Form</div>
    </li>
  );
}
