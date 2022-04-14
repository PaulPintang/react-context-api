import React, { useContext } from "react";
import CartContext from "../CartContext";
import { Button } from "@mantine/core";
const Addtocart = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Button color="indigo" size="xs" onClick={addToCart}>
      Add item
    </Button>
  );
};

export default Addtocart;
