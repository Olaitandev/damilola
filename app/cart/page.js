import CartDetails from "@/components/CartComponents/CartDetails";
import CartHero from "@/components/CartComponents/CartHero";
import NavBar from "@/components/NavBar";
import React from "react";

function Cart() {
  return (
    <div>
      <NavBar cartVisible={true} />
      <CartHero />
      <CartDetails />
    </div>
  );
}

export default Cart;
