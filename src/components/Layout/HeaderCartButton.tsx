import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Tu carro</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
