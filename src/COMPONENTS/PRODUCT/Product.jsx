/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.products;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name"> {name} </h4>
        <br />
        <p>
          <small>by: {seller} </small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock -Order now </small>
        </p>
        <button
          className="main-button"
          onClick={() => props.handleProduct(price)}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} beatFade /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
