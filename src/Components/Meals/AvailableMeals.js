import React from "react";
import Card from "../UI/Card";
import classes from "../Meals/Meals_Css/AvailableMeals.module.css";
import * as DUMMY_DATA from "../../SharedModules/DummyData.js";

export default function AvailableMeals(props) {
  const Data = DUMMY_DATA.DUMMY_MEALS;
  const mealList = Data.map((meal) => <list>{meal.name}</list>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
