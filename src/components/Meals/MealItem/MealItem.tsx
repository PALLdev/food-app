import React from "react";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem: React.FC<{
  id: string;
  name: string;
  description: string;
  price: number;
}> = (props) => {
  const formatedPrice = `$${props.price.toFixed(0)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
