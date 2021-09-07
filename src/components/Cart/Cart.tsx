import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const Cart: React.FC<{ onCloseCart: () => void }> = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 3, price: 15000 }].map(
        (item: Item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor total</span>
        <span>13000</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Cerrar
        </button>
        <button className={classes.button}>Ordenar</button>
      </div>
    </Modal>
  );
};

export default Cart;
