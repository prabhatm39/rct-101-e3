import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';


const Product = () => {
  // Note: this id should come from api
  
  // const product = { id: 1 };

  const [product, setProduct] = useState({});

 
  useEffect(() => {
      fetch("http://localhost:8080/products")
          .then((r) => r.json())
          .then((d) => setProduct(...product, d));
      
  },[])
  return (
    <>
    
    <div data-cy={`product-${product.id}`}>
     
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
    </>
  );
};

export default Product;
