import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  // const cart=props.cart  // option-1
  //   const { cart } = props; // option-2

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Total shipping: ${totalShipping.toFixed(2)}</p>
      <p>tax: ${tax.toFixed(2)}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
