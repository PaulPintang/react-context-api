import React, { useContext } from "react";
import CartContext from "../CartContext";
const Cart = () => {
  const { item } = useContext(CartContext);
  return (
    <div>
      <div className="py-6 ">
        <i class="fa-solid fa-cart-shopping text-5xl text-gray-600 relative ">
          <span className="rounded-full bg-green-400 text-white text-[12px] p-[8px] absolute right-[-12px] top-[-10px]">
            {item}
          </span>
        </i>
      </div>
      {item === 0 ? (
        <span>Your cart is empty!!</span>
      ) : (
        <span>You have {item} items in your cart !!</span>
      )}
    </div>
  );
};

export default Cart;
