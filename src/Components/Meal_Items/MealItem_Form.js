import React from "react";
import Input from "../../SharedModules/Utility/Input";
import classes from "./Meal_items_Css/MealItem_Form.module.css";

export default function MealItem_Form(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount"+ props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
