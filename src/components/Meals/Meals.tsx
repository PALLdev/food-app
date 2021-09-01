import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSumary from "./MealsSumary";

const Meals: React.FC = () => {
  return (
    <div>
      <MealsSumary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
