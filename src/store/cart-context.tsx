import React from "react";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartContextObj {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalAmount: 0,
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
