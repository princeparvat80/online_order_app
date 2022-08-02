import React from "react";
import Card from "../UI/Card";
import classes from "../Meals/Meals_Css/AvailableMeals.module.css";
import * as DUMMY_DATA from "../../SharedModules/DummyData.js";
import MealItem from "../Meal_Items/MealItem";

export default function AvailableMeals(props) {
  const Data = DUMMY_DATA.DUMMY_MEALS;
  const mealList = Data.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
