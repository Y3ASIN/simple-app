/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Product from "../PRODUCT/Product";

const Cart = (props) => {
  const cart = props.cart;

  //const total = cart.reduce((total, product) => total + product, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product;
  }

  let shipping = 0;
  if (total > 50) {
    shipping = 0;
  } else if (total > 20) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 10.99;
  }
  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>
        {" "}
        <small>Shipping cost: {shipping}</small>{" "}
      </p>
      <p>
        <small>Tax + VAT: {tax} </small>
      </p>
      <p>Total Price {Number(grandTotal)} </p>
    </div>
  );
};

export default Cart;
