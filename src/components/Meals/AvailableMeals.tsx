import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Los mejores pescados y vegetales",
    price: 10000,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Una especialidad alemana!",
    price: 6000,
  },
  {
    id: "m3",
    name: "Hamburguesa Asada",
    description: "Americana, en su punto, carnosa",
    price: 5000,
  },
  {
    id: "m4",
    name: "Platillo Verde",
    description: "Saludable... y verde...",
    price: 8000,
  },
];

const AvailableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
