import React from "react";
import { Button, Checkbox } from "@mantine/core";
const Addtocart = () => {
  return (
    <div className="flex justify-center">
      <Button variant="outline" color="violet">
        Hello world!
      </Button>
      <Checkbox label="I agree to sell my privacy" />
    </div>
  );
};

export default Addtocart;
