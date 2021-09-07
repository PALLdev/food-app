import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC<{ showCart: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);
  // reduce converts an array into a single value (number in this case), inicially the current value is 0, but after every execution it will be the result of the return statement
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Tu carro</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
