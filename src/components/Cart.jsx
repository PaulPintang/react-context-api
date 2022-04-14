import React, { useContext } from "react";
import CartContext from "../CartContext";
const Cart = () => {
  const { item } = useContext(CartContext);
  return (
    <div>
      <h1>You have {item} in your cart</h1>
    </div>
  );
};

export default Cart;
