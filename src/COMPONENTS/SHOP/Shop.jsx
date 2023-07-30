/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../PRODUCT/Product";
import Cart from "../CART/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = (product) => {
    console.log("Product added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key="product.id"
            products={product}
            handleProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
        
      </div>
    </div>
  );
};

export default Shop;
