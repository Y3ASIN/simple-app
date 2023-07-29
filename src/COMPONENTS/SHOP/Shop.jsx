/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../PRODUCT/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">       
          {products.map((product) => (
            <Product key="product.id" products={product} ></Product>
          ))}
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Shop;
