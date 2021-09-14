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
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      // only works if we have that item already
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems: Item[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "DELETE_CART_ITEM":
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      const item = state.items[itemIndex];
      const updatedAmount = state.totalAmount - item.price;

      let newItemsArray: Item[];

      if (item.amount === 1) {
        newItemsArray = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem: Item = {
          ...item,
          amount: item.amount - 1,
        };
        newItemsArray = [...state.items];
        newItemsArray[itemIndex] = updatedItem;
      }

      return {
        items: newItemsArray,
        totalAmount: updatedAmount,
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
