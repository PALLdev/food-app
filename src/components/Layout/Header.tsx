import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header: React.FC<{ onShowCart: () => void }> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealsApp</h1>
        <HeaderCartButton showCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="varios platos de comida" />
      </div>
    </>
  );
};

export default Header;
