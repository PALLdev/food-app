import React, { useContext } from "react";
import Modal from "../UI/Modal";

import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const Cart: React.FC<{ onCloseCart: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const totalAmountWithDots = `$ ${cartCtx.totalAmount
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;

  // agregar solo 1 de ese item
  const cartItemAddHandler = (item: Item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor total</span>
        <span>{totalAmountWithDots}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Cerrar
        </button>
        {hasItems && <button className={classes.button}>Ordenar</button>}
      </div>
    </Modal>
  );
};

export default Cart;
