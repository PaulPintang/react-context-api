import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [item, setItem] = useState(0);
  const addToCart = () => {
    setItem((item) => item + 1);
  };
  return (
    <CartContext.Provider value={{ item, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
