import React from "react";
import classes from "./AvailableMeals.module.css";
import * as DUMMY_DATA from "../../SharedModules/DummyData.js";

export default function AvailableMeals(props) {
  const Data = DUMMY_DATA.DUMMY_MEALS;
  const mealList = Data.map((meal) => <list>{meal.name}</list>);

  return (
    <section className={classes.meals}>
      <ul>{mealList}</ul>
    </section>
  );
}
