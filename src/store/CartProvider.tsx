import React from "react";
import CartContext from "./cart-context";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContextProvider: React.FC = (props) => {
  const addItemToCartHandler = (item: Item) => {};

  const removeItemFromCartHandler = (id: string) => {};

  const cartContextValue = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
