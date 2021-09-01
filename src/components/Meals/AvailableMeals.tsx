import React from "react";
import classes from "./AvailableMeals.module.css";

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
    description: "Saludable...y verde...",
    price: 8000,
  },
];

const AvailableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
