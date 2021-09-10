import React, { useReducer } from "react";
import CartContext from "./cart-context";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

type CartStateTypes = {
  items: Item[];
  totalAmount: number;
};

type CartActionTypes =
  | { type: "ADD_CART_ITEM"; item: Item }
  | { type: "DELETE_CART_ITEM"; id: string };

const defaultCartState: CartStateTypes = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartStateTypes, action: CartActionTypes) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      //update my cart items
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "DELETE_CART_ITEM":
      // const item = state.items.find((el) => {
      //   return el.id === action.id;
      // });

      // if (item!.amount > 1) {
      //   item!.amount = -1;
      // } else {

      // }

      const newItemsArray = state.items.filter((el) => {
        return el.id !== action.id;
      });
      return {
        items: newItemsArray,
        totalAmount: 0,
      };
    default:
      break;
  }
  return defaultCartState;
};

const CartContextProvider: React.FC = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "DELETE_CART_ITEM", id: id });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
