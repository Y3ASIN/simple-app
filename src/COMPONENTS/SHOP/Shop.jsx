/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Shop.css";

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
    <div>
      <h1>This is shop</h1>
      <ul>
        {products.map((product) => (
          <li key="product.id"> {product.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
