import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem: React.FC<{
  id: string;
  name: string;
  description: string;
  price: number;
}> = (props) => {
  const cartCtx = useContext(CartContext);
  const formatedPrice = `$${props.price.toFixed(0)}`;

  const addToCartHandler = (validAmount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: validAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
